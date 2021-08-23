import {LoaderFunction} from 'remix'
import {useLoaderData} from '@remix-run/react'
import {Link} from 'react-router-dom'

import {BlogPostListType, getBlogPostListFromDisk} from '../utils/mdx.server'

export const loader: LoaderFunction = async () => {
  return getBlogPostListFromDisk()
}

export default function Index() {
  const blogPostList = useLoaderData<Array<BlogPostListType>>()

  return (
    <div className="w-full">
      {blogPostList.map((blog) => {
        return (
          <div key={blog.slug} className="text-primary">
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
