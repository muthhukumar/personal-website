import { json, LinksFunction, LoaderFunction, MetaFunction, useCatch, useLoaderData } from 'remix'

import { Markdown, Four00 } from '~/components'
import { getBook } from '~/utils/cms.server'

export const meta: MetaFunction = ({ data }) => {
  const bookData = data as Awaited<ReturnType<typeof getBook>>

  const title = bookData?.name
    ? `${bookData?.name}: Summary, Notes, and Lessons - Muthukumar`
    : 'Page Not Found'
  return {
    'apple-mobile-web-app-title': title,
    title,
    description: bookData?.seo.description ?? '',
    keywords: bookData?.seo.keywords ?? '',
    image: bookData?.seo.image.url ?? '',
    pagename: title,
    'og:url': data?.url,
    'og:type': 'article',
    'og:title': title,
    'og:description': bookData?.seo.description ?? '',
    'og:image': bookData?.seo.image.url ?? '',
    robots: 'index, follow',
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'canonical',
      href: 'https://www.nullish.in/good-reads',
    },
  ]
}

export const loader: LoaderFunction = async ({ request, params, context }) => {
  const url = new URL(request.url)

  const slug = params.slug ?? ''

  const bookData = await getBook(slug, context)

  if (!bookData) {
    throw json({ message: `Oh no, the book you looking for doesn't exists.` }, { status: 404 })
  }

  return json(
    {
      url,
      ...bookData,
    },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function BookSlug() {
  const bookData = useLoaderData<Awaited<ReturnType<typeof getBook>>>()

  if (!bookData) {
    throw new Error('Book data not found...!')
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 p-4 border-b navbar-backdrop-filter border-color">
        <h1 className="font-bold">{bookData.name}</h1>
      </div>
      <Markdown className="max-w-5xl">
        <div dangerouslySetInnerHTML={{ __html: bookData.content.html }} />
      </Markdown>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/good-reads" />
  }

  return <Four00 title="500" message={message} link="/good-reads" />
}

export function ErrorBoundary() {
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/good-reads" />
}
