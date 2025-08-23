import RichText from '@/components/RichText'
import { Container, Section } from '@/components/ui/container'
import type { Page } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@govtechmy/myds-react/breadcrumb'
import React from 'react'

type HeroType =
  | {
      children?: React.ReactNode
      lastUpdated?: never
      showLastUpdated?: never
      title?: string
    }
  | (Page['hero'] & {
      children?: never
    })

export const Hero: React.FC<HeroType> = ({ children, lastUpdated, showLastUpdated, title }) => {
  return (
    <Container className="pt-8 lg:pt-16 pb-6 lg:pb-8">
      <Section className="grid grid-cols-subgrid gap-y-6 *:col-span-full">
        <Breadcrumb variant="default">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Utama</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="font-heading font-semibold text-heading-sm md:text-heading-md">{title}</h1>
        {showLastUpdated && lastUpdated && (
          <p className="text-txt-black-500">Kemaskini terakhir: {formatDateTime(lastUpdated)}</p>
        )}
        {children && children}
      </Section>
    </Container>
  )
}
