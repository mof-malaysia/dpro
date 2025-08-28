import type { StaticImageData } from 'next/image'

import { cn } from '@/utilities/ui'
import React from 'react'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <figure
      className={cn(
        'space-y-3 w-full lg:min-w-screen-sm h-auto select-none',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          htmlElement={null}
          imgClassName={cn('border rounded-md', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && <figcaption className={captionClassName}>{caption}</figcaption>}
    </figure>
  )
}
