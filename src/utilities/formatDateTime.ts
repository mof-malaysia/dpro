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

export const formatISODate = (d: Date) => {
  return [
    d.getFullYear(),
    ('0' + (d.getMonth() + 1)).slice(-2),
    ('0' + d.getDate()).slice(-2),
  ].join('-')
}
