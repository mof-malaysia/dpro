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
    'Surat Arahan': EmailIcon,
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
            <div className="mx-auto max-w-screen-xl grid grid-cols-4 lg:grid-cols-12 z-10 px-4.5 lg:px-6 pb-12 pt-36 h-full">
              <div className="col-span-full md:col-span-5 flex flex-col gap-20 justify-between">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <h1 className="font-heading font-semibold text-heading-sm md:text-heading-md text-white">
                      {title}
                    </h1>
                    {richText && (
                      <RichText className="[&_*]:text-white" data={richText} enableGutter={false} />
                    )}
                  </div>
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

                <div className="flex items-center gap-x-3">
                  <CarouselPrevious variant="unset" className="transform-none active:ring-0" />
                  <div className="flex items-center gap-x-2">
                    {props.sliderImage?.map((_, i) => (
                      <svg
                        key={i}
                        viewBox={i === current ? '0 0 15 8' : '0 0 8 8'}
                        className={cn(
                          'transition-[colors,_width] duration-300 ease-in-out',
                          i === current
                            ? 'h-2 w-[15px] text-txt-white'
                            : 'size-2 text-txt-white-disabled',
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0"
                          width={i === current ? 15 : 8}
                          height="8"
                          rx="4"
                          fill="currentColor"
                        />
                      </svg>
                    ))}
                  </div>
                  <CarouselNext variant="unset" className="transform-none active:ring-0" />
                </div>
              </div>
            </div>
            <Media
              imgClassName="absolute inset-0 size-full -z-10 object-cover"
              priority
              loading="eager"
              resource={media}
            />
            <div className="sticky bottom-0 size-full -z-10 bg-gradient-to-b from-transparent to-primary-700/25" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
