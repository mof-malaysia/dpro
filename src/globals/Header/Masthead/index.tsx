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

export function Masthead() {
  return (
    <MastheadRoot className="*:xl:px-6">
      <MastheadHeader>
        <MastheadTitle>Portal Rasmi Kerajaan Malaysia</MastheadTitle>
        <MastheadTrigger className="*:text-txt-secondary focus:ring-fr-secondary bg-otl-gray-200 group flex items-center gap-0.5 rounded-md p-1 px-1 focus:outline-none focus:ring focus:ring-inset sm:bg-transparent sm:pl-1.5 xl:rounded-sm">
          Kenal pasti begini
        </MastheadTrigger>
      </MastheadHeader>
      <MastheadContent>
        <MastheadSection
          icon={<GovtOfficeIcon />}
          title="Pautan portal rasmi berakhir dengan .gov.my"
        >
          Sekiranya anda melihat pautan selain
          <b> .gov.my</b>, segera tutupkan halaman itu walaupun ia menyerupai portal rasmi!
        </MastheadSection>
        <MastheadSection icon={<Lock2Icon />} title="Portal yang selamat menggunakan HTTPS">
          Periksa ikon loker (
          <LockFillIcon className="inline-block mb-0.5" />) atau
          <b> https:// </b>
          di depan pautan. Sekiranya tiada, jangan kongsikan sebarang maklumat sensitif
        </MastheadSection>
      </MastheadContent>
    </MastheadRoot>
  )
}
