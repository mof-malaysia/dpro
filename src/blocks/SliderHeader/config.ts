import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ParagraphFeature,
  TextStateFeature,
} from '@payloadcms/richtext-lexical'

export const SliderHeader: Block = {
  slug: 'sliderHeader',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => {
          return [
            ParagraphFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h1'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            TextStateFeature({
              state: {
                color: {
                  yellow: {
                    css: {
                      color: '#FACC15',
                    },
                    label: 'Yellow',
                  },
                },
              },
            }),
          ]
        },
      }),
      label: false,
      required: true,
    },
  ],
  interfaceName: 'SliderHeader',
}
