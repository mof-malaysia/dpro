import type { Block, Field } from 'payload'
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { linkGroup } from '@/fields/linkGroup'

const columnFields: Field[] = [
  {
    label: 'Soalan',
    type: 'collapsible', // required
    fields: [
      {
        name: 'title',
        label: 'Tajuk',
        type: 'text',
      },
      {
        name: 'richText',
        label: 'Jawapan',
        type: 'richText',
        editor: lexicalEditor({
          features: ({ rootFeatures }) => {
            return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
          },
        }),
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
    {
      name: 'helpdesk',
      type: 'group',
      label: 'Meja Bantuan',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
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
        linkGroup({
          appearances: ['primary-fill', 'primary-outline', 'default-outline'],
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
    {
      name: 'faq',
      type: 'group',
      label: 'Soalan Lazim',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Tajuk',
        },
        {
          name: 'columns',
          type: 'array',
          fields: columnFields,
        },
      ],
    },
  ],
}
