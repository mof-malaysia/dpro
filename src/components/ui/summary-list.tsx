import { ComponentProps, FunctionComponent } from 'react'
import { cn } from '@/utilities/ui'

const SummaryList: FunctionComponent<ComponentProps<'dl'>> = ({
  children,
  className,
  ...props
}) => (
  <dl className={cn('table table-auto w-full text-body-sm font-medium', className)} {...props}>
    {children}
  </dl>
)

const SummaryListRow: FunctionComponent<ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn('table-row *:border-otl-gray-200 *:border-b', className)} {...props}>
    {children}
  </div>
)

const SummaryListTerm: FunctionComponent<ComponentProps<'dt'>> = ({
  children,
  className,
  ...props
}) => (
  <dt
    className={cn('table-cell text-txt-black-500 py-3 pr-8 whitespace-nowrap', className)}
    {...props}
  >
    {children}
  </dt>
)

const SummaryListDetail: FunctionComponent<ComponentProps<'dd'>> = ({
  children,
  className,
  ...props
}) => (
  <dd className={cn('table-cell text-txt-black-900 py-3 pr-3 ms-0 w-full', className)} {...props}>
    {children}
  </dd>
)

const SummaryListAction: FunctionComponent<ComponentProps<'dd'>> = ({
  children,
  className,
  ...props
}) => (
  <dd className={cn('table-cell py-3 pr-3 ms-0 w-full', className)} {...props}>
    {children}
  </dd>
)

export { SummaryList, SummaryListRow, SummaryListTerm, SummaryListDetail, SummaryListAction }
