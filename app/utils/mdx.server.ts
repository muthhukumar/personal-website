import fs from 'fs'
import path from 'path'
import {bundleMDX} from 'mdx-bundler'

const getContent = async ({slug}: {slug: string}) => {
  const contentPath = path.join(process.cwd(), 'content', 'blog', slug)
  const indexFilePath = path.join(process.cwd(), 'content', 'blog', 'index.tsx')

  const mdxSource = String(fs.readFileSync(contentPath))
  const indexFileData = String(fs.readFileSync(indexFilePath))

  return await bundleMDX(mdxSource, {
    files: {
      'index.tsx': indexFileData,
    },
  })
}

export {getContent}
