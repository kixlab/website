'use client'
import { Color, FontVariant, ScreenSize, linearlyScaleSize } from '@/app/theme'
import styled from '@emotion/styled'

export const Section = styled.section<{ altBackground?: boolean }>`
  background-color: ${props => (props.altBackground ? '#F6F6F6' : 'white')};
  margin: 0 auto;
  width: 100%;
  padding: 48px
    ${linearlyScaleSize({
      minSizePx: 48,
      maxSizePx: 96,
      minScreenSizePx: parseInt(ScreenSize.md),
      maxScreenSizePx: parseInt(ScreenSize.lg),
    })};
`
export const GridContainer = styled.div<{ columnTemplate: string }>`
  display: grid;
  grid-template-columns: ${props => props.columnTemplate || '1fr 1fr'}; // default is two columns
`
export const FlexContainer = styled.div<{ direction?: 'row' | 'column'; gap?: string }>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '0px'}
  align-items: center;
  max-width: 100vw;
  justify-content: space-evenly;
`

export const Text = styled.div`
  ${FontVariant.body_md}
  color: ${Color.gray700}

  p {
    margin: 0;
  }
`
