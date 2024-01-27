import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SectionTitle = styled.h2`
  margin: 0;
  ${FontVariant.title_md}
  color: ${Color.orange900};
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
