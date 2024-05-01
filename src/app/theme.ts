import { css } from '@emotion/react'

const textVariant = (size: `${number}px`, weight: number) => css`
  font-size: ${size};
  font-weight: ${weight};
`

export const Color = {
  white: '#FFFFFF',
  black: '#000000',
  gray900: '#252525',
  gray800: '#464646',
  gray700: '#666666',
  gray600: '#7A7A7A',
  gray500: '#A3A3A3',
  gray400: '#C2C2C2',
  gray300: '#E4E4E4',
  gray200: '#F1F1F1',
  gray100: '#F6F6F6',
  gray50: '#FBFBFB',
  orange900: '#FF6F00',
  orange800: '#FF8F00',
  orange700: '#FFA000',
  orange600: '#FFB300',
  orange500: '#FFC106',
  orange400: '#FFCA28',
  orange300: '#FFD54F',
  orange200: '#FFE082',
  orange100: '#FFECB3',
  orange50: '#FFF8E1',
  green300: '#4CAF50',
} as const

export const FontSize = {
  title_xl: '36px',
  title_lg: '28px',
  title_md: '22px',
  title_sm: '16px',
  body_lg: '17px',
  body_md: '14px',
  body_sm: '12px',
} as const

export const FontWeight = {
  title_xl: 700,
  title_lg: 700,
  title_md: 700,
  title_sm: 400,
  body_lg: 700,
  body_md: 400,
  body_sm: 400,
} as const

export const FontVariant = {
  title_xl: textVariant(FontSize.title_xl, FontWeight.title_xl),
  title_lg: textVariant(FontSize.title_lg, FontWeight.title_lg),
  title_md: textVariant(FontSize.title_md, FontWeight.title_md),
  title_sm: textVariant(FontSize.title_sm, FontWeight.title_sm),
  body_lg: textVariant(FontSize.body_lg, FontWeight.body_lg),
  body_md: textVariant(FontSize.body_md, FontWeight.body_md),
  body_sm: textVariant(FontSize.body_sm, FontWeight.body_sm),
} as const

export const Padding = {
  x: '8px',
  y: '4px',
} as const

export const Radius = {
  sm: '4px',
  md: '12px',
} as const
