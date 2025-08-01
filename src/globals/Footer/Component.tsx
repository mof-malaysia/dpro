import { FooterClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  // const contactInfoData: Footer = await getCachedGlobal('contact-info', 1)()

  return <FooterClient data={footerData} />
}
