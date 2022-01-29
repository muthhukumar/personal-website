import { json, LinksFunction, LoaderFunction, MetaFunction, useCatch, useLoaderData } from 'remix'

import { Markdown, Four00, Date, ContinueReading, BlogPost } from '~/components'
import { getPost, getPosts, Post } from '~/utils/cms.server'

interface LoaderType extends Post {
  posts: Array<Post>
}

export const meta: MetaFunction = ({ data }) => {
  const postData = data as Awaited<ReturnType<typeof getPost>>

  const title = postData?.seo.title ?? 'Page Not Found'
  return {
    'apple-mobile-web-app-title': title,
    title,
    description: postData?.seo.description ?? '',
    keywords: postData?.seo.keywords ?? '',
    image: postData?.seo.image.url ?? '',
    pagename: title,
    'og:url': data?.url,
    'og:type': 'article',
    'og:title': title,
    'og:description': postData?.seo.description ?? '',
    'og:image': postData?.seo.image.url ?? '',
    robots: 'index, follow',
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

export const loader: LoaderFunction = async ({ request, params, context }) => {
  const url = new URL(request.url)

  const slug = params.slug ?? ''

  const postData = await getPost(slug, context)

  const posts = await getPosts('', context)

  const selectedPosts = posts.slice(posts.length - 3, posts.length)

  if (!postData) {
    throw json({ message: `Oh no, the blog you looking for doesn't exists.` }, { status: 404 })
  }

  return json(
    {
      url,
      ...postData,
      posts: selectedPosts,
    },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function BlogSlug() {
  const postData = useLoaderData<LoaderType>()

  if (!postData) {
    throw new Error('Post data not found...!')
  }

  return (
    <div className="pb-20 mt-28">
      <Date date={postData.publishedAt} className="text-center light-font-color" />
      <h2 className="w-4/5 mx-auto my-10 text-4xl font-bold text-center md:text-6xl">
        {postData.title}
      </h2>
      <p className="w-full px-4 mx-auto mb-4 text-base text-center text-black md:text-lg lg:w-2/3">
        {postData.excerpt}
      </p>
      <div className="flex items-center mx-auto my-8 fit-content">
        <div className="inline-block w-8 h-8 mr-4 overflow-hidden align-middle rounded-full md:w-12 md:h-12">
          <img src="/images/profile.jpg" className="w-full h-full" />
        </div>
        <p className="mr-2 light-font-color">By</p>
        <p className="font-semibold">Muthukumar</p>
      </div>
      <div className="w-full max-w-screen-lg m-auto mb-10 overflow-hidden h-80 md:h-[37.5rem] lg:2/3 md:w-5/6 md:mb-20 md:rounded-2xl">
        <img
          src={postData.seo.image.url}
          className="object-cover object-center w-full h-full transition-all duration-500 hover:scale-110 ease"
        />
      </div>
      <Markdown>
        <div dangerouslySetInnerHTML={{ __html: postData.content.html }} />
      </Markdown>
      <ContinueReading />
      <div className="grid max-w-screen-xl grid-cols-1 mx-5 mb-20 lg:mx-24 2xl:mx-auto md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
        {postData.posts.map((blogPost) => (
          <BlogPost key={blogPost.id} {...blogPost} />
        ))}
      </div>
    </div>
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
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/blog" />
}
