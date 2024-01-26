import styled from '@emotion/styled'

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
  ${props => props.theme.fontVariant.title_md}
  color: ${props => props.theme.color.orange900};
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
