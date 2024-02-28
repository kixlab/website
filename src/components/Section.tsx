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

export const NewsSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1000px;
`

export const NewsLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${Color.orange900};
  position: absolute;
  left: 50%;
  top: 0;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Color.orange900};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }
`
