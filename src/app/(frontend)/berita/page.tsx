import { NewsCard } from '@/components/NewsCard'
import { Pagination } from '@/components/Pagination'
import { Container, Section } from '@/components/ui/container'
import { Hero } from '@/heros/Hero'
import configPromise from '@payload-config'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const berita = await payload.find({
    collection: 'berita',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      meta: true,
      publishedAt: true,
    },
  })

  return (
    <div className="py-24 space-y-8">
      <Hero title="Berita">
        <PageClient />
      </Hero>
      {/* <div className="container mb-8">
        <PageRange
          collection="berita"
          currentPage={berita.page}
          limit={12}
          totalDocs={berita.totalDocs}
        />
      </div> */}

      <Container>
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {berita.docs?.map((result, index) => {
              if (typeof result === 'object' && result !== null) {
                return <NewsCard doc={result} key={index} />
              }

              return null
            })}
          </div>
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
