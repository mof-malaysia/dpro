'use client'

import { Media } from '@/components/Media'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React, { useEffect, useState } from 'react'

export const GalleryBlock: React.FC<GalleryBlockProps> = (props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  if (!props.gallery) return <></>
  if (props.gallery.length < 0) return <></>

  return (
    <Carousel setApi={setApi}>
      <CarouselContent className="-ml-0 h-[450px]">
        {props.gallery.map(({ id, media }) => (
          <CarouselItem key={id} className="relative pl-0">
            <Media imgClassName="absolute inset-0 size-full -z-10 object-cover" resource={media} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {props.gallery.length > 1 && (
        <div className="w-full absolute bottom-0 p-6 flex justify-between items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <CarouselPrevious className="transform-none size-10" />
            <CarouselNext className="transform-none size-10" />
          </div>
          <div className="flex items-center gap-x-2 pr-2">
            {props.gallery?.map((_, i) => (
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
        </div>
      )}
    </Carousel>
  )
}
