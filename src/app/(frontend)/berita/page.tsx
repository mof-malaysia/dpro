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
  const query = (await searchParams).q
  const page = (await searchParams).page || 1
  const from = (await searchParams).dari
  const to = (await searchParams).hingga

  const sanitisedPageNumber = Number(page)
  const limit = 12

  const berita = await payload.find({
    collection: 'berita',
    depth: 1,
    limit,
    page: sanitisedPageNumber,
    sort: '-publishedAt',
    where: {
      ...(query && {
        title: {
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
    <div className="pb-12 lg:pb-[84px]">
      <Hero title="Berita">
        <PageClient />
      </Hero>
      <Container>
        <Section className="flex flex-col gap-8">
          <CollectionArchive posts={berita.docs} />

          <div className="">
            {berita.totalPages > 1 && (
              <Pagination page={berita.page!} limit={berita.limit} totalPages={berita.totalPages} />
            )}
          </div>
        </Section>
      </Container>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Berita`,
  }
}
