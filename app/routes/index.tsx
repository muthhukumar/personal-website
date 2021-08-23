import {LoaderFunction} from 'remix'
import {useLoaderData} from '@remix-run/react'
import {Link} from 'react-router-dom'

import {BlogPostListType, getBlogPostListFromDisk, getMDXPageData} from '../utils/mdx.server'
import {useMdxComponent} from '../utils/hooks'

export const loader: LoaderFunction = async () => {
  // const {code} = await getContent({slug: 'avoid-magic-numbers.mdx'})
  // console.log(getBlogPostsListFromDisk())
  // console.log(await getMDXPageData({contentDir: 'blog', slug: 'closure'}))
  const {code} = await getMDXPageData({contentDir: 'blog', slug: 'closure'})
  return [getBlogPostListFromDisk(), code]
}

export default function Index() {
  const [blogPostList, code] = useLoaderData<[Array<BlogPostListType>, string]>()

  const Component = useMdxComponent(code)

  return (
    <div className="text-primary">
      {blogPostList.map((blog) => {
        return (
          <div key={blog.slug}>
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </div>
        )
      })}
      <Component />
    </div>
  )
}
