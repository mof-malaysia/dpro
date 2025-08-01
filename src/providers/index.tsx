import React from 'react'

import { MYDSThemeProvider } from './myds-theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <MYDSThemeProvider>{children}</MYDSThemeProvider>
}
