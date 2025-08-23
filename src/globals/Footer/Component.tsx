import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const { navItems } = footerData

  return (
    <footer className="py-16 bg-bg-gray-50 text-sm border-t px-4.5 lg:px-6">
      <div className="container flex flex-col gap-3 items-center justify-between lg:flex-row">
        <p className="text-txt-black-500">
          © {new Date().getFullYear()} Kementerian Kewangan. Hak Cipta Terpelihara.
        </p>
        <ul className="flex flex-wrap gap-3 text-txt-black-700">
          {navItems &&
            navItems.length > 0 &&
            navItems.map(({ link }, i) => (
              <li key={i}>
                <CMSLink
                  {...link}
                  appearance="link"
                  size="unset"
                  className="text-txt-black-700 font-normal"
                />
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}
