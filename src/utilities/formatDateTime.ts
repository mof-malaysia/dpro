export const formatDateTime = (timestamp: string): string => {
  const date = new Date(timestamp)

  return `${date.toLocaleDateString('ms-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}, ${date.toLocaleTimeString('en', {
    hour: 'numeric',
    minute: 'numeric',
  })}`
}
