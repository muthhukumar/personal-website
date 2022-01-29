import { getRequiredServerEnvVar } from './env.server'

const gqRequest = async (
  query: string,
  variables: Record<string, unknown>,
  context?: Record<string, string>,
) => {
  const graphqlEndpoint = getRequiredServerEnvVar('GRAPHQL_ENDPOINT', context)

  const authorizationToken = getRequiredServerEnvVar('GRAPHQL_ACCESS_TOKEN', context)

  const useGraphCdn = getRequiredServerEnvVar('USE_GRAPH_CDN', context) === 'true' ? true : false

  const config = {
    endpoint: graphqlEndpoint,
    method: 'POST',
    headers: {},
  }

  if (useGraphCdn) {
    config.endpoint = getRequiredServerEnvVar('GRAPHCDN_ENDPOINT', context)
    config.headers = {
      'graphcdn-token': getRequiredServerEnvVar('GRAPHCDN_API_TOKEN', context),
    }
  } else {
    config.headers = {
      'Authorization': `Bearer ${authorizationToken}`,
    }
  }

  const { endpoint, ...rest } = config
  const response = await fetch(endpoint, {
    ...rest,
    body: JSON.stringify({ query, variables }),
  })
  const json = (await response.json()) as { data: unknown }

  return json.data
}

export { gqRequest }
