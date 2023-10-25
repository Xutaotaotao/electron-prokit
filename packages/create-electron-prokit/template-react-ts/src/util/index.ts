export const getResourcesPath = (path:string) => {
  if (import.meta.env.MODE === 'production') {
    return `../../../${path}`
  }
  return `../../${path}`
}