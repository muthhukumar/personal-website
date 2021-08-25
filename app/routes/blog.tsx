import {json, LoaderFunction, MetaFunction, useRouteData} from 'remix'
import {RiSearchLine} from 'react-icons/ri'
import moment from 'moment'
import {HiOutlineArrowRight} from 'react-icons/hi'

import {BlogPostListType, getBlogPostListFromDisk} from '../utils/mdx.server'
import {Link} from 'react-router-dom'

type LoaderData = {
  latestBlog: BlogPostListType
  blogPostList: Array<BlogPostListType>
  categories: Array<string>
}

export const meta: MetaFunction = () => {
  return {
    title: 'Blog',
  }
}

export const loader: LoaderFunction = () => {
  const blogPosts = getBlogPostListFromDisk() ?? []

  const latestBlog = blogPosts[0]

  const blogPostList = blogPosts.slice(1, blogPosts.length)

  const uniqueCategories = new Set(blogPostList.map((blog) => blog.categories).flat())

  const categories = Array.from(uniqueCategories)

  return json({blogPostList, categories, latestBlog})
}

export default function Blog() {
  const {blogPostList, categories, latestBlog} = useRouteData<LoaderData>()

  return (
    <div className="p-16 pt-0 mt-32">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-primary">Find latest of my writing here.</h2>
        <form className="container flex items-center justify-center px-4 mt-8 overflow-hidden border border-gray-100 dark:border-gray-600 rounded-xl focus-within:border-gray-600 dark:focus-within:border-gray-100">
          <RiSearchLine className="mr-2" size={18} />
          <input
            placeholder="Search blog"
            className="w-full py-4 bg-primary focus:outline-none text-primary"
          />
          <div className="text-gray-400">{blogPostList.length}</div>
        </form>

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
      </div>
      <div className="container flex flex-col mx-auto mt-20 max-w-7xl">
        <Link
          to={`/blog/${latestBlog.slug}`}
          className="block overflow-hidden rounded-lg ring-primary group"
        >
          <div className="flex flex-col p-20 bg-gray-100 dark:bg-gray-900">
            <h3 className="mb-12 text-xl font-semibold text-primary">Latest article</h3>
            <div className="flex justify-between">
              <img src="/images/computer.jpeg" className="w-5/12 bg-cover rounded-lg h-80" />
              <div className="flex flex-col justify-between w-1/2 min-h-full">
                <div>
                  <div className="text-3xl font-medium leading-relaxed text-primary">
                    {latestBlog.title}
                  </div>
                  <div className="mt-4 text-xl text-gray-400">
                    {moment(latestBlog.date).format('ll')} - 5 min read
                  </div>
                </div>
                <div className="flex items-center mt-auto ml-auto">
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
        <div className="grid grid-cols-3 gap-8 mt-8">
          {blogPostList.map((blogPost) => {
            return (
              <Link to={`/blog/${blogPost.slug}`} className="rounded-lg group" key={blogPost.slug}>
                <div className="flex flex-col mb-4" key={blogPost.slug}>
                  <img
                    src={blogPost.banner}
                    className="w-full bg-cover rounded-lg h-80 group-hover:ring-primary"
                    alt={blogPost.bannerCredit ?? `${blogPost.title} banner`}
                  />

                  <h2 className="mt-4 text-xl font-medium text-primary">{blogPost.title}</h2>
                  <div className="mt-2 text-xl text-gray-400">
                    {moment(blogPost.date).format('ll')} - 5 min read
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
