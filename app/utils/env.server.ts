import { Context } from './graphql.server'

const getRequiredServerEnvVar = (key: string, context?: Context) => {
  let value: null | string = null

  if (context) {
    value = String(context[key])
  } else {
    value = String(process.env[key])
  }

  if (!value) {
    throw new Error(`${key} is required ENV variable`)
  }

  return value
}

export { getRequiredServerEnvVar }
