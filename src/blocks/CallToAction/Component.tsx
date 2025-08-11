import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Section } from '@/components/ui/container'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <Section className="bg-bg-primary-50 rounded border border-otl-primary-300 p-6 lg:p-10 flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
      <div className="max-w-[48rem] flex items-center">
        {richText && <RichText data={richText} enableGutter={false} />}
      </div>
      <div className="flex flex-col gap-8">
        {(links || []).map(({ link }, i) => {
          return <CMSLink key={i} size="lg" {...link} />
        })}
      </div>
    </Section>
  )
}
