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

export const getProjects = async () => {
  const urls = [
    {
      name: 'Personal website',
      url: 'https://nullish.in',
    },
    {
      name: 'Sole and Ankle',
      url: 'https://sole-and-ankle.pages.dev',
    },
    {
      name: 'Old Dev-tools',
      url: 'https://dev-tools-new.pages.dev',
    },
    {
      name: 'Todo list app v.1',
      url: 'https://next.todos.nullish.in/',
    },
    {
      name: 'Letter typing practice',
      url: 'https://letter-typing-practice-muthukumar.vercel.app/',
    },
    {
      name: 'Create translation string app',
      url: 'https://create-translation-strings-app.vercel.app/',
    },
    {
      name: 'Dev tools v.2',
      url: 'https://dev-utilities.vercel.app/',
    },
    {
      name: 'Dev tools v.3',
      url: 'https://dev-tools.in',
    },
    {
      name: 'Clipi app',
      url: 'https://clipi.nullish.in',
    },
    {
      name: 'Minimal Youtube',
      url: 'https://minimal-yt.nullish.in',
    },
  ]

  const result = urls.map((item) => {
    return fetch(`${item.url}`, { method: 'HEAD' })
      .then((r) => {
        if (!r.ok) return item
        return item
      })
      .catch(() => Promise.reject(item))
  })

  return (await Promise.allSettled(result)).map((value) => ({
    isActive: value.status === 'fulfilled',
    value: value.status === 'fulfilled' ? value.value : value.reason,
  }))
}
