import RichText from '@/components/RichText'
import { Section } from '@/components/ui/container'
import type { FAQBlock as FAQBlockProps } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@govtechmy/myds-react/accordion'
import React from 'react'

export const FAQBlock: React.FC<FAQBlockProps> = (props) => {
  const { columns, title } = props

  return (
    <Section className="space-y-6">
      {title && <h2>{title}</h2>}
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
    </Section>
  )
}
