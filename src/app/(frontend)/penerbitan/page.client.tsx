'use client'
import { SearchBar } from '@/components/SearchBar'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@govtechmy/myds-react/select'
import React, { useRef, useState } from 'react'

const PageClient: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-6">
        <SearchBar searchRef={searchRef} query={query} setQuery={setQuery} />
      </div>
      <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-10 flex gap-3 items-center">
        <Select size="small" variant="outline">
          <SelectTrigger>
            <SelectValue label="" placeholder="Semua" />
          </SelectTrigger>
          <SelectContent>{/* <SelectItem value=""></SelectItem> */}</SelectContent>
        </Select>
      </div>
    </>
  )
}

export default PageClient
