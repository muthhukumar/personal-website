import * as React from 'react'
import {
  useCatch,
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  LinksFunction,
  Outlet,
} from 'remix'

import { BlogPost, Four00 } from '~/components'
import { getPosts, Post } from '~/utils/cms.server'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-title': 'Blog',
    title: 'Blog',
    description:
      'Tutorials for developers. Focus on Javascript, Typescript, React and other web development topics',
    pagename: 'Blog',
    image: '/images/og.jpg',
    robots: 'index, follow',
    // TODO: Og stuff are missing
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'canonical',
      href: 'https://www.nullish.in/blog',
    },
  ]
}

export const loader: LoaderFunction = async ({ request, context }) => {
  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  const blogPosts = await getPosts(query, context)

  if (blogPosts.length === 0) {
    throw json({ message: 'No blogs found.' }, { status: 404 })
  }

  const filteredBlogPosts = !query
    ? blogPosts
    : blogPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))

  return json(
    { blogPosts: filteredBlogPosts },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function Blog() {
  const { blogPosts } = useLoaderData<{ blogPosts: Array<Post> }>()
  // const [searchParams] = useSearchParams()

  // const query = searchParams.get('q')
  return (
    <div className="flex">
      <div className="overflow-y-auto max-h-screen max-w-[24rem] border-r border-color">
        <div className="sticky top-0 p-6 py-4 bg-color">
          <h2 className="font-bold">Writings</h2>
        </div>
        {/* <Container>
          <Form method="get">
            <h1 className="py-4 text-xl font-bold md:py-10 md:text-2xl">Blog</h1>
            <div className="flex items-center max-w-sm p-1 border rounded-md border-color">
              <IoIosSearch className="ml-2 text-gray-600" size={20} />
              <input
                name="q"
                type="text"
                className="w-full p-1 ml-2 text-sm border-white bg-color dark:border-black"
                placeholder="Search posts..."
                defaultValue={query ?? ''}
              />
            </div>
          </Form>
        </Container> */}
        <div className="p-2 text-sm">
          {blogPosts.map((blogPost) => (
            <BlogPost
              publishedAt={blogPost.publishedAt}
              key={blogPost.id}
              slug={blogPost.slug}
              title={blogPost.title}
              excerpt={blogPost.excerpt}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/" />
  }

  return <Four00 title="500" message={message} link="/" />
}

export function ErrorBoundary() {
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
}
