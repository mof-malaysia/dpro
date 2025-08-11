/**
 * Estimate the reading time of the text from a rich text format node tree.
 * @param {string} text
 */

type RTFNode = { type: string; text: string; children: RTFNode[] }

export function getReadTimeEstimate(doc: RTFNode[]) {
  let wordCount = 0
  const averageReadingSpeed = 200 // in words per min

  // Recursive function to traverse the document structure
  function extractText(node: RTFNode) {
    if (node.type === 'text' && node.text) {
      const processedText = node.text
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // remove punctuation
        .trim()
      if (processedText.length === 0) return
      const wordArray = processedText.split(/\s+/)
      wordCount += wordArray.length
    } else if (node.children) {
      node.children.forEach(extractText)
    }
  }

  doc.forEach(extractText) // Start extraction from the root of the parsed document
  const readTime = Math.ceil(wordCount / averageReadingSpeed)
  return readTime
}
