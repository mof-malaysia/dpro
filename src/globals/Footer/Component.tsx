import { FooterClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { ContactInfo, Footer } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import {
  Footer as FooterRoot,
  SiteInfo,
  FooterSection,
  SiteLinkGroup,
  SiteLink,
  FooterLogo,
} from '@govtechmy/myds-react/footer'
import { Link } from '@govtechmy/myds-react/link'
import { FacebookIcon, InstagramIcon, TwitterXIcon, YoutubeIcon } from '@govtechmy/myds-react/icon'
import { social_media_icons } from '../ContactInfo/config'

const social_media = [
  {
    icon: <FacebookIcon />,
    name: 'Facebook',
    href: 'http://facebook.com/KemKewangan/',
  },
  { icon: <TwitterXIcon />, name: 'X', href: 'https://x.com/mofmalaysia' },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    href: 'https://www.instagram.com/mof_malaysia/',
  },
  {
    icon: <YoutubeIcon />,
    name: 'Youtube',
    href: 'https://www.youtube.com/MOFMalaysia19',
  },
]

const open_source = [
  {
    name: 'frontend',
    href: 'https://www.github.com/mof-malaysia/dpro',
  },
  {
    name: 'ui_ux',
    href: 'https://www.figma.com/design/THcTwaUBh1iRX5MVu85GVb/dPro',
  },
]

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const contactInfoData = (await getCachedGlobal('contact-info', 1)()) as ContactInfo

  const { address, pautan: social_media } = contactInfoData
  return (
    <FooterRoot>
      <FooterSection className="container">
        <SiteInfo>
          <FooterLogo logo={<Logo />} />
          <p className="whitespace-pre-line text-body-sm text-txt-black-700">{address}</p>
          <p className="text-body-sm font-semibold text-txt-black-900">Ikuti Kami</p>
          <div className="flex gap-3">
            {social_media.map(({ site, url }) => {
              const Icon = social_media_icons[site].icon
              return (
                <Link
                  key={site}
                  newTab
                  href={url}
                  underline="hover"
                  className="hover:text-txt-black-900"
                >
                  <Icon />
                </Link>
              )
            })}
          </div>
        </SiteInfo>

        {/* <SiteLinkGroup groupTitle={t("open_source")}>
            {open_source.map(({ name, href }) => (
              <SiteLink
                key={name}
                newTab
                href={href}
                underline="hover"
                className="hover:text-txt-black-900"
              >
                {t("" + name)}
              </SiteLink>
            ))}
          </SiteLinkGroup> */}
      </FooterSection>
      <FooterSection className="container flex w-full flex-col justify-between gap-4 border-none text-sm text-txt-black-500 md:pb-0 md:max-lg:gap-4.5 lg:flex-row lg:gap-6">
        <p>Hak Cipta Terpelihara © {new Date().getFullYear()}</p>
      </FooterSection>
    </FooterRoot>
  )
}
