import { Button, type ButtonProps } from '@/components/ui/button'
import type { Berita, Page, Penerbitan } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'berita' | 'pages' | 'penerbitan'
    value: Berita | Page | Penerbitan | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
    ...otherProps
  } = props

  function isPenerbitan(item: any): item is Penerbitan {
    return item.fileUpload !== undefined
  }

  const href =
    type === 'reference' && reference && typeof reference.value === 'object'
      ? `${reference.relationTo !== 'pages' ? `/${reference.relationTo}` : ''}${
          isPenerbitan(reference.value) ? `?q=${reference.value.name}` : `/${reference?.value.slug}`
        }`
      : url

  if (!href) return null

  const size = appearance === 'link' ? 'unset' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {children ? children : label}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance} {...otherProps}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {children ? children : label}
      </Link>
    </Button>
  )
}
