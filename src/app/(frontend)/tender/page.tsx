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
              <Card {...tender} />
              // <article ref={card.ref} key={tender.slug}>
              //   {/* <div className="table-row max-lg:hidden"> */}
              //   <div className="table-cell py-4 px-4.5 space-y-2">
              //     <div className="text-body-sm text-txt-black-700 ">
              //       Tarikh Tutup: {formatDateTime(tender.deadline)}
              //     </div>
              //     <Link href={tender.slug} ref={link.ref} className="font-semibold">
              //       {tender.title}
              //     </Link>
              //     {tender.new && (
              //       <Tag size="small" variant="success" mode="pill" dot>
              //         Baru
              //       </Tag>
              //     )}
              //   </div>
              //   <div className="table-cell py-4 px-4.5 text-txt-black-500">{tender.org}</div>
              //   <div className="table-cell py-4 px-4.5">
              //     <div className="flex gap-0.5 items-center px-1 py-0.5 border rounded-sm">
              //       <AttachmentIcon className="size-4" />
              //       <span className="text-body-xs">{tender.attachments}</span>
              //     </div>
              //   </div>
              //   {/* </div> */}

              //   {/* <div className="lg:hidden flex flex-col gap-2 p-3"> */}
              //   <div className="flex gap-3 justify-between">
              //     <div className="text-body-sm text-txt-black-700 ">
              //       Tarikh Tutup: {formatDateTime(tender.deadline)}
              //     </div>
              //     {tender.new && (
              //       <Tag size="small" variant="success" mode="pill" dot>
              //         Baru
              //       </Tag>
              //     )}
              //   </div>
              //   <div className="text-txt-black-500">{tender.org}</div>

              //   <Link href={tender.slug} ref={link.ref} className="font-semibold">
              //     {tender.title}
              //   </Link>

              //   <div className="flex gap-0.5 items-center px-1 py-0.5 border rounded-sm w-fit">
              //     <AttachmentIcon className="size-4" />
              //     <span className="text-body-xs">{tender.attachments}</span>
              //   </div>
              //   {/* </div> */}
              // </article>
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
