import {LoaderFunction} from 'remix'
import {useLoaderData} from '@remix-run/react'
import {Link} from 'react-router-dom'

import {BlogPostListType, getBlogPostsList} from '../utils/mdx.server'
// import {useMdxComponent} from '../utils/hooks'

export const loader: LoaderFunction = async () => {
  // const {code} = await getContent({slug: 'avoid-magic-numbers.mdx'})
  // console.log(getBlogPostsList())
  return getBlogPostsList()
}

export default function Index() {
  const blogPostList = useLoaderData<Array<BlogPostListType>>()

  // const Component = useMdxComponent(data)
  console.log(blogPostList)

  return (
    <div className="text-primary">
      {blogPostList.map((blog) => {
        return (
          <div key={blog.slug}>
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
