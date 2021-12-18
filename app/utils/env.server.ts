const getRequiredServerEnvVar = (key: string) => {
  const value = process.env[key]

  if (!value) {
    throw new Error(`${key} is requried ENV variabe`)
  }

  return value
}

export { getRequiredServerEnvVar }
