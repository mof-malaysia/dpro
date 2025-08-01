import { cn } from '@/utilities/ui'
import * as React from 'react'

const Container: React.FC<
  { ref?: React.Ref<HTMLDivElement> } & React.HTMLAttributes<HTMLDivElement>
> = ({ className, ref, ...props }) => (
  <div
    className={cn('container grid grid-cols-4 lg:grid-cols-12 px-4.5 lg:px-6', className)}
    ref={ref}
    {...props}
  />
)

const Section: React.FC<
  { ref?: React.Ref<HTMLDivElement> } & React.HTMLAttributes<HTMLDivElement>
> = ({ className, ref, ...props }) => (
  <section
    className={cn('col-start-1 col-span-full lg:col-start-2 lg:col-span-10', className)}
    ref={ref}
    {...props}
  />
)

export { Container, Section }
