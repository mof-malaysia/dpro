import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

import React from 'react'
import { Hero } from '@/heros/Hero'
import PageClient, { Card } from './page.client'
import { Container, Section } from '@/components/ui/container'
import { notFound } from 'next/navigation'

export default async function Page() {
  return notFound()

  const dummy_data = [
    {
      org: 'PDRM',
      slug: '/tender/test-1',
      title:
        'Perkhidmatan Penyelenggaraan Secara Preventif dan Korektif kepada Perkakasan, Perisian dan Aplikasi Sistem Pengurusan Informasi Narkotik (SPIN) untuk Polis Diraja Malaysia (PDRM)',
      deadline: '2025-08-10T06:30:00Z',
      attachments: 1,
      new: true,
    },
    {
      org: 'JKN',
      slug: '/tender/test-2',
      title:
        'Tender Membekal, Menghantar, Memasang, Menguji dan Mentauliah C-ARM X-Ray CW Monitor (HXR-M104) di Hospital Seberang Jaya',
      deadline: '2025-08-10T06:30:00Z',
      attachments: 2,
      new: true,
    },
    {
      org: 'Hospital Seberang Jaya',
      slug: '/tender/test-3',
      title:
        'Tender Membekal, Menghantar, Memasang, Menguji dan Mentauliah bagi Defibrillator CW Kanak-Kanak dan Dewasa Raffles (HCG-M201) di Hospital Seberang Jaya, Pulau Pinang',
      deadline: '2025-08-10T06:30:00Z',
      attachments: 3,
      new: false,
    },
  ]

  return (
    <div className="pb-12 lg:pb-[84px]">
      <Hero title="Tender">
        <PageClient />
      </Hero>

      <Container>
        <Section className="flex flex-col gap-8">
          <div className="border border-collapse rounded-lg border-otl-gray-200">
            {dummy_data.map((tender) => (
              <Card key={tender.slug} {...tender} />
            ))}
          </div>
        </Section>
      </Container>

      <div className="">
        {/* {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} limit={posts.limit} totalPages={posts.totalPages} />
        )} */}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Tender`,
  }
}
