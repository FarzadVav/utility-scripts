export const getFirstObjectValue = (obj?: { [key: string]: string }) => {
  const value = Object.values(obj || {})[0]

  return value
}

export const getFirstObjectProperty = (obj?: { [key: string]: string }) => {
  const property = Object.keys(obj || {})[0]

  return property
}

