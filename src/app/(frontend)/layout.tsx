import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/globals/Footer/Component'
import { Header } from '@/globals/Header/Component'
import { Masthead } from '@/globals/Header/Masthead'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { Inter, Poppins } from 'next/font/google'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-heading',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(inter.className, poppins.variable)} lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <Masthead />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s | d.Pro',
    default: 'd.Pro',
  },
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
