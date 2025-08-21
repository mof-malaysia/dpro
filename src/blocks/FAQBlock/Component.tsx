import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Section } from '@/components/ui/container'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@govtechmy/myds-react/accordion'
import { ArrowOutgoingIcon } from '@govtechmy/myds-react/icon'
import React from 'react'

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { desc, faq, helpdesk, title } = props

  return (
    <Section className="grid grid-cols-subgrid space-y-12">
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

        {desc && <RichText data={desc} enableGutter={false} className="text-center" />}
      </div>

      <Helpdesk {...helpdesk} />

      <FAQ {...faq} />
    </Section>
  )
}

const Helpdesk: React.FC<FAQBlockProps['helpdesk']> = (props) => {
  if (!props) return
  const { desc, image, links, title } = props

  return (
    <div className="col-start-1 col-span-full lg:col-start-1 lg:col-span-4">
      <article className="group flex flex-col bg-bg-white border rounded-lg overflow-hidden">
        <div className="relative w-full grow">
          {!image && <></>}
          {image && typeof image !== 'string' && (
            <Media htmlElement={null} resource={image} imgClassName="h-[240px]" />
          )}
        </div>
        <div className="relative p-4.5 space-y-4">
          <div className="font-semibold">{title}</div>

          {desc && <RichText data={desc} enableGutter={false} className="text-txt-black-500" />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                const label = link.label
                return (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      className="hover:bg-bg-primary-600 hover:border hover:border-otl-primary-600 hover:text-white"
                    >
                      {label}
                      <ArrowOutgoingIcon />
                    </CMSLink>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </article>
    </div>
  )
}

const FAQ: React.FC<FAQBlockProps['faq']> = (props) => {
  if (!props) return
  const { columns, title } = props

  return (
    <div className="col-start-1 col-span-full lg:col-start-5 lg:col-span-6 space-y-6 p-6 bg-bg-white border rounded-xl">
      {title && <h2 className="font-semibold text-heading-xs lg:text-body-2xl">{title}</h2>}
      <Accordion type="single">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { id, richText, title } = col

            return (
              <AccordionItem value={`${title}_${index}`} key={id}>
                <AccordionTrigger className="text-start leading-6 gap-3 [&_svg]:shrink-0">
                  {title}
                </AccordionTrigger>
                <AccordionContent>
                  {richText && <RichText data={richText} enableGutter={false} />}
                </AccordionContent>
              </AccordionItem>
            )
          })}
      </Accordion>
    </div>
  )
}
