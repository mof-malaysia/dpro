import { CollectionArchive } from '@/components/CollectionArchive'
import { Pagination } from '@/components/Pagination'
import { Container, Section } from '@/components/ui/container'
import { Hero } from '@/heros/Hero'
import configPromise from '@payload-config'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config: configPromise })
  const query = (await searchParams).query
  const page = (await searchParams).page || 1
  const from = (await searchParams).dari
  const to = (await searchParams).hingga

  const sanitisedPageNumber = Number(page)
  const limit = 12

  const files = await payload.find({
    collection: 'berita',
    depth: 1,
    limit,
    page: sanitisedPageNumber,
    sort: '-publishedAt',
    where: {
      ...(query && {
        name: {
          contains: query,
        },
      }),
      ...(from && {
        publishedAt: {
          greater_than_equal: from,
        },
      }),
      ...(to && {
        publishedAt: {
          less_than_equal: to,
        },
      }),
    },
  })

  return (
    <div className="py-24 space-y-8">
      <Hero title="Berita">
        <PageClient />
      </Hero>

      <Container>
        <Section>
          <CollectionArchive posts={files.docs} />
        </Section>
      </Container>

      <div className="container">
        {files.totalPages > 1 && files.page && (
          <Pagination page={files.page!} limit={files.limit} totalPages={files.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Berita`,
  }
}
