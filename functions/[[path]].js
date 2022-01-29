import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'

// @ts-ignore
import * as build from '../build'

const handleRequest = createPagesFunctionHandler({
  build,
  getLoadContext(context) {
    return {
      GRAPHQL_ENDPOINT: context.env.GRAPHQL_ENDPOINT ?? process.env.GRAPHQL_ENDPOINT,
      GRAPHQL_ACCESS_TOKEN: context.env.GRAPHQL_ACCESS_TOKEN ?? process.env.GRAPHQL_ACCESS_TOKEN,
      USE_GRAPH_CDN: context.env.USE_GRAPH_CDN ?? process.env.USE_GRAPH_CDN,
    }
  },
})

export function onRequest(context) {
  return handleRequest(context)
}
