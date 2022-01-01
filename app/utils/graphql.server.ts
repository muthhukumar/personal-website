import { getRequiredServerEnvVar } from './env.server'

const graphqlEndpoint = getRequiredServerEnvVar('GRAPHQL_ENDPOINT')

const authorizationToken = getRequiredServerEnvVar('GRAPHQL_ACCESS_TOKEN')

const useGraphCdn = getRequiredServerEnvVar('USE_GRAPH_CDN')

const config = {
  endpoint: graphqlEndpoint,
  method: 'POST',
  headers: {},
}

if (useGraphCdn) {
  config.endpoint = getRequiredServerEnvVar('GRAPHCDN_ENDPOINT')
  config.headers = {
    'graphcdn-token': getRequiredServerEnvVar('GRAPHCDN_API_TOKEN'),
  }
} else {
  config.headers = {
    'Authorization': `Bearer ${authorizationToken}`,
  }
}

const gqRequest = async (query: string, variables: Record<string, unknown>) => {
  const { endpoint, ...rest } = config
  const response = await fetch(endpoint, {
    ...rest,
    body: JSON.stringify({ query, variables }),
  })
  const json = await response.json()

  return json.data
}

export { gqRequest }
