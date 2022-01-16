import { json, LinksFunction, LoaderFunction, MetaFunction, useCatch, useLoaderData } from 'remix'

import { Markdown, Four00 } from '~/components'
import { getPost } from '~/utils/cms.server'

export const meta: MetaFunction = ({ data }) => {
  const postData = data as Awaited<ReturnType<typeof getPost>>

  const title = postData?.seo.title ?? 'Page Not Found | Muthukumar'
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

  if (!postData) {
    throw json({ message: `Oh no, the blog you looking for doesn't exists.` }, { status: 404 })
  }

  return json(
    {
      url,
      ...postData,
    },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function BlogSlug() {
  const postData = useLoaderData<Awaited<ReturnType<typeof getPost>>>()

  if (!postData) {
    throw new Error('Post data not found...!')
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 p-4 border-b navbar-backdrop-filter border-color">
        <h1 className="font-bold">{postData.title}</h1>
      </div>
      <Markdown className="max-w-5xl">
        <div dangerouslySetInnerHTML={{ __html: postData.content.html }} />
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
