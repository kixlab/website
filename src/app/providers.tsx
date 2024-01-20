'use client'

import { ThemeProvider } from '@emotion/react'
import { theme } from '@/app/theme'

interface Props {
  children: React.ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
