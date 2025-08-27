'use client'

import { Logo } from '@/components/Logo/Logo'
import type { Header } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { HeaderNav } from './Nav'
// import { SearchIcon } from '@govtechmy/myds-react/icon'
import { UserIcon } from '@govtechmy/myds-react/icon'
import { Navbar, NavbarAction } from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
// import { ThemeSwitch } from '@govtechmy/myds-react/theme-switch'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <Navbar className="*:px-4.5 *:xl:px-6">
      <Link href="/">
        <Logo />
      </Link>
      <HeaderNav data={data} />
      <NavbarAction>
        <Link
          href="https://dpro.mof.gov.my/dpro/security/Login.action"
          target="_blank"
          className="max-xl:hidden"
        >
          <Button variant="primary-fill">
            <UserIcon />
            Log masuk
          </Button>
        </Link>

        {/* <ThemeSwitch />
        {/* <Button variant="default-ghost" iconOnly aria-label="search-button" size="small">
          <SearchIcon />
        </Button> */}

        {/* <ThemeSwitch /> */}
      </NavbarAction>
    </Navbar>
  )
}
