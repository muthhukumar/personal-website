import { getRequiredServerEnvVar } from './env.server'

const endpoint = getRequiredServerEnvVar('GRAPHQL_ENDPOINT')

const authorizationToken = getRequiredServerEnvVar('GRAPHQL_ACCESS_TOKEN')

const gqRequest = async (query: string, variables: Record<string, unknown>) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authorizationToken}`,
    },
    body: JSON.stringify({ query, variables }),
  })
  const json = await response.json()

  return json.data
}

export { gqRequest }
