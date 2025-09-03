import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import type { Header as HeaderType } from '@/payload-types'
import { UserIcon } from '@govtechmy/myds-react/icon'
import { NavbarMenu } from '@/components/ui/navbar'
import Link from 'next/link'
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
            className="max-xl:w-full hover:bg-bg-washed-active data-[active=true]:bg-bg-washed-active"
            data-active={pathname === link.url}
            {...link}
          />
        )
      })}
      <li className="px-2.5 py-1.5">
        <Button variant="primary-fill" asChild>
          <Link
            href="https://dpro.mof.gov.my/dpro/security/Login.action"
            target="_blank"
            className="xl:hidden"
          >
            <UserIcon />
            Log masuk
          </Link>
        </Button>
      </li>
    </NavbarMenu>
  )
}
