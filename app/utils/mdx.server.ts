import fs from 'fs'
import path from 'path'
import * as esbuild from 'esbuild'
import GrayMatter from 'gray-matter'
import {bundleMDX} from 'mdx-bundler'

export interface ArticlesType {
  title: string
  date: string
  categories: Array<string>
  updatedAt: string
  draft: boolean
  description: string
  banner: string
  bannerCredit: string
}

export interface ArticlesListType extends ArticlesType {
  slug: string
}

interface MDXSourceAndFilesType {
  mdxSource: string
  files: {
    [fileName: string]: string
  }
}

export interface MDXPageType {
  code: string
  frontmatter: {
    [key: string]: any
  }
  errors: esbuild.Message[] | Array<string>
  matter: GrayMatter.GrayMatterFile<any> | null
}

// interface MDXPageErrorType {
//   code: null
//   frontmatter: null
//   errors: Array<string>
//   matter: null
// }

const BLOG_FOLDER_PATH = path.join(process.cwd(), 'content', 'blog')

const shouldUseArticlesFromDisk = true

const isDirectory = (path: string): boolean =>
  fs.existsSync(path) && fs.lstatSync(path).isDirectory()

function getArticleFrontMatterData(articlePath: string): ArticlesType {
  if (typeof articlePath !== 'string') {
    throw new Error('article path should be a string.')
  }

  if (!fs.existsSync(articlePath)) {
    throw new Error(`File not found on the directory ${articlePath}`)
  }

  const article = fs.readFileSync(articlePath)

  const {
    title = '',
    date = '',
    categories = [],
    updatedAt = '',
    draft = true,
    description = '',
    bannerCredit = '',
    banner = '',
  } = GrayMatter(article).data

  return {title, date, categories, updatedAt, draft, description, banner, bannerCredit}
}

function getArticleData(slug: string): ArticlesListType {
  const article = path.join(BLOG_FOLDER_PATH, slug)

  if (isDirectory(article)) {
    const nestedArticlePath = path.join(article, 'index.mdx')
    return {...getArticleFrontMatterData(nestedArticlePath), slug}
  }

  return {...getArticleFrontMatterData(article), slug: slug.replace(/.(mdx|md)/g, '')}
}

function getArticlesFromDisk(): Array<ArticlesListType> {
  if (!isDirectory(BLOG_FOLDER_PATH)) {
    throw new Error('Passed article folder path is not a directory.')
  }

  const articles = fs.readdirSync(BLOG_FOLDER_PATH)

  const mappedArticles = articles
    .map((slug) => getArticleData(slug))
    .filter((article) => !article.draft)

  return mappedArticles.sort((a, b) => new Date(a.date).getTime() + new Date(b.date).getTime())
}

async function getMDXPageData({
  slug,
  contentDir,
}: {
  slug: string
  contentDir: string
}): Promise<MDXPageType | null> {
  const mdxSourceConfig = {
    async github(): Promise<MDXSourceAndFilesType> {
      throw new Error('The app and other stuff is not configured to use Github as the cms')
    },
    async disk(): Promise<MDXSourceAndFilesType> {
      const contentDirectory = path.join(process.cwd(), 'content', contentDir)

      if (!isDirectory(contentDirectory)) {
        throw new Error(
          `ContentDir value should point to a directory. But it points to a file or non existing stuff like contentDir:${contentDir}`,
        )
      }

      const contentFileName = fs.readdirSync(contentDirectory).filter((fileOrDir) => {
        const fileOrDirName = fileOrDir.replace(/.(mdx|md)/g, '')
        return fileOrDirName === slug
      })[0]

      if (!contentFileName) {
        throw new Error(`File '${slug}' on the directory '${contentDir}' does not exist`)
      }

      const contentPath = path.join(contentDirectory, contentFileName)

      if (isDirectory(contentPath)) {
        // TODO: Figure this out later
        const files: {[fileName: string]: string} = {}

        // TODO: Figure this out later
        let mdxSource = ''

        for (const file of fs.readdirSync(contentPath)) {
          const content = String(fs.readFileSync(path.join(contentPath, file)))

          if (file === 'index.mdx' || file === 'index.md') {
            mdxSource = content
            continue
          }

          files[file] = content
        }

        if (!mdxSource) {
          throw new Error(
            `Index file not found. On the directory ${contentDir} for the slug ${slug}`,
          )
        }

        return {
          mdxSource,
          files,
        }
      }

      return {
        mdxSource: String(fs.readFileSync(contentPath)),
        files: {},
      }
    },
  }

  try {
    const getterToUse = shouldUseArticlesFromDisk ? 'disk' : 'github'

    const {mdxSource, files} = await mdxSourceConfig[getterToUse]()
    return await bundleMDX(mdxSource, {files})
  } catch (error) {
    return null
  }
}

export {getArticlesFromDisk, getMDXPageData, getArticleData}
