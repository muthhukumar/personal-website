import * as React from 'react'
import { useCatch, json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { BlogPost, Four00, Container } from '~/components'
import { getPosts, Post } from '~/utils/cms.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Muthukumar',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  const blogPosts = await getPosts(query)

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

  return (
    <Layout>
      <Container>
        <div className="w-full">
          <div className="w-full">
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
      </Container>
    </Layout>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container>
        <h2 className="text-xl font-bold text-pink-500 uppercase md:py-4 md:text-xl">
          Recently published
        </h2>
      </Container>
      {children}
    </>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/blog" />
  }

  return <Four00 title="500" message={message} link="/blog" />
}

export function ErrorBoundary() {
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
}
