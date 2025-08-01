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
      if (event.key === '/') {
        event.preventDefault()
        searchRef.current?.focus()
      }
      // Check if 'CMD + K' or 'Ctrl + K' key combination is pressed
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
      if (event.key === 'Escape') {
        event.preventDefault()
        searchRef.current?.blur()
        handleClickOutside()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleClickOutside = () => {
    setIsInputFocused(false)
  }

  //   useOnClickOutside<HTMLDivElement | HTMLInputElement>(
  //     [listRef as RefObject<HTMLDivElement>, searchRef as RefObject<HTMLInputElement>],
  //     handleClickOutside,
  //   )

  return (
    <SearchBarRoot size="large">
      <SearchBarInputContainer>
        <SearchBarInput
          ref={searchRef}
          value={query}
          onValueChange={setQuery}
          onFocus={() => setIsInputFocused(true)}
        />
        <SearchBarHint>
          Press <Pill size="small">/</Pill> to search
        </SearchBarHint>
        <SearchBarClearButton />
        <SearchBarSearchButton />
      </SearchBarInputContainer>
    </SearchBarRoot>
  )
}
