'use client'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { LogoDPro } from '@/components/Logo/Logo'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { GlobeIcon } from '@govtechmy/myds-react/icon'

export const HomeHero: React.FC<Page['hero']> = ({ links, media, richText, title }) => {
  return (
    <div className="relative flex items-center justify-center text-white">
      <div className="container grid grid-cols-4 lg:grid-cols-12 z-10 px-4.5 lg:px-6 lg:py-32">
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex gap-8">
              <span className="shrink-0 w-[88px] h-[88px] bg-white rounded-full flex justify-center items-center">
                <LogoDPro className="size-[50px]" />
              </span>
              <h1 className="font-heading font-semibold text-heading-sm md:text-heading-md text-white">
                {title}
              </h1>
            </div>
            {richText && (
              <RichText className="[&_*]:text-white" data={richText} enableGutter={false} />
            )}
          </div>
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} appearance="inline">
                      <MovingBorderButton className="p-1 gap-2 pr-4 text-white font-medium">
                        <div className="size-12 bg-white rounded-full flex items-center justify-center">
                          <GlobeIcon className="text-[#702FF9] size-6" />
                        </div>
                        {link.label}
                      </MovingBorderButton>
                    </CMSLink>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="h-auto select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
