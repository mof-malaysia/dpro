import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import type {
  // BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  GalleryBlock as GalleryBlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
// import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { GalleryBlock } from '@/blocks/GalleryBlock/Component'
import { cn } from '@/utilities/ui'
import { textConverter } from './textConverter'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | GalleryBlockProps | MediaBlockProps> // | BannerBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'berita' ? `/berita/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  ...textConverter,
  blocks: {
    // banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    galleryBlock: ({ node }) => <GalleryBlock {...node.fields} />,
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="my-0"
        imgClassName="w-full"
        {...node.fields}
        captionClassName="mx-auto max-w-[48rem]"
        enableGutter={false}
      />
    ),
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
