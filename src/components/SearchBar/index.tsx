'use client'
import React, { RefObject, useEffect, useState } from 'react'

import { Pill } from '@govtechmy/myds-react/pill'
import {
  SearchBar as SearchBarRoot,
  SearchBarInput,
  SearchBarInputContainer,
  SearchBarSearchButton,
  SearchBarResults,
  SearchBarResultsList,
  SearchBarResultsItem,
  SearchBarClearButton,
  SearchBarHint,
} from '@govtechmy/myds-react/search-bar'

export const SearchBar: React.FC<{
  onChange?: (query: string) => void
  query: string
  searchRef: RefObject<HTMLInputElement | null>
  setQuery: (query: string) => void
}> = ({ onChange, query, searchRef, setQuery }) => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  const onSearch = (query: string) => {
    if (typeof query === 'string') {
      setQuery(query)
      if (onChange) onChange(query)
    }
  }

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

  //   useOnClickOutside<HTMLDivElement | HTMLInputElement>(
  //     [listRef as RefObject<HTMLDivElement>, searchRef as RefObject<HTMLInputElement>],
  //     handleClickOutside,
  //   )

  return (
    <SearchBarRoot size="large">
      <SearchBarInputContainer className="min-w-full">
        <SearchBarInput
          ref={searchRef}
          value={query}
          onValueChange={onSearch}
          onFocus={() => setIsInputFocused(true)}
        />
        <SearchBarHint
          className="shrink-0 max-sm:hidden"
          onClick={() => searchRef.current?.focus()}
        >
          Tekan <Pill size="small">/</Pill> untuk cari
        </SearchBarHint>
        {query && <SearchBarClearButton onClick={() => onSearch('')} />}
        <SearchBarSearchButton />
      </SearchBarInputContainer>
    </SearchBarRoot>
  )
}
