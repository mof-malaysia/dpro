import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const TenderBlock: Block = {
  slug: 'tender',
  interfaceName: 'TenderBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tajuk',
    },
    {
      name: 'desc',
      type: 'richText',
      label: 'Keterangan',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
}
