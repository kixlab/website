import { css } from '@emotion/react'
import { text } from 'stream/consumers'

const textVariant = (size: `${number}px`, weight: number) => css`
  font-size: ${size};
  font-weight: ${weight};
`

const color = {
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
} as const

const fontSize = {
  title_xl: '36px',
  title_lg: '28px',
  title_md: '22px',
  title_sm: '16px',
  body_lg: '17px',
  body_md: '14px',
  body_sm: '12px',
} as const

const fontWeight = {
  title_xl: 700,
  title_lg: 700,
  title_md: 700,
  title_sm: 400,
  body_lg: 700,
  body_md: 400,
  body_sm: 400,
} as const

const fontVariant = {
  title_xl: textVariant(fontSize.title_xl, fontWeight.title_xl),
  title_lg: textVariant(fontSize.title_lg, fontWeight.title_lg),
  title_md: textVariant(fontSize.title_md, fontWeight.title_md),
  title_sm: textVariant(fontSize.title_sm, fontWeight.title_sm),
  body_lg: textVariant(fontSize.body_lg, fontWeight.body_lg),
  body_md: textVariant(fontSize.body_md, fontWeight.body_md),
  body_sm: textVariant(fontSize.body_sm, fontWeight.body_sm),
} as const

const button = {
  pad_x: '8px',
  pad_y: '4px',
} as const

const radius = {
  sm: '4px',
  md: '12px',
} as const

export const theme = {
  color,
  fontVariant,
  button,
  radius,
} as const
