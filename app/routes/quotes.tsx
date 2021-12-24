import { json, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

import { quotes, QuoteType } from '~/sources/quotes'
import { Container, Quote } from '~/components'

export const loader: LoaderFunction = () => {
  return json(quotes)
}

export default function Quotes() {
  const quotes = useLoaderData<Array<QuoteType>>()
  return (
    <div className="py-16">
      <Container>
        <ol>
          <h2 className="mb-4 text-xl font-bold md:text-2xl">List of Quotes</h2>
          {quotes.map((quote, index) => (
            <li key={quote.id} className={`flex justify-start items-start`}>
              <Quote {...quote} className="mx-0">
                {quote.quote}
              </Quote>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  )
}
