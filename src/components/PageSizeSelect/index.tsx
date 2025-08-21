'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@govtechmy/myds-react/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export const PageSizeSelect: React.FC<{ options: string[] }> = ({ options }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const limit = searchParams.get('limit')
  const [value, setValue] = useState(limit || options[0])

  function handleValueChange(limit: string) {
    setValue(limit)
    const newParams = new URLSearchParams(searchParams)
    newParams.set('limit', limit)

    newParams.delete('page')
    router.push(pathname + '?' + newParams)
  }

  return (
    <Select
      variant="outline"
      size="medium"
      defaultValue={value}
      value={value}
      onValueChange={handleValueChange}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((size) => {
          return (
            <SelectItem key={size} value={size}>
              {size}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
