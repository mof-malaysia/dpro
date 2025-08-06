export const formatDateTime = (timestamp: string): string =>
  `${formatDate(timestamp)}, ${new Date(timestamp).toLocaleTimeString('en', {
    hour: 'numeric',
    minute: 'numeric',
  })}`

export const formatDate = (timestamp: string): string =>
  `${new Date(timestamp).toLocaleDateString('ms-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`
