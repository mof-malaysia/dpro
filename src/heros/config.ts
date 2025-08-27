import { textState } from '@/components/RichText/textConverter'
import { linkGroup } from '@/fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  TextStateFeature,
} from '@payloadcms/richtext-lexical'
import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'default',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Home',
          value: 'home',
        },
        {
          label: 'Default',
          value: 'default',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        condition: (_, { type }) => type !== 'home',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { type }) => type !== 'home',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      name: 'showLastUpdated',
      type: 'checkbox',
      admin: {
        condition: (_, { type }) => type !== 'home',
      },
      defaultValue: false,
    },
    {
      name: 'lastUpdated',
      type: 'date',
      admin: {
        condition: (_, { showLastUpdated }) => showLastUpdated,
      },
    },
    linkGroup({
      overrides: {
        admin: {
          condition: (_, { type }) => type !== 'home',
        },
      },
    }),
    {
      name: 'sliderImage',
      type: 'array',
      admin: {
        condition: (_, { type }) => type === 'home',
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'richText',
          editor: lexicalEditor({
            features: () => {
              return [
                HeadingFeature({ enabledHeadingSizes: ['h1'] }),
                FixedToolbarFeature(),
                TextStateFeature({
                  state: textState,
                }),
              ]
            },
          }),
          required: true,
        },
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
          label: false,
        },
        linkGroup({
          overrides: {
            maxRows: 3,
          },
        }),
      ],
    },
  ],
  label: false,
}
