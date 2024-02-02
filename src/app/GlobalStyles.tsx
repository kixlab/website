'use client'

import { Global, css } from '@emotion/react'
import { FontVariant, Color } from '@/app/theme'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 79px;
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
