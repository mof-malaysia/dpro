'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationNumber,
  PaginationPrevious,
} from '@govtechmy/myds-react/pagination'

export const Pagination: React.FC<{
  page: number
  limit: number
  totalPages: number
}> = ({ page, limit, totalPages }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const DOTS = '...'
  const siblings = 1

  const pageRange = () => {
    if (totalPages <= 5 + siblings) {
      return range(1, totalPages)
    }

    const leftSibIdx = Math.max(page - siblings, 1)
    const rightSibIdx = Math.min(page + siblings, totalPages)

    const showLeftDots = leftSibIdx > 2
    const showRightDots = rightSibIdx < totalPages - 2

    const firstPageIdx = 1
    const lastPageIdx = totalPages

    if (!showLeftDots && showRightDots) {
      const leftItemCount = 3 + 2 * siblings
      const leftRange = range(1, leftItemCount)
      return [...leftRange, DOTS, totalPages]
    }

    if (showLeftDots && !showRightDots) {
      const rightItemCount = 3 + 2 * siblings
      const rightRange = range(totalPages - rightItemCount + 1, totalPages)
      return [firstPageIdx, DOTS, ...rightRange]
    }

    if (showLeftDots && showRightDots) {
      const middleRange = range(leftSibIdx, rightSibIdx)
      return [firstPageIdx, DOTS, ...middleRange, DOTS, lastPageIdx]
    }
  }

  const visiblePages = pageRange()

  return (
    <PaginationRoot
      page={page}
      onPageChange={(page) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('page', String(page))
        router.push(pathname + '?' + newParams.toString())
      }}
      count={totalPages}
      limit={limit}
      type="default"
      className="lg:justify-end"
    >
      <PaginationContent className="gap-0 sm:gap-1">
        <PaginationItem>
          <PaginationPrevious
            className="p-2 max-sm:size-8 sm:p-2 mr-4 max-sm:[&_svg]:size-4"
            disabled={page === 1}
          />
        </PaginationItem>
        {visiblePages?.map((page) => (
          <PaginationItem key={page} className="max-sm:*:size-8">
            {page === '...' ? (
              <PaginationEllipsis />
            ) : (
              typeof page === 'number' && <PaginationNumber number={page} />
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className="p-2 max-sm:size-8 sm:p-2 ml-4 max-sm:[&_svg]:size-4"
            disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
