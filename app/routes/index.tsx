import {json, LoaderFunction} from '@remix-run/server-runtime'
import {Link, useLoaderData} from 'remix'
import {AiOutlineEye} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

import {siteConfig} from '~/site-config'
import {getFeaturedPosts} from '~/utils/mdx.server'

export const loader: LoaderFunction = async () => {
  return json(await getFeaturedPosts({limit: 3}))
}

export default function Index() {
  const featuredPosts = useLoaderData<Awaited<ReturnType<typeof getFeaturedPosts>>>()
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="w-[70%]">
          <p className="text-5xl font-bold">{siteConfig.name}</p>
          <p className="text-gray-600 text-md">Full stack developer at Actyv</p>
          <p className="mt-4 text-gray-600 text-md">{siteConfig.description}</p>
        </div>
        <div className="rounded-full w-[20%] h-auto overflow-hidden">
          <img src="/profile.jpeg" alt="Muthukumar picture" className="w-full h-auto" />
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold">Featured Posts</h2>
        <div className="flex items-center justify-between h-48 gap-8 mt-6">
          {featuredPosts.map((post) => {
            return (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className="flex flex-col items-start justify-between w-1/3 h-full p-4 rounded-lg ring-4"
              >
                <p className="text-lg font-semibold text-left">{post.title}</p>
                <div className="flex items-center">
                  <AiOutlineEye className="mr-2 font-bold" size={20} />
                  <p>{post.views} views</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <Link to="/posts" className="flex items-center mt-6 text-lg">
        Read all posts <BsArrowRight className="ml-2" size={25} />
      </Link>
    </div>
  )
}
