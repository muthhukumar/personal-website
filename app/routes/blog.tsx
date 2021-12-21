import * as React from 'react'
import {
  Form,
  useCatch,
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  useSearchParams,
} from 'remix'
import { IoIosSearch } from 'react-icons/io'

import { BlogPost, Four00, Container } from '~/components'
import { getPosts, Post } from '~/utils/cms.server'

export const meta: MetaFunction = () => {
  return {
    title: 'Blog | Muthukumar',
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
  const [searchParams] = useSearchParams()

  const query = searchParams.get('q')
  return (
    <Layout query={query}>
      <Container>
        <div className="w-full">
          <div className="py-2 md:py-6">
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
        </div>
      </Container>
    </Layout>
  )
}

function Layout({ children, query = '' }: { children: React.ReactNode; query?: string | null }) {
  return (
    <>
      <div className="pb-6 border-b border-color">
        <Container>
          <Form method="get">
            <h2 className="py-4 text-xl font-bold md:py-10 md:text-2xl">Blog</h2>
            <div className="flex items-center max-w-sm p-1 border rounded-md border-color">
              <IoIosSearch className="ml-2 text-gray-600" size={20} />
              <input
                name="q"
                type="text"
                className="w-full p-1 ml-2 text-sm bg-color"
                placeholder="Search posts..."
                defaultValue={query ?? ''}
              />
            </div>
          </Form>
        </Container>
      </div>
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
