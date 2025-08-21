import { CollectionArchive } from '@/components/CollectionArchive'
import { Pagination } from '@/components/Pagination'
import { Container, Section } from '@/components/ui/container'
import { Hero } from '@/heros/Hero'
import configPromise from '@payload-config'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'
import { PageSizeSelect } from '@/components/PageSizeSelect'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config: configPromise })

  const query = (await searchParams).q
  const page = (await searchParams).page || 1

  const DEFAULT_PAGE_SIZE = 12
  const options = [DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE * 2].map(String)
  const pageSize = (await searchParams).limit || DEFAULT_PAGE_SIZE
  const from = (await searchParams).dari
  const to = (await searchParams).hingga

  const sanitisedPageNumber = Number(page)
  const sanitisedPageSize = Number(pageSize)

  const penerbitan = await payload.find({
    collection: 'penerbitan',
    depth: 1,
    limit: sanitisedPageSize,
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
    <div className="pb-12 lg:pb-[84px]">
      <Hero title="Penerbitan">
        <PageClient />
      </Hero>

      <Container>
        <Section className="flex flex-col gap-8">
          <CollectionArchive posts={penerbitan.docs} />

          {penerbitan.totalPages > 1 && (
            <div className="flex flex-col items-center lg:flex-row gap-8 lg:justify-between">
              <div className="flex gap-3 items-center">
                <p className="text-sm text-txt-black-500 font-medium whitespace-nowrap">
                  Paparan setiap halaman:
                </p>
                <PageSizeSelect options={options} />
              </div>
              <Pagination
                page={penerbitan.page!}
                limit={penerbitan.limit}
                totalPages={penerbitan.totalPages}
              />
            </div>
          )}
        </Section>
      </Container>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Penerbitan`,
  }
}
