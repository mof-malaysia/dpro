'use client'

import { Pill } from '@govtechmy/myds-react/pill'
import {
  SearchBarClearButton,
  SearchBarHint,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBar as SearchBarRoot,
  SearchBarSearchButton,
} from '@govtechmy/myds-react/search-bar'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

export const SearchBar: React.FC<{
  pathname: string
}> = ({ pathname }) => {
  const searchRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState<string>(searchParams.get('q') || '')
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleValueChange = (query: string) => setQuery(query)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isInputFocused) {
        if (event.key === 'Escape') {
          event.preventDefault()
          searchRef.current?.blur()
          handleClickOutside()
        }
      } else {
        if (event.key === '/') {
          event.preventDefault()
          searchRef.current?.focus()
        }
        // Check if 'CMD + K' or 'Ctrl + K' key combination is pressed
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
          event.preventDefault()
          searchRef.current?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isInputFocused])

  const handleClickOutside = () => {
    setIsInputFocused(false)
  }

  const handleSearch = () => {
    const newParams = new URLSearchParams(searchParams)
    if (query) newParams.set('q', query)
    else newParams.delete('q')
    router.push(pathname + '?' + newParams.toString())
  }

  return (
    <SearchBarRoot size="large">
      <SearchBarInputContainer className="min-w-full">
        <SearchBarInput
          ref={searchRef}
          value={query}
          onValueChange={handleValueChange}
          onKeyUp={(e) => {
            if (e.key === 'Enter') handleSearch()
          }}
          onFocus={() => setIsInputFocused(true)}
        />
        {!isInputFocused && !query && (
          <SearchBarHint
            className="shrink-0 max-sm:hidden"
            onClick={() => searchRef.current?.focus()}
          >
            Tekan <Pill size="small">/</Pill> untuk cari
          </SearchBarHint>
        )}
        {query && <SearchBarClearButton onClick={() => handleValueChange('')} />}
        <SearchBarSearchButton onClick={handleSearch} />
      </SearchBarInputContainer>
    </SearchBarRoot>
  )
}
