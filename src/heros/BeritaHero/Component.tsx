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
import { ClockIcon, FacebookIcon, LinkedinIcon, TwitterXIcon } from '@govtechmy/myds-react/icon'
import { Link } from '@govtechmy/myds-react/link'
import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'
import { CopyDialog } from './Component.client'

export const BeritaHero: React.FC<{
  berita: Berita
}> = ({ berita }) => {
  const { content, heroImage, publishedAt, slug, title } = berita

  const readTimeEstimate = getReadTimeEstimate(content.root.children as any)

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.PRODUCTION_URL
  const URL = `${SITE_URL}/berita/${slug}`

  const SHARE_OPTIONS = [
    {
      name: 'Facebook',
      icon: <FacebookIcon />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${URL}&t=${title}`,
    },
    {
      name: 'Twitter',
      icon: <TwitterXIcon />,
      link: `https://www.twitter.com/intent/tweet?text=${title}&url=${URL}&hashtags=dpro`,
    },
    {
      name: 'Linkedin',
      icon: <LinkedinIcon />,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${URL}`,
    },
  ]

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
          <h1 className="font-heading font-semibold text-heading-sm md:text-heading-md">{title}</h1>
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
          <CopyDialog url={URL} />

          {SHARE_OPTIONS.map(({ icon, link, name }) => (
            <Button variant="default-outline" size="sm" iconOnly asChild key={name}>
              <Link newTab href={link}>
                {icon}
                <span className="sr-only">Share to {name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="w-full lg:max-w-[740px] h-auto select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media
            priority
            loading="eager"
            imgClassName="size-full object-cover rounded-md"
            resource={heroImage}
          />
        )}
      </div>
    </div>
  )
}
