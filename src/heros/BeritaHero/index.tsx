import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'

import type { Berita } from '@/payload-types'

import { Media } from '@/components/Media'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@govtechmy/myds-react/breadcrumb'
// import { Button } from '@govtechmy/myds-react/button'
// import { ButtonIcon, CopyIcon } from '@govtechmy/myds-react/icon'

export const BeritaHero: React.FC<{
  berita: Berita
}> = ({ berita }) => {
  const { heroImage, publishedAt, title } = berita

  return (
    <div className="flex flex-col gap-6 items-center mx-auto lg:max-w-screen-sm">
      <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-1">
              <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 pb-4.5 border-b">
          {/* <Button variant="default-outline" size="small" iconOnly>
            <ButtonIcon>
              <CopyIcon />
            </ButtonIcon>
          </Button> */}
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
