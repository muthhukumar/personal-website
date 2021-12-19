import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as build from '../build'

const handleRequest = createPagesFunctionHandler({
  getLoadContext(context) {
    return {
      GRAPHQL_ENDPOINT: context.env.GRAPHQL_ENDPOINT,
      GRAPHQL_ACCESS_TOKEN: context.env.GRAPHQL_ACCESS_TOKEN,
    }
  },
  build,
})

export function onRequest(context) {
  return handleRequest(context)
}
