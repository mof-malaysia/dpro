'use client'

import { ThemeProvider } from '@govtechmy/myds-react/hooks'

export const MYDSThemeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
