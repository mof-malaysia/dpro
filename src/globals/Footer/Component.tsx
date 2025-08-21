import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const { navItems } = footerData

  return (
    <footer className="py-16 bg-bg-gray-50 text-sm border-t">
      <div className="container flex flex-col gap-3 items-center justify-between lg:flex-row">
        <p className="text-txt-black-500">
          Copyright © {new Date().getFullYear()} Kementerian Kewangan. All Rights Reserved.
        </p>
        <ul className="flex flex-wrap gap-3 text-txt-black-700">
          {navItems &&
            navItems.length > 0 &&
            navItems.map(({ link }, i) => (
              <li key={i}>
                <CMSLink
                  {...link}
                  appearance="unset"
                  size="unset"
                  className="text-txt-black-700 hover:underline font-normal"
                />
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}
