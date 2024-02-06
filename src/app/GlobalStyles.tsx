'use client'

import { Global, css } from '@emotion/react'
import { FontVariant, Color } from '@/app/theme'
import { NAV_BAR_HEIGHT } from '@/components/NavBar'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: ${NAV_BAR_HEIGHT + 24}px;
        }
        ,
        main {
          display: flex;
          flex-direction: column;
          padding: 40px 96px;
          gap: 32px;
        }
        ,
        h1 {
          margin: 0;
          ${FontVariant.title_lg}
        }
        ,
        *:focus-visible {
          outline: 2px solid ${Color.orange700};
        }
      `}
    />
  )
}
