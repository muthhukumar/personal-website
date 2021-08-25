import * as React from 'react'
import {json, LoaderFunction} from 'remix'
import {useLoaderData} from '@remix-run/react'
import {MdKeyboardBackspace} from 'react-icons/md'

import {
  BlogPostListType,
  getBlogPostListFromDisk,
  getMDXPageData,
  MDXPageType,
} from '../utils/mdx.server'
import {useMdxComponent} from '../utils/hooks'
import moment from 'moment'
import {Link} from 'react-router-dom'

type LoaderType = {
  blogData: BlogPostListType
  page: MDXPageType | null
}

export const loader: LoaderFunction = async ({params}) => {
  const page = await getMDXPageData({contentDir: 'blog', slug: params.slug})
  const blogData = getBlogPostListFromDisk().filter((blogPost) => blogPost.slug === params.slug)[0]
  return json({page, blogData}, {status: page ? 200 : 404})
}

export default function Index() {
  const {page, blogData} = useLoaderData<LoaderType>()

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!page) {
    return <div className="text-primary">Blog post not found</div>
  }

  return <MDXComponent page={page} blogData={blogData} />
}

function MDXComponent({page, blogData}: {page: MDXPageType; blogData: BlogPostListType}) {
  const Component = useMdxComponent(page.code)

  return (
    <div className="p-16 pt-0 mt-32">
      <div className="container flex flex-col items-start max-w-4xl mx-auto mb-12 text-primary">
        <Link to="/blog">
          <div className="flex items-center justify-start">
            <MdKeyboardBackspace className="mr-4" size={25} />
            <div className="text-lg font-semibold">Back to overview</div>
          </div>
        </Link>

        <div className="flex flex-col items-start mt-16">
          <h2 className="mb-4 text-3xl font-semibold">{blogData.title}</h2>
          <div className="text-lg font-normal text-gray-400">
            {moment(blogData.date).format('ll')} - 5 min read
          </div>
        </div>
      </div>
      <img src={blogData.banner} className="container max-w-6xl mx-auto rounded-lg" />
      <article className="container max-w-4xl mx-auto mt-16 prose prose-md prose-purple text-primary">
        <Component />
      </article>
    </div>
  )
}
