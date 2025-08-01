import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const File: CollectionConfig = {
  slug: 'file',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'filename',
      label: 'File Name',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['application/pdf'],
    modifyResponseHeaders: ({ headers }) => {
      const newHeaders = new Headers(headers) // Copy existing headers
      newHeaders.set('Content-Disposition', 'inline') // Set new header

      return newHeaders
    },
  },
}
