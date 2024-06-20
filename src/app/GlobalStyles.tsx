'use client'

import { Global, css } from '@emotion/react'
import { FontVariant, Color } from '@/app/theme'
import { NAV_BAR_HEIGHT } from '@/components/NavBar'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        /* CSS reset taken from https://www.joshwcomeau.com/css/custom-css-reset/ */
        /* Apply height and width rules to entire box, not just content */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default margins that all elements have */
        * {
          margin: 0;
        }

        /* Change default line height (1.2) to follow WCAG recommendations */
        /* https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html*/
        body {
          line-height: 1.5;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        /* Prevent media from overflowing and make them not inline elements */
        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
        }

        /* Prevent any cases where a long URL will overflow by allowing hard line breaks if necessary */
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          overflow-wrap: break-word;
          font: inherit;
        }

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
