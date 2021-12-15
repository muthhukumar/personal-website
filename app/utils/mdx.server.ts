import matter from 'gray-matter'
import { downloadDirList, downloadFileBySha } from './github.server'
import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'content')

const SourcesType = {
  GITHUB: 'GITHUB',
  FILE_SYSTEM: 'FILE_SYSTEM',
}

const sourceType =
  process.env.NODE_ENV === 'development' ? SourcesType.FILE_SYSTEM : SourcesType.GITHUB

if (!sourceType || (sourceType !== SourcesType.GITHUB && sourceType !== SourcesType.FILE_SYSTEM)) {
  throw new Error('Source type is not specified')
}

export default async function markdownToHtml(markdown: string) {
  const { unified } = await import('unified')
  const { default: remarkHtml } = await import('remark-html')
  const { default: remarkParse } = await import('remark-parse')
  const html = await unified().use(remarkParse).use(remarkHtml).process(markdown)
  return html.toString()
}

const sources = {
  [SourcesType.GITHUB]: {
    async getPostData(postSlug: string) {
      const dirList = await downloadDirList('content')
      const slugs = dirList.map((file) => ({ name: file.name, sha: file.sha }))

      const fileData = slugs.find((slug) => slug.name === postSlug)

      if (!fileData) {
        return { data: null, content: null }
      }

      const fileContents = await downloadFileBySha(fileData.sha)
      const { data, content } = matter(fileContents)
      return { ...data, content, slug: postSlug }
    },
    async getAllPosts() {
      const dirList = await downloadDirList('content')
      const slugs = dirList.map((file) => ({ name: file.name, sha: file.sha }))

      const posts = await Promise.all(
        slugs.map(async (slug) => {
          return this.getPostData(slug.sha)
        }),
      )

      return posts
    },
  },
  [SourcesType.FILE_SYSTEM]: {
    async getPostData(slug: string) {
      const realSlug = slug.replace(/\.md$/, '')
      const fullPath = join(postsDirectory, `${realSlug}.md`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return { ...data, content, slug: slug }
    },

    async getAllPosts() {
      const slugs = fs.readdirSync(postsDirectory)
      const slugsData = slugs.map((slug) => this.getPostData(slug))
      return Promise.all(slugsData)
    },
  },
}

export const md = { ...sources[sourceType] }
