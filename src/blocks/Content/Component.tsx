import RichText from '@/components/RichText'
import { Section } from '@/components/ui/container'
import type { ContentBlock as ContentBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import { CMSLink } from '../../components/Link'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  return (
    <>
      <Section className="grid grid-cols-4 lg:grid-cols-12 gap-6">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <div
                className={cn('col-span-4', {
                  'md:col-span-2': size !== 'full',
                  'lg:col-span-4': size === 'oneThird',
                  'lg:col-span-6': size === 'half',
                  'lg:col-span-8': size === 'twoThirds',
                  'lg:col-span-12': size === 'full',
                })}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </Section>
    </>
  )
}
