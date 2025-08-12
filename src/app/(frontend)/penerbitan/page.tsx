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

  const penerbitan = await payload.find({
    collection: 'penerbitan',
    depth: 1,
    limit: 12,
    sort: '-publishedAt',
    // overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   meta: true,
    // },
  })
  const { docs, limit, page, totalPages } = penerbitan

  return (
    <div className="py-24 space-y-8">
      <Hero title="Penerbitan">
        <PageClient />
      </Hero>

      <Container>
        <Section>
          <CollectionArchive posts={docs} />
        </Section>
      </Container>

      <div className="container">
        {totalPages > 1 && page && (
          <Pagination limit={limit} page={page!} totalPages={totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Penerbitan | d.Pro`,
  }
}
