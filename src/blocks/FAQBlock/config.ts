import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

const columnFields: Field[] = [
  {
    label: false,
    type: 'collapsible', // required
    fields: [
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'richText',
        type: 'richText',
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
          },
        }),
        label: false,
      },
    ],
  },
]

export const FAQBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FAQBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Soalan Lazim',
      label: 'Tajuk',
    },
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
