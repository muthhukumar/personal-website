import { json, LinksFunction, LoaderFunction, MetaFunction, useCatch, useLoaderData } from 'remix'

import { Markdown, Four00 } from '~/components'
import { getNote } from '~/utils/cms.server'

export const meta: MetaFunction = ({ data }) => {
  const note = data as Awaited<ReturnType<typeof getNote>>

  const title = note?.seo.title
    ? `${note?.seo.title}: Summary, Notes, and Lessons - Muthukumar`
    : 'Page Not Found'
  return {
    'apple-mobile-web-app-title': title,
    title,
    description: note?.seo.description ?? '',
    keywords: note?.seo.keywords ?? '',
    image: note?.seo.image.url ?? '',
    pagename: title,
    'og:url': data?.url,
    'og:type': 'article',
    'og:title': title,
    'og:description': note?.seo.description ?? '',
    'og:image': note?.seo.image.url ?? '',
    robots: 'index, follow',
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'canonical',
      href: 'https://www.nullish.in/notes',
    },
  ]
}

export const loader: LoaderFunction = async ({ request, params, context }) => {
  const url = new URL(request.url)

  const slug = params.slug ?? ''

  const note = await getNote(slug, context)

  if (!note) {
    throw json({ message: `Oh no, the notes you looking for doesn't exists.` }, { status: 404 })
  }

  return json(
    {
      url,
      ...note,
    },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function NoteSlug() {
  const note = useLoaderData<Awaited<ReturnType<typeof getNote>>>()

  if (!note) {
    throw new Error('Note data not found...!')
  }

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 p-4 border-b navbar-backdrop-filter border-color">
        <h1 className="font-bold">{note.title}</h1>
      </div>
      <Markdown className="max-w-5xl">
        <div dangerouslySetInnerHTML={{ __html: note.content.html }} />
      </Markdown>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/notes" />
  }

  return <Four00 title="500" message={message} link="/notes" />
}

export function ErrorBoundary() {
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/notes" />
}
