import styled from '@emotion/styled'
import { FontVariant, Color, ScreenSize, linearlyScaleSize } from '@/app/theme'

export const Sections = styled.div`
  // TODO: can we combine Sections, Section, SectionTitle, and SectionContent into one component?
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`

export const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  ${FontVariant.title_md}
  color: ${Color.orange900};
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
