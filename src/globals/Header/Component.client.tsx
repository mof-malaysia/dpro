'use client'
import Link from 'next/link'
// import { useParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

// import { Button, ButtonIcon } from '@govtechmy/myds-react/button'
// import { GlobeIcon, SearchIcon } from '@govtechmy/myds-react/icon'
import { Navbar, NavbarAction } from '@govtechmy/myds-react/navbar'
// import {
//   Select,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
// } from '@govtechmy/myds-react/select'
import { ThemeSwitch } from '@govtechmy/myds-react/theme-switch'
// import { Locale, locales, usePathname, useRouter } from '@/lib/i18n'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  // const router = useRouter()
  // const [isPending, startTransition] = useTransition()
  // const pathname = usePathname()
  // const params = useParams()

  // function onValueChange(locale: string) {
  //   startTransition(() => {
  //     router.replace(
  //       // @ts-expect-error -- TypeScript will validate that only known `params`
  //       // are used in combination with a given `pathname`. Since the two will
  //       // always match for the current route, we can skip runtime checks.
  //       { pathname, params },
  //       { locale: locale },
  //     )
  //   })
  // }

  // const name: Record<Locale, { full: string; short: string }> = {
  //   'en-GB': {
  //     full: 'English',
  //     short: 'EN',
  //   },
  //   'ms-MY': {
  //     full: 'Bahasa Melayu',
  //     short: 'BM',
  //   },
  // }

  return (
    <Navbar className="xl:px-6">
      <Link href="/">
        <Logo />
      </Link>
      <HeaderNav data={data} />
      <NavbarAction>
        {/* <Button variant="default-ghost" iconOnly aria-label="search-button" size="small">
          <ButtonIcon>
            <SearchIcon />
          </ButtonIcon>
        </Button> */}

        <ThemeSwitch />

        {/* <Select defaultValue="en-GB" variant="outline" size="small" onValueChange={onValueChange}>
          <SelectTrigger aria-label="Select Language">
            <GlobeIcon className="h-4 w-4" />
            <SelectValue>{(locale) => name[locale as Locale].short}</SelectValue>
          </SelectTrigger>
          <SelectContent align="end" className="font-body rounded-[4px] py-1">
            {locales.map((l) => (
              <SelectItem key={l} value={l}>
                {name[l].full}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </NavbarAction>
    </Navbar>
  )
}
