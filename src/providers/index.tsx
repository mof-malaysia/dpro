import React from 'react'

import { MYDSThemeProvider } from './myds-theme'
import { NextIntlClientProvider } from 'next-intl'

export const Providers: React.FC<{
  children: React.ReactNode
  messages: Record<string, any>
}> = ({ children, messages }) => {
  return (
    <MYDSThemeProvider>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </MYDSThemeProvider>
  )
}
