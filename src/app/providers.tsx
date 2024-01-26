'use client'

import { ThemeProvider } from '@emotion/react'
import { theme } from '@/app/theme'
import { Global, css } from '@emotion/react'

interface Props {
  children: React.ReactNode
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          *:focus-visible {
            outline: 2px solid ${theme.color.orange700};
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}
