import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const { navItems } = footerData

  return (
    <footer className="py-16 bg-bg-gray-50 text-sm border-t">
      <div className="container">
        <p className="text-txt-black-500">
          Copyright © {new Date().getFullYear()} Kementerian Kewangan. All Rights Reserved.
        </p>
        <ul className="text-txt-black-700">
          {navItems &&
            navItems.length > 0 &&
            navItems.map(({ link }, i) => (
              <li>
                <CMSLink key={i} {...link} appearance="link"></CMSLink>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}
