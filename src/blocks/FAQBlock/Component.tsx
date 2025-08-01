import React from 'react'

import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@govtechmy/myds-react/accordion'

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { columns, title } = props

  return (
    <div className="container my-[84px] grid grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-4.5 md:gap-x-6 px-4.5 lg:px-6">
      <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-10 space-y-12">
        {title && <h1>{title}</h1>}
        <Accordion type="single">
          {columns &&
            columns.length > 0 &&
            columns.map((col, index) => {
              const { id, richText, title } = col

              return (
                <AccordionItem value={`${title}_${index}`} key={id}>
                  <AccordionTrigger className="text-start leading-6">{title}</AccordionTrigger>
                  <AccordionContent>
                    {richText && <RichText data={richText} enableGutter={false} />}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
        </Accordion>
      </div>
    </div>
  )
}
