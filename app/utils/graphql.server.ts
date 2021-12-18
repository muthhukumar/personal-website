import { GraphQLClient } from 'graphql-request'
import { getRequiredServerEnvVar } from './env.server'

const endpoint = getRequiredServerEnvVar('GRAPHQL_ENDPOINT')

const authorizationToken = getRequiredServerEnvVar('GRAPHQL_ACCESS_TOKEN')

const gqClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${authorizationToken}`,
  },
})

export { gqClient }
