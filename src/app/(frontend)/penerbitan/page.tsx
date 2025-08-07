import { FileCard } from '@/components/FileCard'
import { Pagination } from '@/components/Pagination'
import { Hero } from '@/heros/Hero'
import configPromise from '@payload-config'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { Container, Section } from '@/components/ui/container'

export const dynamic = 'force-static'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const files = await payload.find({
    collection: 'penerbitan',
    depth: 1,
    limit: 12,
    sort: '-publish_date',
    // overrideAccess: false,
    // select: {
    //   title: true,
    //   slug: true,
    //   meta: true,
    // },
  })

  return (
    <div className="py-24 space-y-8">
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

      <Container>
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {files.docs?.map((result, index) => {
              if (typeof result === 'object' && result !== null) {
                return <FileCard doc={result} key={index} />
              }

              return null
            })}
          </div>
        </Section>
      </Container>

      <div className="container">
        {files.totalPages > 1 && files.page && (
          <Pagination page={files.page} totalPages={files.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Penerbitan`,
  }
}
