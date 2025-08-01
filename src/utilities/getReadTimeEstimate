/**
 * Estimate the reading time for a given text string.
 * @param {string} text
 */
export const getReadTimeEstimate = (text: string) => {
  const words = text.trim().split(/\s+/)
  const wordCount = words.length

  const averageReadingSpeed = 200 // in words per min

  return Math.ceil(wordCount / averageReadingSpeed)
}
