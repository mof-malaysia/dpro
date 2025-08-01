import type { Metadata } from 'next/types'

import { NewsArchive } from '@/components/NewsArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Hero } from '@/heros/Hero'
import { Container, Section } from '@/components/ui/container'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const berita = await payload.find({
    collection: 'file',
    depth: 1,
    limit: 12,
    // overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   meta: true,
    // },
  })

  return (
    <div className="pt-24 pb-24">
      <Hero title="Penerbitan">
        <PageClient />
      </Hero>

      {/* <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={berita.page}
          limit={12}
          totalDocs={berita.totalDocs}
        />
      </div> */}

      {/* <NewsArchive posts={berita.docs} /> */}
      <Container>
        <Section>
          {berita.docs.map((doc) => (
            <a key={doc.id} target="_blank" href={doc.url!}>
              {doc.filename}
            </a>
          ))}
        </Section>
      </Container>

      <div className="container">
        {berita.totalPages > 1 && berita.page && (
          <Pagination page={berita.page} totalPages={berita.totalPages} />
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
