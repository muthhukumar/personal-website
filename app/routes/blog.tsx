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
    <div className="p-16">
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
      <Link
        to={`/blog/${latestBlog.slug}`}
        className="container block mx-auto mt-20 overflow-hidden rounded-lg ring-primary max-w-7xl group"
      >
        <div className="flex flex-col p-20 bg-gray-100 dark:bg-gray-900">
          <h3 className="mb-12 text-xl font-semibold text-primary">Latest article</h3>
          <div className="flex justify-between">
            <img src="/images/computer.jpeg" className="w-5/12 rounded-lg" />
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
                  <HiOutlineArrowRight className="transition group-hover:translate-x-3" size={25} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
