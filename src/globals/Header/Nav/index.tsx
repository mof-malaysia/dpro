import React from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { NavbarMenu, NavbarMenuItem } from '@govtechmy/myds-react/navbar'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <NavbarMenu>
      {navItems.map(({ link }, i) => {
        const reference = link.reference
          ? typeof link.reference.value === 'string'
            ? link.reference.value
            : link.reference.value.slug
          : link.url
        const url = reference === 'home' ? '/' : reference
        const href = url || '#'

        return (
          <NavbarMenuItem key={i} href={href}>
            {link.label}
          </NavbarMenuItem>
        )
      })}
    </NavbarMenu>
  )
}
