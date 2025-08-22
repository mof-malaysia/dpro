import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { NavbarMenu } from '@govtechmy/myds-react/navbar'
import { usePathname } from 'next/navigation'
import React from 'react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  return (
    <NavbarMenu>
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            appearance="default-ghost"
            className="hover:bg-bg-washed-active data-[active=true]:bg-bg-washed-active"
            data-active={pathname === link.url}
            {...link}
          />
        )
      })}
    </NavbarMenu>
  )
}
