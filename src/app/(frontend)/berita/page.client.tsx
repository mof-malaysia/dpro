'use client'

import { DateRangePicker } from '@/components/DateRangePicker'
import { SearchBar } from '@/components/SearchBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageClient: React.FC = () => {
  const pathname = usePathname()

  return (
    <>
      <div className="xl:col-span-6">
        <SearchBar pathname={pathname} />
      </div>

      <DateRangePicker pathname={pathname} />
    </>
  )
}

export default PageClient
