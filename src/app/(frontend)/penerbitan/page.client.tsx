'use client'

import { DateRangePicker } from '@/components/DateRangePicker'
import { SearchBar } from '@/components/SearchBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const PageClient: React.FC = () => {
  const pathname = usePathname()

  return (
    <>
      <div className="lg:col-span-6">
        <SearchBar />
      </div>

      <DateRangePicker pathname={pathname + '/cari'} />
    </>
  )
}

export default PageClient
