import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import type { Berita } from '@/payload-types'
import { getReadTimeEstimate } from '@/utilities/getReadTimeEstimate'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@govtechmy/myds-react/breadcrumb'
import { ClockIcon, CopyIcon } from '@govtechmy/myds-react/icon'
import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'

type Node = { type: string; text: string; children: Node[] }

export const BeritaHero: React.FC<{
  berita: Berita
}> = ({ berita }) => {
  const { content, heroImage, publishedAt, title } = berita

  function getReadTimeEstimateFromRtf(doc: Node[]) {
    let fullText = ''

    // Recursive function to traverse the document structure
    function extractText(node: Node) {
      if (node.type === 'text' && node.text) {
        fullText += node.text
      } else if (node.children) {
        node.children.forEach(extractText)
      }
    }

    doc.forEach(extractText) // Start extraction from the root of the parsed document
    return getReadTimeEstimate(fullText)
  }

  const readTimeEstimate = getReadTimeEstimateFromRtf(content.root.children as any)

  return (
    <div className="flex flex-col gap-6 items-center mx-auto lg:max-w-screen-sm px-4.5 lg:px-6">
      <div className="flex flex-col gap-6 w-full">
        <Breadcrumb variant="default">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Utama</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-col gap-3">
          <h1>{title}</h1>
          {publishedAt && (
            <div className="flex gap-2 items-center text-txt-black-500 text-body-sm">
              <div className="flex gap-1 items-center">
                <ClockIcon className="size-4" />
                Bacaan {readTimeEstimate} min
              </div>
              {`·`}
              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pb-4.5 border-b">
          <Button variant="default-outline" size="sm" iconOnly>
            <CopyIcon />
          </Button>
        </div>
      </div>

      <div className="w-full lg:min-w-[740px] h-auto select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media
            priority
            loading="eager"
            imgClassName="object-cover rounded-md"
            resource={heroImage}
          />
        )}
      </div>
    </div>
  )
}
