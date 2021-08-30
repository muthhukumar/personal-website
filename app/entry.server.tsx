import ReactDOMServer from 'react-dom/server'
import {RemixServer as Remix} from '@remix-run/react'

import type {EntryContext} from 'remix'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = ReactDOMServer.renderToString(<Remix context={remixContext} url={request.url} />)

  console.log(Object.fromEntries(responseHeaders))

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html',
    },
  })
}
