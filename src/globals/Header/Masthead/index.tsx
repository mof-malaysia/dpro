'use client'

import { GovtOfficeIcon, Lock2Icon, LockFillIcon } from '@govtechmy/myds-react/icon'
import {
  Masthead as MastheadRoot,
  MastheadContent,
  MastheadHeader,
  MastheadSection,
  MastheadTitle,
  MastheadTrigger,
} from '@govtechmy/myds-react/masthead'
import { useTranslations } from 'next-intl'

export function Masthead() {
  const t = useTranslations('Masthead')

  return (
    <MastheadRoot className="xl:px-6">
      <MastheadHeader>
        <MastheadTitle>{t('official_gov_website')}</MastheadTitle>
        <MastheadTrigger>{t('how_to_identify')}</MastheadTrigger>
      </MastheadHeader>
      <MastheadContent>
        <MastheadSection icon={<GovtOfficeIcon />} title={t('official')}>
          {t('not_govmy')}
          <b>.gov.my</b>
          {t('close_site')}
        </MastheadSection>
        <MastheadSection icon={<Lock2Icon />} title={t('secure')}>
          {t('find_lock')}
          <LockFillIcon className="inline-block" />
          {t('or')}
          <b>https://</b>
          {t('precaution')}
        </MastheadSection>
      </MastheadContent>
    </MastheadRoot>
  )
}
