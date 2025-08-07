import path from 'path'
import type { CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Penerangan media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
  upload: {
    ...(process.env.APP_ENV === 'development' && {
      // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
      staticDir: path.resolve(dirname, '../../public/media'), // git-ignored
    }),
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 432,
      },
      {
        name: 'small',
        width: 768,
      },
      {
        name: 'medium',
        width: 1024,
      },
      {
        name: 'large',
        width: 1536,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        position: 'centre',
      },
    ],
  },
}
