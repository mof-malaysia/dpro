import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'galleryBlock',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'gallery',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
