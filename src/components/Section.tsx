import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'

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
    <div style={{ display: 'grid', gap: '8px', marginBottom: '72px' }}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  )
}
