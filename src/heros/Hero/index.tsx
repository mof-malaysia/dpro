import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@govtechmy/myds-react/breadcrumb'
import { Container } from '@/components/ui/container'

export const Hero: React.FC<{
  children?: React.ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <Container>
      <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-10 space-y-6">
        <Breadcrumb variant="default">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Utama</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>

        <h1>{title}</h1>
        {children}
      </div>
    </Container>
  )
}
