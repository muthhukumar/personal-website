import * as React from 'react'
import { json, Link, LoaderFunction, MetaFunction, useLoaderData, useSearchParams } from 'remix'
import { BiRightArrowAlt } from 'react-icons/bi'
import { capitalCase } from 'change-case'

import { getAllPosts } from '~/utils/mdx.server'

type Topic = {
  title: string
  topic: string
}

type BlogPost = {
  title: string
  slug: string
  summary: string
  tags: Array<string>
}

function NavLink({ topic, children }: { topic: string; children: React.ReactNode }) {
  const [searchParams] = useSearchParams()

  const topicFromSearchParams = searchParams.get('topic')

  const isActivePath = topicFromSearchParams === topic

  return (
    <Link to={`/blog?topic=${topic}`} className={`${isActivePath ? 'font-semibold' : undefined}`}>
      <p className="mb-1">{children}</p>
    </Link>
  )
}

function BlogPost({ title, description, slug }: Record<string, string>) {
  return (
    <div className="w-full">
      {/* <div className="flex items-center justify-center w-full p-4 mb-2 text-xl font-semibold text-center text-gray-600 border-2 border-gray-200 rounded-md h-44"> */}
      <h2 className="pb-1 mb-2 text-xl font-semibold text-gray-900 border-b-2 border-gray-100">
        {title}
      </h2>
      <p className="mb-3 text-sm">{description}</p>
      <Link to={`/blog/${slug}`} className="flex items-center text-sm text-gray-500">
        Read More <BiRightArrowAlt className="ml-1" />
      </Link>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: 'Articles and tutorials',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)

  const topic = url.searchParams.get('topic')

  const blogPosts = getAllPosts(['title', 'slug', 'summary', 'tags'])

  const isLatest = topic === 'latest' || !topic

  const filteredBlogPosts = isLatest
    ? blogPosts
    : blogPosts.filter((post) => post.tags.includes(topic))

  const topics = blogPosts.map((post) => post.tags)

  const uniqueTopics = Array.from(new Set(topics.flat())).map((topic) => ({
    title: capitalCase(topic),
    topic,
  }))

  return json({
    blogPosts: filteredBlogPosts,
    topics: [{ title: 'Latest', topic: 'latest' }, ...uniqueTopics],
  })
}

export default function Blog() {
  const { blogPosts, topics } =
    useLoaderData<{ blogPosts: Array<BlogPost>; topics: Array<Topic> }>()
  return (
    <div className="pt-16 h-[92.5vh] flex">
      <div className="container h-full pr-8 border-r w-72">
        <h2 className="text-xl font-black">Articles and tutorials</h2>
        <p className="mt-4 text-sm">Thoughts and tutorials on technologies I like and use.</p>

        <div className="my-6 w-1/4 h-[1px] bg-gray-300"></div>
        {topics.map((topic) => {
          return (
            <NavLink key={topic.topic} topic={topic.topic}>
              {topic.title}
            </NavLink>
          )
        })}
      </div>
      <div className="w-full h-full px-8 pb-16 overflow-y-scroll">
        {blogPosts.length === 0 && <p className="text-center">No blog post found.</p>}
        <div className="grid w-full grid-cols-2 gap-8">
          {blogPosts.map((blogPost) => (
            <BlogPost
              slug={blogPost.slug}
              key={blogPost.slug}
              title={blogPost.title}
              description={blogPost.summary}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
