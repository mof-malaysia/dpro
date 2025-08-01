import React from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { NavbarMenu, NavbarMenuItem } from '@govtechmy/myds-react/navbar'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <NavbarMenu>
      {navItems.map(({ link }, i) => {
        return (
          <NavbarMenuItem key={i} href={link.url || '#'}>
            {link.label}
          </NavbarMenuItem>
        )
      })}
    </NavbarMenu>
  )
}
