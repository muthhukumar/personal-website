const getRequiredServerEnvVar = (key: string, context?: Record<string, string>) => {
  const value = context ? context[key] : process.env[key]

  if (!value) {
    throw new Error(`${key} is required ENV variable`)
  }

  return value
}

export { getRequiredServerEnvVar }
