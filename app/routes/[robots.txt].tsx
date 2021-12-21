import { LoaderFunction } from 'remix'

const textContent = `
User-agent: *
Disallow: 
`

export const loader: LoaderFunction = () => {
  return new Response(textContent, {
    'headers': {
      'Content-Type': 'text/plain',
    },
  })
}
