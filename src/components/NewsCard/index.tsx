'use client'
import { Media } from '@/components/Media'
import type { Berita } from '@/payload-types'
import { formatDate } from '@/utilities/formatDateTime'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

export type CardNewsData = Pick<Berita, 'slug' | 'meta' | 'title' | 'publishedAt'>

export const NewsCard: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardNewsData
  relationTo?: 'berita'
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, title: titleFromProps } = props

  const { slug, meta, title, publishedAt } = doc || {}
  const { image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn('group border rounded-lg overflow-hidden hover:cursor-pointer', className)}
      ref={card.ref}
    >
      <div className="relative w-full">
        {!metaImage && <div className="h-[300px]" />}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </div>
      <div className="relative p-4.5 space-y-4">
        {titleToUse && (
          <Link href={href} ref={link.ref}>
            <div className="prose">
              <h5 className="line-clamp-2">{titleToUse}</h5>
            </div>
          </Link>
        )}
        {publishedAt && <p>{formatDate(publishedAt)}</p>}
      </div>
    </article>
  )
}
