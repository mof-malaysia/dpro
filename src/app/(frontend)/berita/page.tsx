import { CollectionArchive } from '@/components/CollectionArchive'
import { Pagination } from '@/components/Pagination'
import { Container, Section } from '@/components/ui/container'
import { Hero } from '@/heros/Hero'
import configPromise from '@payload-config'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'

export const dynamic = 'force-static'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const berita = await payload.find({
    collection: 'berita',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })
  const { docs, limit, page, totalPages } = berita

  return (
    <div className="pb-12 lg:pb-[84px]">
      <Hero title="Berita">
        <PageClient />
      </Hero>
      <Container>
        <Section>
          <CollectionArchive posts={docs} />
        </Section>
      </Container>

      <div className="container">
        {totalPages > 1 && page && (
          <Pagination page={page!} limit={limit} totalPages={totalPages} />
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
