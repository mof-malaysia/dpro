'use client'

import { SearchBar } from '@/components/SearchBar'
import { formatDateTime } from '@/utilities/formatDateTime'
import useClickableCard from '@/utilities/useClickableCard'
import { AttachmentIcon } from '@govtechmy/myds-react/icon'
import { Tag } from '@govtechmy/myds-react/tag'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageClient: React.FC = () => {
  const pathname = usePathname()

  return (
    <>
      <div className="xl:col-span-6">
        <SearchBar pathname={pathname} />
      </div>
    </>
  )
}

const Card: React.FC<{
  attachments: number
  deadline: string
  new: boolean
  org: string
  slug: string
  title: string
}> = (tender) => {
  const { card, link } = useClickableCard({})

  return (
    <Link
      href={tender.slug}
      key={tender.slug}
      className="border-b last:border-0 flex lg:table-row-group"
    >
      <div className="max-lg:hidden table-row *:table-cell *:py-4 *:px-4.5">
        <div className="space-y-2">
          <div className="text-body-sm text-txt-black-700">
            Tarikh Tutup: {formatDateTime(tender.deadline)}
          </div>
          <div className="font-semibold">{tender.title}</div>
          {tender.new && (
            <Tag size="small" variant="success" mode="pill" dot>
              Baru
            </Tag>
          )}
        </div>
        <div className="text-txt-black-500">{tender.org}</div>
        <div>
          <div className="flex gap-0.5 items-center px-1 py-0.5 border rounded-sm">
            <AttachmentIcon className="size-4" />
            <span className="text-body-xs">{tender.attachments}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3 lg:hidden">
        <div className="flex gap-3 justify-between">
          <div className="text-body-sm text-txt-black-700 ">
            Tarikh Tutup: {formatDateTime(tender.deadline)}
          </div>
          {tender.new && (
            <Tag size="small" variant="success" mode="pill" dot>
              Baru
            </Tag>
          )}
        </div>
        <div className="text-txt-black-500">{tender.org}</div>

        <div className="font-semibold">{tender.title}</div>

        <div className="flex gap-0.5 items-center px-1 py-0.5 border rounded-sm w-fit">
          <AttachmentIcon className="size-4" />
          <span className="text-body-xs">{tender.attachments}</span>
        </div>
      </div>
    </Link>
  )
}

export { Card }
export default PageClient
