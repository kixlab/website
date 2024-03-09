'use client'

// import { Section, SectionTitle, SectionContent } from '@/components/Section'
import Image from 'next/image'
import { Color, FontSize, FontWeight, FontVariant, Padding, Radius } from '@/app/theme'
import styled from '@emotion/styled'
import heroImg from '../../public/images/hero-image.png'

const Section = styled.section`
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  // max-width: 1000px;
`

const ColumnSection = styled.div`
  flex-basis: 100%;
`

const HeroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 10% 0 0;
`

const HeroMessage = styled.h1`
  ${FontVariant.title_xl}
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

const HeroCaption = styled.h2`
  ${FontVariant.title_sm}
  line-height: 1.7em;
  margin-bottom: 10px;
`

const HeroParagraph = styled.p`
  ${FontVariant.body_sm}
  text-align: justify;
`

export default function Page() {
  return (
    <main>
      <Section id="hero-section">
        <ColumnSection>
          <HeroTextArea>
            <HeroMessage>
              Welcome to <span style={{ color: `${Color.orange900}`, padding: '0 7px 0 0' }}>Kixlab</span>!
            </HeroMessage>
            <br />
            <HeroCaption>
              Research of <br /> <strong>Human-Computer Interaction</strong> at Scale
            </HeroCaption>
            <HeroParagraph>
              The KAIST Interaction Lab (KIXLAB) is a human-computer interaction research group in the School of
              Computing at KAIST. Our mission is to improve ways people learn, collaborate, discuss, make decisions, and
              take action online by designing new interactive systems that leverage and support interaction at scale.
            </HeroParagraph>
          </HeroTextArea>
        </ColumnSection>
        <ColumnSection>
          <Image src={heroImg} alt="Kixlab group picture" layout="responsive" priority />
        </ColumnSection>
      </Section>
      <Section id="news-section"></Section>
      <Section id="research-section"></Section>
      <Section id="media-section"></Section>
    </main>
  )
}
