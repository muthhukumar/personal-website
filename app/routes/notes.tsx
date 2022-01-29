import { useCatch, json, LoaderFunction, MetaFunction, useLoaderData, LinksFunction } from 'remix'

import { Four00, Note } from '~/components'
import { getNotes, Note as NoteType } from '~/utils/cms.server'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-title': 'Notes',
    title: 'Notes',
    description:
      'Tutorials for developers. Focus on Javascript, Typescript, React and other web development topics',
    pagename: 'Notes',
    image: '/images/og.jpg',
    robots: 'index, follow',
    // TODO: Og stuff are missing
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

export const loader: LoaderFunction = async ({ request, context }) => {
  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  const notes = await getNotes(query, context)

  if (notes.length === 0) {
    throw json({ message: 'No Notes found.' }, { status: 404 })
  }

  const filteredNotes = !query
    ? notes
    : notes.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))

  return json(
    { notes: filteredNotes },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function Blog() {
  const { notes } = useLoaderData<{ notes: Array<NoteType> }>()
  // const [searchParams] = useSearchParams()

  // const query = searchParams.get('q')
  return (
    <div title="Notes">
      {notes.map((note) => (
        <Note
          publishedAt={note.publishedAt}
          key={note.id}
          slug={note.slug}
          title={note.title}
          excerpt={note.excerpt}
        />
      ))}
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  const message = caught.status === 404 ? caught.data.message : 'Oopsies.. Something went wrong.'

  if (caught.status === 404) {
    return <Four00 title="404" message={message} link="/" />
  }

  return <Four00 title="500" message={message} link="/" />
}

export function ErrorBoundary() {
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
}
