import styled from '@emotion/styled'
import { FontVariant, Color, ScreenSize, linearlyScaleSize } from '@/app/theme'

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const SectionTitle = styled.h2`
  margin: 0;
  ${FontVariant.title_md}
  color: ${Color.orange900};
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

const TitleContainer = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: clamp(24px, calc(24px + 0.23 * (100vw - ${ScreenSize.md})), 48px);
  margin-bottom: ${linearlyScaleSize({
    minSizePx: 24,
    maxSizePx: 48,
    minScreenSizePx: parseInt(ScreenSize.md),
    maxScreenSizePx: parseInt(ScreenSize.lg),
  })};
`

export const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TitleContainer>
  )
}
