import { Link, LoaderFunction, useLoaderData } from 'remix'
import Container from '~/components/container'
import Date from '~/components/date'
import markdownToHtml from '~/utils/mdx.server'
import { HiOutlineArrowLeft } from 'react-icons/hi'

import * as  post from '~/utils/ms.server'

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug ?? ''

  const postData = await post.getPost(slug)

  const html = await markdownToHtml(postData.body)

  return { html, title: postData.title, date: postData.publishedAt }
}

export default function BlogSlug() {
  const { html, title, date } = useLoaderData()

  return (
    <div>
      <div className="pt-4 pb-10 border-b">
        <Container className="flex flex-col items-center justify-center text-center">
          <Link
            to="/blog"
            className="flex items-center self-start justify-start mb-2 text-sm text-gray-600"
          >
            <HiOutlineArrowLeft />
            <p className="self-start ml-2 text-sm">Back to Blog</p>
          </Link>
          <h1 className="mt-6 mb-4 text-3xl font-bold">{title}</h1>
          <Date date={date} className="text-sm text-gray-600" />
          <div className="flex items-center p-1 mt-8">
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <img src="/images/profile.jpg" className="object-cover w-full h-full rounded-full" />
            </div>
            <div className="p-1 text-xs text-left">
              <h2>Muthukumar</h2>
              <a href="https://rd.nullish.in/twitter" className="text-blue-500">
                @am_muthukumar
              </a>
            </div>
          </div>
        </Container>
      </div>
      <Container className="max-w-3xl">
        <article className="prose prose-md max-w-none">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Container>
    </div>
  )
}
