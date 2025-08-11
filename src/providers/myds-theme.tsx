'use client'

import { ThemeProvider } from '@govtechmy/myds-react/hooks'
import { AutoToast } from '@govtechmy/myds-react/toast'

export const MYDSThemeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AutoToast />
      {children}
    </ThemeProvider>
  )
}
