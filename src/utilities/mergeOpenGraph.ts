import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Portal rasmi Perolehan Digital Kerajaan Malaysia',
  images: [
    {
      url: `${getServerSideURL()}/og-image.webp`,
    },
  ],
  siteName: 'd.Pro',
  title: 'd.Pro',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
