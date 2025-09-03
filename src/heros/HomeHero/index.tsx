'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { Page } from '@/payload-types'
import { cn } from '@/utilities/ui'
import {
  ArrowOutgoingIcon,
  BookIcon,
  EmailIcon,
  PhoneIcon,
  QuestionCircleIcon,
} from '@govtechmy/myds-react/icon'
import Autoplay from 'embla-carousel-autoplay'
import React, { useEffect, useState } from 'react'

export const HomeHero: React.FC<Page['hero']> = (props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const icon: Record<string, React.FC> = {
    'Latar Belakang': ArrowOutgoingIcon,
    'Senarai Tender': ArrowOutgoingIcon,
    'Surat Makluman': EmailIcon,
    'Garis Panduan': QuestionCircleIcon,
    'Manual Pengguna': BookIcon,
    'Soalan Lazim': ArrowOutgoingIcon,
    'Hubungi Kami': PhoneIcon,
  }

  if (!props.sliderImage) return <></>
  if (props.sliderImage.length <= 0) return <></>

  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 10_000,
        }),
      ]}
    >
      <CarouselContent className="-ml-0">
        {props.sliderImage.map(({ id, links, media, richText, title }) => (
          <CarouselItem key={id} className="relative pl-0 text-white">
            <div className="mx-auto max-w-screen-xl z-10 px-4.5 lg:px-6 py-32 lg:py-40 h-full">
              <div className="flex flex-col gap-y-4 md:gap-y-6 max-w-prose">
                {title && (
                  <RichText
                    className="mx-0 text-balance font-semibold font-heading text-heading-sm md:text-heading-md prose-h1:text-heading-lg md:prose-h1:text-heading-xl"
                    data={title}
                    enableProse={false}
                  />
                )}
                {richText && (
                  <RichText
                    className="mx-0 max-w-[55ch] text-balance [&_*]:text-white"
                    data={richText}
                    enableGutter={false}
                  />
                )}
                {Array.isArray(links) && links.length > 0 && (
                  <ul className="flex flex-wrap gap-3 lg:gap-4">
                    {links.map(({ link }, i) => {
                      const label = link.label
                      const Icon = icon[label] || ArrowOutgoingIcon
                      return (
                        <li key={i}>
                          <CMSLink {...link}>
                            {label}
                            <Icon />
                          </CMSLink>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </div>
            <Media
              imgClassName="absolute inset-0 size-full -z-10 object-cover max-sm:object-left"
              priority
              loading="eager"
              resource={media}
            />
            <div className="sticky bottom-0 size-full -z-10 bg-gradient-to-b from-transparent to-primary-700/25" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-x-3">
        <CarouselPrevious variant="unset" className="text-white transform-none focus:ring-0" />
        <div className="flex items-center gap-x-2">
          {props.sliderImage?.map((_, i) => (
            <svg
              key={i}
              viewBox={i === current ? '0 0 15 8' : '0 0 8 8'}
              className={cn(
                'transition-[colors,_width] duration-300 ease-in-out',
                i === current ? 'h-2 w-[15px] text-txt-white' : 'size-2 text-txt-white-disabled',
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" width={i === current ? 15 : 8} height="8" rx="4" fill="currentColor" />
            </svg>
          ))}
        </div>
        <CarouselNext variant="unset" className="text-white transform-none focus:ring-0" />
      </div>
    </Carousel>
  )
}
