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
  return (
    <MastheadRoot className="xl:px-6">
      <MastheadHeader>
        <MastheadTitle>Portal Rasmi Kerajaan Malaysia</MastheadTitle>
        <MastheadTrigger>Kenal pasti begini</MastheadTrigger>
      </MastheadHeader>
      <MastheadContent>
        <MastheadSection
          icon={<GovtOfficeIcon />}
          title="Pautan portal rasmi berakhir dengan .gov.my"
        >
          Sekiranya anda melihat pautan selain
          <b>.gov.my</b>, segera tutupkan halaman itu walaupun ia menyerupai portal rasmi!
        </MastheadSection>
        <MastheadSection icon={<Lock2Icon />} title="Portal yang selamat menggunakan HTTPS">
          Periksa ikon loker (
          <LockFillIcon className="inline-block" />) atau
          <b>https://</b>
          di depan pautan. Sekiranya tiada, jangan kongsikan sebarang maklumat sensitif
        </MastheadSection>
      </MastheadContent>
    </MastheadRoot>
  )
}
