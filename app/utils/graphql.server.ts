import { getRequiredServerEnvVar } from './env.server'

export type Context = { [key: string]: string }

function getGqClient(context: Context) {
  const endpoint = getRequiredServerEnvVar('GRAPHQL_ENDPOINT', context)

  const authorizationToken = getRequiredServerEnvVar('GRAPHQL_ACCESS_TOKEN', context)

  const gqClient = {
    async request<DataType>(query: string, variables?: { [key: string]: any }) {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authorizationToken}`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })

      if (response.ok) {
        return ((await response.json()) as { data: DataType }).data
      }

      return Promise.reject(response.json())
    },
  }

  return gqClient
}

export { getGqClient }
