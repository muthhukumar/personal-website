import {
  useCatch,
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  LinksFunction,
  Outlet,
} from 'remix'

import {  Four00, Note } from '~/components'
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
    <div className="flex h-screen">
      <div className="overflow-y-auto max-h-screen min-w-[24rem] max-w-[24rem] border-r border-color">
        <div className="sticky top-0 p-6 py-4 bg-color">
          <h2 className="font-bold">Notes</h2>
        </div>
        {/* <Container>
          <Form method="get">
            <h1 className="py-4 text-xl font-bold md:py-10 md:text-2xl">Blog</h1>
            <div className="flex items-center max-w-sm p-1 border rounded-md border-color">
              <IoIosSearch className="ml-2 text-gray-600" size={20} />
              <input
                name="q"
                type="text"
                className="w-full p-1 ml-2 text-sm border-white bg-color dark:border-black"
                placeholder="Search posts..."
                defaultValue={query ?? ''}
              />
            </div>
          </Form>
        </Container> */}
        <div className="p-2 text-sm">
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
      </div>
      <div className="w-full max-h-screen overflow-y-auto">
        <Outlet />
      </div>
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
