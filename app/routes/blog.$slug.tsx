import { json, LoaderFunction, MetaFunction, useCatch, useLoaderData } from 'remix'

import { Markdown, GoBack, Four00, Date, Container } from '~/components'
import { getPost } from '~/utils/cms.server'

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data && data.title ? `${data?.title} | Muthukumar` : 'Page Not Found | Muthukumar',
    description: data?.excerpt,
    'og:url': data?.url,
    'og:type': 'article',
    'og:title': data?.title,
    'og:description': data?.excerpt,
    'og:image': data?.ogImage,
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url)

  const slug = params.slug ?? ''

  const postData = await getPost(slug)

  if (!postData) {
    throw json({ message: `Oh no, the blog you looking for doesn't exists.` }, { status: 404 })
  }

  return json(
    {
      url,
      html: postData.content.html,
      title: postData.title,
      ogImage: postData.coverImage.url,
      date: postData.publishedAt,
      description: postData.excerpt,
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
      <div className="pt-4 pb-4 border-b border-color md:pb-10">
        <Container className="flex flex-col items-center justify-center text-center">
          <GoBack link="/blog" />
          <h1 className="mt-4 mb-4 text-2xl font-bold md:mt-6 md:text-3xl">{title}</h1>
          <Date date={date} className="text-sm light-font-color md:text-base" />
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
      <Markdown className="max-w-5xl">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Markdown>
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
