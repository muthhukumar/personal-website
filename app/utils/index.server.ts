import type { QuoteType } from '../sources/quotes'

import { quotes } from '../sources/quotes'
import { getSession } from '~/utils/session.server'

const getRandomIntBetweenRange = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getQuote = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))

  const today = new Date().toLocaleDateString()

  let quote = session.get('quote')

  if (quote?.lastUpdated !== today || !quote) {
    const index = getRandomIntBetweenRange(0, quotes.length - 1)
    quote = {
      quote: quotes[index],
      lastUpdated: today,
    }
  }

  return quote as { quote: QuoteType; lastUpdated: string }
}

export { getRandomIntBetweenRange, getQuote }
