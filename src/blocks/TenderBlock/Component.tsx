import { TenderWIP } from '@/components/Logo/TenderWIP'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/ui/container'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import { ArrowOutgoingIcon } from '@govtechmy/myds-react/icon'
import { Tag } from '@govtechmy/myds-react/tag'
import Link from 'next/link'
import React from 'react'

export const TenderBlock: React.FC<FAQBlockProps> = (props) => {
  const { desc, title } = props

  return (
    <Section className="space-y-12">
      <TenderWIP className="max-sm:w-[calc(100dvw-36px)] mx-auto" />

      <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-8 flex flex-col items-center space-y-3 lg:space-y-6">
        <h2 className="font-heading font-semibold text-heading-xs md:text-heading-sm max-w-screen-sm text-balance text-center">
          {title}
        </h2>
        <svg
          viewBox="0 0 242 1"
          className="transition-[colors,_width] duration-300 ease-in-out h-px w-[242px] text-primary-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" width="242" height="1" fill="currentColor" />
        </svg>

        {desc && <RichText data={desc} enableGutter={false} className="text-center text-balance" />}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {[].map((tender, index) => {
            return (
              <article className="p-6 bg-bg-white space-y-3 border rounded-lg">
                <Tag size="small">{}</Tag>
                <p className="font-semibold">{}</p>
                <div className="space-y-2 text-sm text-txt-black-500 font-medium">
                  <p>{}</p>
                  <p className="space-x-1">
                    <span className="font-normal">{}</span>
                    <span className="text-txt-black-900">{formatDate()}</span>
                  </p>
                </div>
              </article>
            )
          })}
      </div>

      <Button asChild variant="default-outline" className="mx-auto">
        <Link href="/tender">
          Lihat <span></span> Tender Lain
          <ArrowOutgoingIcon className="text-txt-black-700" />
        </Link>
      </Button> */}
    </Section>
  )
}
