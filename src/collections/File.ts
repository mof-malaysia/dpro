import path from 'path'
import type { CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
    ...(process.env.APP_ENV === 'development' && {
      // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
      staticDir: path.resolve(dirname, '../../public/media'), // git-ignored
    }),
    mimeTypes: ['application/pdf'],
    modifyResponseHeaders: ({ headers }) => {
      const newHeaders = new Headers(headers) // Copy existing headers
      newHeaders.set('Content-Disposition', 'inline') // Set new header

      return newHeaders
    },
  },
}
