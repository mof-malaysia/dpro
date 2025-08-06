'use client'
import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

// import { Button } from '@govtechmy/myds-react/button'
// import { SearchIcon } from '@govtechmy/myds-react/icon'
import { Navbar, NavbarAction } from '@govtechmy/myds-react/navbar'
// import { ThemeSwitch } from '@govtechmy/myds-react/theme-switch'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <Navbar className="w-auto">
      <Link href="/">
        <Logo />
      </Link>
      <HeaderNav data={data} />
      <NavbarAction>
        {/* <Button variant="default-ghost" iconOnly aria-label="search-button" size="small">
          <SearchIcon />
        </Button> */}

        {/* <ThemeSwitch /> */}
      </NavbarAction>
    </Navbar>
  )
}
