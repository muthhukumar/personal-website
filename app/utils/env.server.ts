const getRequiredServerEnvVar = (key: string) => {
  const value = process.env[key]

  if (!value) {
    throw new Error(`${key} is required ENV variable`)
  }

  return value
}

export { getRequiredServerEnvVar }
