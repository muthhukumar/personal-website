import { json, LinksFunction, MetaFunction, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import { quotes, QuoteType } from '~/sources/quotes'
import { Container, Quote } from '~/components'

export const meta: MetaFunction = () => {
  return {
    'apple-mobile-web-app-title': 'Quotes',
    title: 'Quotes',
    description: `List of Muthukumar's favorite Quotes I found on Internet and on when reading books and watching Youtube videos`,
    pagename: 'Quotes',
    robots: 'index, follow',
    image: '/images/og.jpg',
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'canonical',
      href: 'https://www.nullish.in/quotes',
    },
  ]
}

export const loader: LoaderFunction = () => {
  return json(quotes)
}

export default function Quotes() {
  const quotes = useLoaderData<Array<QuoteType>>()
  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <ol>
          <h2 className="mb-4 text-xl font-bold md:text-2xl">My Favorite Quotes</h2>
          {quotes.map((quote) => (
            <li key={quote.id} className={`flex justify-start mb-2 items-start`}>
              <Quote {...quote} className="mx-0 lg:w-full">
                {quote.quote}
              </Quote>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  )
}
