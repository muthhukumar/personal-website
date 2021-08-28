import * as React from 'react'
import {Link} from 'react-router-dom'
import {json, LoaderFunction, MetaFunction, useRouteData} from 'remix'
import {MdKeyboardBackspace} from 'react-icons/md'
import moment from 'moment'

import {
  BlogPostListType,
  getBlogPostListFromDisk,
  getMDXPageData,
  MDXPageType,
} from '~/utils/mdx.server'
import {useMdxComponent} from '~/utils/hooks'

type LoaderType = {
  blogData: BlogPostListType
  page: MDXPageType | null
}

export const meta: MetaFunction = ({data}) => {
  const blogData = data.blogData as BlogPostListType
  return {
    title: blogData.title,
    description: blogData.description,
    'og:title': blogData.title,
    'og:description': blogData.description,
    'og:image': blogData.banner,
  }
}

export const loader: LoaderFunction = async ({params}) => {
  const page = await getMDXPageData({contentDir: 'blog', slug: params.slug})
  const blogData = getBlogPostListFromDisk().filter((blogPost) => blogPost.slug === params.slug)[0]
  return json(
    {page, blogData},
    {
      status: page ? 200 : 404,
      headers: {
        'cache-control': 'max-age=3600',
      },
    },
  )
}

export default function Index() {
  const {page, blogData} = useRouteData<LoaderType>()

  React.useEffect(() => {
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
    <div className="p-6 pt-0 mt-32 md:p-8 lg:p-16">
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
      <article className="container max-w-4xl mx-auto mt-16 prose prose-md prose-pink text-primary">
        <Component />
      </article>
    </div>
  )
}
