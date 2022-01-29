import { useCatch, json, LoaderFunction, MetaFunction, useLoaderData, LinksFunction } from 'remix'

import { BigPost, BlogPost, Four00 } from '~/components'
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

  const bigPost = blogPosts[0]

  return (
    // <ListPage title="Writings" href="/blog">
    <div className="container w-full max-w-screen-xl mx-auto lg:w-5/6">
      <BigPost {...bigPost} imageLink={bigPost.seo.image.url} />
      <div className="max-w-screen-xl mx-5 lg:mx-24 2xl:mx-auto">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">More stories</h2>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
          {blogPosts.slice(1, blogPosts.length).map((blogPost) => (
            <BlogPost key={blogPost.id} {...blogPost} />
          ))}
        </div>
      </div>
    </div>
    // </ListPage>
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
