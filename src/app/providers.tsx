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
          main {
            display: flex;
            flex-direction: column;
            padding: 40px 96px;
            gap: 32px;
          }
          ,
          h1 {
            margin: 0;
            ${theme.fontVariant.title_lg}
          }
          ,
          *:focus-visible {
            outline: 2px solid ${theme.color.orange700};
          }
        `}
      />
      {children}
    </ThemeProvider>
  )
}
