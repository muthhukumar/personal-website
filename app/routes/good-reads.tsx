import {
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  Outlet,
  useCatch,
  useLoaderData,
} from 'remix'
import { Book, Four00 } from '~/components'
import { Book as BookType, getBooks } from '~/utils/cms.server'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-title': 'Good reads',
    title: 'Good reads',
    description:
      'Tutorials for developers. Focus on Javascript, Typescript, React and other web development topics',
    pagename: 'Good reads',
    image: '/images/og.jpg',
    robots: 'index, follow',
    // TODO: Og stuff are missing
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

export const loader: LoaderFunction = async ({ request, context }) => {
  const url = new URL(request.url)

  const query = url.searchParams.get('q') ?? ''

  const books = await getBooks(query, context)

  if (books.length === 0) {
    throw json({ message: 'No books found.' }, { status: 404 })
  }

  const filteredBlogPosts = !query
    ? books
    : books.filter((post) => post.name.toLowerCase().includes(query.toLowerCase()))

  return json(
    { books: filteredBlogPosts },
    {
      headers: {
        'Cache-Control': 'max-age=100, must-revalidate',
      },
    },
  )
}

export default function GoodReads() {
  const { books } = useLoaderData<{ books: Array<BookType> }>()
  return (
    <div className="flex h-screen">
      <div className="overflow-y-auto max-h-screen min-w-[24rem] max-w-[24rem] border-r border-color">
        <div className="sticky top-0 p-6 py-4 bg-color">
          <h2 className="font-bold">Good reads</h2>
        </div>
        <div className="p-2 text-sm">
          {books.map((currentBook) => (
            <Book
              publishedAt={currentBook.publishedAt}
              key={currentBook.id}
              slug={currentBook.slug}
              name={currentBook.name}
              author={currentBook.author}
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
