import { CardFileData, FileCard } from '@/components/FileCard'
import { CardNewsData, NewsCard } from '@/components/NewsCard'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/container'
import type { ArchiveBlock as ArchiveBlockProps } from '@/payload-types'
import { ArrowOutgoingIcon } from '@govtechmy/myds-react/icon'
import configPromise from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

type Post = CardFileData | CardNewsData

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, limit: limitFromProps, populateBy, relationTo, selectedDocs, title } = props

  const limit = limitFromProps || 3

  let posts: Post[] = []

  if (!relationTo) return <></>
  else {
    if (populateBy === 'collection') {
      const payload = await getPayload({ config: configPromise })

      const fetchedPosts = await payload.find({
        collection: relationTo,
        depth: 1,
        limit,
      })

      posts = fetchedPosts.docs
    } else {
      if (selectedDocs?.length) {
        const filteredSelectedPosts = selectedDocs.map((post) => {
          if (typeof post.value === 'object') return post.value
        }) as Post[]

        posts = filteredSelectedPosts
      }
    }
  }

  return (
    <Section className="space-y-6 lg:space-y-12" id={`block-${id}`}>
      <div className="flex justify-between items-center">
        {title && (
          <h2 className="font-heading font-semibold text-heading-xs md:text-heading-sm">{title}</h2>
        )}
        <Button asChild variant="default-outline" className="max-lg:hidden">
          <Link href={`/${relationTo}`}>
            Lihat Semua
            <ArrowOutgoingIcon className="text-txt-black-700" />
          </Link>
        </Button>
      </div>

      {relationTo === 'berita' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <NewsCard
                  className="max-md:hidden max-md:first:block"
                  doc={result as CardNewsData}
                  key={index}
                />
              )
            }

            return null
          })}
        </div>
      )}

      {relationTo === 'penerbitan' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <FileCard
                  className="md:first:row-span-2"
                  orientation={index !== 0 ? 'horizontal' : 'vertical'}
                  doc={result as CardFileData}
                  key={index}
                />
              )
            }

            return null
          })}
        </div>
      )}

      <Button asChild variant="default-outline" className="lg:hidden">
        <Link href={`/${relationTo}`}>
          Lihat Semua
          <ArrowOutgoingIcon className="text-txt-black-700" />
        </Link>
      </Button>
    </Section>
  )
}
