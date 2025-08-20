import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@govtechmy/myds-react/breadcrumb'
import { Container, Section } from '@/components/ui/container'

export const Hero: React.FC<{
  children?: React.ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <Container className="pt-8 pb-6 lg:pt-16 lg:pb-8">
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
        <h1 className="col-span-full font-heading font-semibold text-heading-sm md:text-heading-md">
          {title}
        </h1>
        {children}
      </Section>
    </Container>
  )
}
