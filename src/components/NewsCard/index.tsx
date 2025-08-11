'use client'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import type { Berita } from '@/payload-types'
import { formatDate } from '@/utilities/formatDateTime'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { ArrowOutgoingIcon } from '@govtechmy/myds-react/icon'
import Link from 'next/link'
import React from 'react'

export type CardNewsData = Pick<Berita, 'slug' | 'meta' | 'title' | 'publishedAt'>

export const NewsCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardNewsData
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, title: titleFromProps } = props

  const { slug, meta, title, publishedAt } = doc || {}
  const { image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const href = `/berita/${slug}`

  return (
    <article
      className={cn(
        'group flex flex-col border rounded-lg overflow-hidden max-h-80',
        'hover:cursor-pointer hover:border-otl-primary-300 hover:ring ring-fr-primary',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full grow">
        {!metaImage && <></>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </div>
      <div className="relative p-4.5 space-y-4">
        {titleToUse && (
          <Link
            href={href}
            ref={link.ref}
            className="font-semibold line-clamp-2 group-hover:text-txt-primary"
          >
            {titleToUse}
          </Link>
        )}
        {publishedAt && <p className="text-sm text-txt-black-500">{formatDate(publishedAt)}</p>}
        <Button
          variant="unset"
          size="unset"
          className={cn(
            'gap-1 text-txt-primary absolute bottom-4.5 right-6',
            'opacity-0 animate-out fade-out-0 slide-out-to-bottom-full',
            'group-hover:opacity-100 group-hover:animate-in group-hover:fade-in-0 group-hover:slide-in-from-bottom-full',
          )}
        >
          Baca
          <ArrowOutgoingIcon />
        </Button>
      </div>
    </article>
  )
}
