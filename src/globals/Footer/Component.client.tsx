'use client'

import React from 'react'

import type { Footer } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { useTranslations } from 'next-intl'
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

interface FooterClientProps {
  data: Footer
}

export const FooterClient: React.FC<FooterClientProps> = ({ data }) => {
  const t = useTranslations('Footer')

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
      href: 'https://www.github.com/',
    },
    {
      name: 'ui_ux',
      href: 'https://www.figma.com/design/',
    },
  ]

  return (
    <FooterRoot>
      <FooterSection className="container">
        <SiteInfo>
          <FooterLogo logo={<Logo />} />
          <p className="whitespace-pre-line text-body-sm text-txt-black-700">
            Kementerian Kewangan{'\n'}
            No. 5 Persiaran Perdana, Presint 2,{'\n'}
            Pusat Pentadbiran Kerajaan Persekutuan,{'\n'}
            62592, W.P. Putrajaya
          </p>
          <p className="text-body-sm font-semibold text-txt-black-900">{t('follow_us')}</p>
          <div className="flex gap-3">
            {social_media.map(({ icon, name, href }) => (
              <Link
                key={name}
                newTab
                href={href}
                underline="hover"
                className="hover:text-txt-black-900"
              >
                {icon}
              </Link>
            ))}
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
        <p>
          {t('all_rights_reserved')} © {new Date().getFullYear()}
        </p>
      </FooterSection>
    </FooterRoot>
  )
}
