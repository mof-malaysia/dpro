import { CollectionArchive } from '@/components/CollectionArchive'
import { CardFileData } from '@/components/FileCard'
import { CardNewsData } from '@/components/NewsCard'
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
    <Section className="space-y-12" id={`block-${id}`}>
      {title && <h2>{title}</h2>}

      <CollectionArchive posts={posts} />

      <Button asChild variant="default-outline" className="capitalize">
        <Link href={`/${relationTo}`}>
          Semua {relationTo}
          <ArrowOutgoingIcon className="text-txt-black-700" />
        </Link>
      </Button>
    </Section>
  )
}
