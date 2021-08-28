import {json, LoaderFunction, MetaFunction, useRouteData, Form, useSubmit} from 'remix'
import {Link} from 'react-router-dom'
import {RiSearchLine} from 'react-icons/ri'
import {HiOutlineArrowRight} from 'react-icons/hi'
import moment from 'moment'

import {BlogPostListType, getBlogPostListFromDisk} from '~/utils/mdx.server'

type LoaderData = {
  blogPostList: Array<BlogPostListType>
  categories: Array<string>
  query: string | ''
}

export const meta: MetaFunction = () => {
  return {
    title: 'Blog',
  }
}

export const loader: LoaderFunction = async ({request}) => {
  const blogPostList = getBlogPostListFromDisk() ?? []

  const url = new URL(request.url)

  const query = url.searchParams.get('query') ?? ''

  const filteredBlogPost = query
    ? blogPostList.filter((blogPost) => blogPost.title.toLowerCase().includes(query.toLowerCase()))
    : blogPostList

  const uniqueCategories = new Set(blogPostList.map((blog) => blog.categories).flat())

  const categories = Array.from(uniqueCategories)

  return json(
    {blogPostList: filteredBlogPost, categories, query},
    {
      headers: {
        'cache-control': 'max-age=3600',
      },
    },
  )
}

export default function Blog() {
  const {blogPostList, categories, query} = useRouteData<LoaderData>()

  const latestBlog = query ? null : blogPostList[0]

  const blogPosts = query ? blogPostList : blogPostList.slice(1, blogPostList.length)

  const submit = useSubmit()

  return (
    <div className="p-8 pt-0 mt-32 md:p-16">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary">Find latest of my writing here.</h2>
        <Form onChange={(event) => submit(event.currentTarget, {method: 'get'})}>
          <div className="container flex items-center justify-center px-4 mt-8 overflow-hidden border border-gray-100 dark:border-gray-600 rounded-xl focus-within:border-gray-600 dark:focus-within:border-gray-100">
            <RiSearchLine className="mr-2" size={18} />
            <input
              name="query"
              type="text"
              defaultValue={query}
              placeholder="Search blog"
              className="w-full py-4 bg-primary focus:outline-none text-primary"
            />
            <div className="text-gray-400">{blogPostList.length}</div>
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-lg font-semibold text-primary">Search from categories</h2>
            <div className="flex flex-wrap items-center justify-start">
              {categories.map((category) => {
                return (
                  <div
                    key={category}
                    className="px-8 py-3 mb-3 mr-3 text-center bg-gray-100 rounded-full dark:bg-gray-900 text-primary ring-primary"
                  >
                    {category}
                  </div>
                )
              })}
            </div>
          </div>
        </Form>
      </div>
      <div className="container flex flex-col mx-auto mt-20 max-w-7xl">
        {!query && latestBlog ? (
          <Link
            to={`/blog/${latestBlog.slug}`}
            className="block overflow-hidden rounded-lg ring-primary group"
          >
            <div className="flex flex-col p-8 bg-gray-100 md:p-20 dark:bg-gray-900">
              <h3 className="mb-12 text-xl font-semibold text-primary">Latest article</h3>
              <div className="flex flex-col justify-between lg:flex-row">
                <img
                  src={latestBlog.banner}
                  className="object-cover w-full mb-4 bg-cover rounded-lg lg:w-5/12 h-80"
                  loading="eager"
                />
                <div className="flex flex-col justify-between w-full min-h-full lg:w-1/2">
                  <div>
                    <div className="text-3xl font-medium leading-relaxed text-primary">
                      {latestBlog.title}
                    </div>
                    <div className="mt-4 text-xl text-gray-400">
                      {moment(latestBlog.date).format('ll')} - 5 min read
                    </div>
                  </div>
                  <div className="flex items-center mt-4 ml-auto md:mb-auto">
                    <div className="mr-4 text-xl text-primary">Read full article </div>
                    <span className="p-4 transition duration-200 origin-center transform border rounded-full text-primary group-hover:border-black dark:group-hover:border-white">
                      <HiOutlineArrowRight
                        className="transition group-hover:translate-x-3"
                        size={25}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : null}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.length > 0
            ? blogPosts.map((blogPost) => {
                return (
                  <Link
                    to={`/blog/${blogPost.slug}`}
                    className="rounded-lg group"
                    key={blogPost.slug}
                  >
                    <div className="flex flex-col mb-4" key={blogPost.slug}>
                      <div className="w-full h-80">
                        <img
                          src={blogPost.banner}
                          className="object-cover w-full h-full bg-cover rounded-lg group-hover:ring-primary"
                          alt={blogPost.bannerCredit ?? `${blogPost.title} banner`}
                          loading="eager"
                        />
                      </div>

                      <h2 className="mt-4 text-xl font-medium text-primary">{blogPost.title}</h2>
                      <div className="mt-2 text-xl text-gray-400">
                        {moment(blogPost.date).format('ll')} - 5 min read
                      </div>
                    </div>
                  </Link>
                )
              })
            : null}
        </div>
        {blogPosts.length === 0 && (
          <div className="text-xl font-normal text-center text-primary">
            Looks like the article you looking for is not available. Please try some other topic.
          </div>
        )}
      </div>
    </div>
  )
}
