import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedTextNode } from '@payloadcms/richtext-lexical'
import type {
  StateValues,
  TextStateFeatureProps,
} from 'node_modules/@payloadcms/richtext-lexical/dist/features/textState/feature.server'

export const textState: TextStateFeatureProps['state'] = {
  color: {
    white: {
      label: 'White',
      css: {
        color: '#FFF',
      },
    },
    'slider-white': {
      label: 'Slider White',
      css: {
        color: '#FFF',
        'font-family': 'Barlow',
        'font-weight': '400',
      },
    },
    'slider-yellow': {
      label: 'Slider Yellow',
      css: {
        color: '#FACC15',
        'font-family': 'Barlow',
        'font-weight': '700',
        'line-height': '1.1',
      },
    },
  },
}

type ExtractAllColorKeys<T> = {
  [P in keyof T]: T[P] extends StateValues ? keyof T[P] : never
}[keyof T]

type ColorStateKeys = ExtractAllColorKeys<typeof textState>

const IS_BOLD = 1
const IS_ITALIC = 1 << 1
const IS_STRIKETHROUGH = 1 << 2
const IS_UNDERLINE = 1 << 3
const IS_CODE = 1 << 4
const IS_SUBSCRIPT = 1 << 5
const IS_SUPERSCRIPT = 1 << 6

export const textConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {
    const styles: React.CSSProperties = {}

    if (node.$) {
      Object.entries(textState).forEach(([stateKey, stateValues]) => {
        const stateValue = node.$ && (node.$[stateKey] as ColorStateKeys)

        if (stateValue && stateValues[stateValue]) {
          Object.assign(styles, stateValues[stateValue].css)
        }
      })
    }

    let text: React.ReactNode = node.text
    if (node.format & IS_BOLD) {
      text = <strong>{text}</strong>
    }
    if (node.format & IS_ITALIC) {
      text = <em>{text}</em>
    }
    if (node.format & IS_STRIKETHROUGH) {
      text = <span style={{ textDecoration: 'line-through' }}>{text}</span>
    }
    if (node.format & IS_UNDERLINE) {
      text = <span style={{ textDecoration: 'underline' }}>{text}</span>
    }
    if (node.format & IS_CODE) {
      text = <code>{text}</code>
    }
    if (node.format & IS_SUBSCRIPT) {
      text = <sub>{text}</sub>
    }
    if (node.format & IS_SUPERSCRIPT) {
      text = <sup>{text}</sup>
    }
    if (node.$) {
      text = <span style={styles}>{text}</span>
    }
    return text
  },
}
