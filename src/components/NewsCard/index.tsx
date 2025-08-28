'use client'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import type { Berita } from '@/payload-types'
import { formatDate } from '@/utilities/formatDateTime'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import { ArrowOutgoingIcon } from '@govtechmy/myds-react/icon'
import { Tag } from '@govtechmy/myds-react/tag'
import Link from 'next/link'
import React from 'react'

export type CardNewsData = Pick<
  Berita,
  'heroImage' | 'meta' | 'publishedAt' | 'slug' | 'title' | 'type'
>

export const NewsCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardNewsData
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, title: titleFromProps } = props

  const { heroImage, meta, publishedAt, slug, title, type } = doc || {}
  const { description } = meta || {}

  const titleToUse = titleFromProps || title
  const href = `/berita/${slug}`

  return (
    <article
      className={cn(
        'group flex flex-col border rounded-lg overflow-hidden',
        'hover:cursor-pointer hover:border-otl-primary-300 hover:ring ring-fr-primary',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {heroImage && typeof heroImage !== 'string' && (
          <Media
            htmlElement={null}
            resource={heroImage}
            imgClassName="object-cover size-full max-h-[200px]"
          />
        )}
      </div>
      <div className="grow p-4.5 space-y-3">
        <Tag size="small" variant="primary">
          {type}
        </Tag>
        {titleToUse && (
          <Link
            href={href}
            ref={link.ref}
            className="font-semibold line-clamp-2 group-hover:text-txt-primary"
          >
            {titleToUse}
          </Link>
        )}
        {description && <p className="text-txt-black-500 line-clamp-3">{description}</p>}
      </div>
      <div className="relative p-4.5 pt-3">
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
