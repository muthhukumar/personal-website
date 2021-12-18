import { json, Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { HiOutlineArrowLeft } from 'react-icons/hi'

import Container from '~/components/container'
import Date from '~/components/date'

import markdownToHtml from '~/utils/md.server'
import { getCachedPost } from '~/utils/lru-cache.server'

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `${data.title} - Muthukumar`,
    description: data.description,
    'og:url': data.url,
    'og:type': 'article',
    'og:title': data.title,
    'og:description': data.description,
    'og:image': '/images/og.jpg',
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url)

  const slug = params.slug ?? ''

  const postData = await getCachedPost(slug)

  const html = await markdownToHtml(postData.body)

  return json(
    {
      url,
      html,
      title: postData.title,
      ogImage: postData.ogImage,
      date: postData.publishedAt,
      description: postData.description,
    },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function BlogSlug() {
  const { html, title, date } = useLoaderData()

  return (
    <div>
      <div className="pt-4 pb-4 border-b md:pb-10">
        <Container className="flex flex-col items-center justify-center text-center">
          <Link
            to="/blog"
            className="flex items-center self-start justify-start mb-2 text-sm text-gray-600"
          >
            <HiOutlineArrowLeft />
            <p className="self-start ml-2 text-sm md:text-base">Back to Blog</p>
          </Link>
          <h1 className="mt-4 mb-4 text-2xl font-bold md:mt-6 md:text-3xl">{title}</h1>
          <Date date={date} className="text-sm text-gray-600 md:text-base" />
          <div className="flex items-center p-1 mt-4 md:mt-8">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <img src="/images/profile.jpg" className="object-cover w-full h-full rounded-full" />
            </div>
            <div className="p-1 text-xs text-left">
              <h2>Muthukumar</h2>
              <a href="https://rd.nullish.in/twitter" className="text-blue-600">
                @am_muthukumar
              </a>
            </div>
          </div>
        </Container>
      </div>
      <Container className="max-w-3xl">
        <article className="py-2 prose md:py-6 md:prose-lg max-w-none prose-blue">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Container>
    </div>
  )
}
