'use client'
import { SearchBar } from '@/components/SearchBar'
import { Select, SelectContent, SelectTrigger, SelectValue } from '@govtechmy/myds-react/select'
import { DateRangePicker } from '@govtechmy/myds-react/daterange-picker'
import React, { useRef, useState } from 'react'
import { Section } from '@/components/ui/container'

const PageClient: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <Section className="xl:col-start-2 xl:col-span-6 space-y-6">
        <SearchBar searchRef={searchRef} query={query} setQuery={setQuery} />

        <div className="flex gap-3 items-center">
          <Select size="small" variant="outline">
            <SelectTrigger>
              <SelectValue label="" placeholder="Semua" />
            </SelectTrigger>
            <SelectContent>{/* <SelectItem value=""></SelectItem> */}</SelectContent>
          </Select>
          <DateRangePicker
            locale="ms"
            value={{
              from: undefined,
              to: new Date(),
            }}
          />
        </div>
      </Section>
    </>
  )
}

export default PageClient
