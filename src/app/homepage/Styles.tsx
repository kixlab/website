'use client'
import { Color, FontVariant, ScreenSize, linearlyScaleSize } from '@/app/theme'
import styled from '@emotion/styled'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${ScreenSize.max};
  width: 100%;
  padding: 40px 96px;
  @media (max-width: ${ScreenSize.md}) {
    padding: 40px 24px;
  }
  gap: ${linearlyScaleSize({
    minSizePx: 24,
    maxSizePx: 48,
    minScreenSizePx: parseInt(ScreenSize.sm),
    maxScreenSizePx: parseInt(ScreenSize.md),
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

const TitleContainer = styled.div`
  display: grid;
  gap: 8px;
`

const Title = styled.h2`
  ${FontVariant.title_lg}
  display: grid;

  /* Orange bar above title */
  &:before {
    content: '';
    justify-self: left;
    border: 4px solid ${Color.orange900}; // careful of margins (8px needs to be 4px here)
    width: 48px;
    margin-bottom: 8px;
  }
`

const Subtitle = styled.h3`
  ${FontVariant.title_sm}
`

export const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitleContainer>
  )
}

interface Props {
  style?: React.CSSProperties
  children: React.ReactNode
}

export const FullWidthContainer: React.FC<Props> = ({ style, children }) => {
  // Use for custom background colors (default: light gray) that span the full width of the viewport
  return (
    <div
      style={{
        width: '100vw',
        backgroundColor: Color.gray100,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export const ResponsiveContainer: React.FC<Props> = ({ style, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
