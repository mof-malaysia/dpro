import RichText from '@/components/RichText'
import React from 'react'
import type { SliderHeader as SliderHeaderProps } from 'src/payload-types'

export const SliderHeader: React.FC<SliderHeaderProps> = ({ content }) => {
  return (
    <RichText
      className="font-barlow text-balance mx-0 text-heading-sm md:text-heading-md prose-h1:text-heading-xl prose-h1:md:text-heading-2xl prose-h1:text-warning-400 prose-h1:font-bold prose-h1:my-0 prose-p:font-normal prose-p:text-white prose-p:my-0"
      data={content}
    />
  )
}
