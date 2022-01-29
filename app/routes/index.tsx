import { json, LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { Link, useCatch } from 'remix'

import { Quote, Four00, Container, HomeSection } from '~/components'
import { getQuote } from '~/utils/index.server'
import { commitSession, getSession } from '~/utils/session.server'

type LoaderData = {
  quote: Awaited<ReturnType<typeof getQuote>>
}

export const meta: MetaFunction = () => {
  return {
    keywords: 'Nullish.in, Learn Javascript, Learn Typescript and Learn CSS, Clean code',
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'canonical',
      href: 'https://www.nullish.in',
    },
  ]
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))

  const quote = await getQuote(request)

  session.set('quote', quote)

  return json(
    { quote },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    },
  )
}

export default function Blog() {
  const data = useLoaderData<LoaderData>()
  return (
    <div>
      <Container className="max-w-3xl">
        <div className="py-8 text-lg border-b md:py-16 border-color">
          <p className="mb-2">Hey, I&apos;m</p>
          <h1 className="text-3xl font-bold md:text-6xl">Muthukumar</h1>
          <div className="flex flex-col mt-4 space-y-2 text-base light-font-color md:text-lg">
            <p>Welcome to my Personal website.</p>
            <p>
              I write <strong>code</strong>. I listen to <strong>music</strong>. Loves to read{' '}
              <strong>books</strong>. And I occasionally write articles on React, Javascript and
              other stuff.
            </p>
            <p>
              Feel free to poke around. There are some{' '}
              <Link to="/login" className="link-font-color">
                easter eggs
              </Link>{' '}
              in this website. If you find any of them, let me know on{' '}
              <a
                href="https://rd.nullish.in/twitter"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter"
                className="link-font-color"
              >
                Twitter
              </a>
              .
            </p>
          </div>
        </div>
        <HomeSection title="Quote of the day">
          <Quote author={data.quote.quote.author}>{data.quote.quote.quote}</Quote>
        </HomeSection>
      </Container>
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
  return <Four00 title="500" message="Oopsies... Something went wrong." link="/" />
}
