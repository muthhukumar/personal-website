import fs from 'fs'
import path from 'path'
import {bundleMDX} from 'mdx-bundler'
import GrayMatter from 'gray-matter'

export interface BlogPostType {
  title: string
  date: string
  category: Array<string>
  updatedAt: string
  draft: boolean
  description: string
}

export interface BlogPostListType extends BlogPostType {
  slug: string
}

const BLOG_FOLDER_PATH = path.join(process.cwd(), 'content', 'blog')

const getContent = async ({slug}: {slug: string}) => {
  const contentPath = path.join(process.cwd(), 'content', 'blog', slug)
  // const indexFilePath = path.join(process.cwd(), 'content', 'blog', 'index.tsx')

  const mdxSource = String(fs.readFileSync(contentPath))
  // const indexFileData = String(fs.readFileSync(indexFilePath))

  return await bundleMDX(mdxSource, {
    // files: {
    //   'index.tsx': indexFileData,
    // },
  })
}

function getBlogData(blogPath: string): BlogPostType {
  if (typeof blogPath !== 'string') {
    throw new Error('Blog path should be a string.')
  }

  const blogData = fs.readFileSync(blogPath)

  const {
    title = '',
    date = '',
    category = [],
    updatedAt = '',
    draft = true,
    description = '',
  } = GrayMatter(blogData).data

  return {title, date, category, updatedAt, draft, description}
}

function getBlogPostsList(): Array<BlogPostListType> {
  const blogFolderStat = fs.lstatSync(BLOG_FOLDER_PATH)

  if (!blogFolderStat.isDirectory()) {
    throw new Error('Passed blog folder path is not a directory.')
  }

  const blogPosts = fs.readdirSync(BLOG_FOLDER_PATH)

  return blogPosts.map((blogPostName) => {
    const blogPath = path.join(BLOG_FOLDER_PATH, blogPostName)

    const blogStat = fs.lstatSync(blogPath)

    if (blogStat.isDirectory()) {
      const nestedBlogPath = path.join(blogPath, 'index.mdx')
      return {...getBlogData(nestedBlogPath), slug: blogPostName}
    }

    return {...getBlogData(blogPath), slug: blogPostName.replace(/.mdx/g, '')}
  })
}

export {getContent, getBlogPostsList}
