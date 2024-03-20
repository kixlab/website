'use client'

// import { Section, SectionTitle, SectionContent } from '@/components/Section'
import Image from 'next/image'
import { Color, FontSize, FontWeight, FontVariant, Padding, Radius } from '@/app/theme'
import styled from '@emotion/styled'
import heroImg from '../../public/images/hero-image.png'
import ExampleImg from '../../public/images/example.jpeg'
import { css, jsx } from '@emotion/react'
import Post, { POSTS } from '@/data/posts'
import NewsCard from '@/components/NewsCard'

import { ResearchTopics } from '@/data/publications'

const Section = styled.section<{ altBackground?: boolean }>`
  background-color: ${props => (props.altBackground ? '#F6F6F6' : 'white')};
  // gap: 0;
  margin: 0 auto;
  width: 100%;
  // padding-left: 96px;
  // padding-right: 96px;
  padding: 96px;
  // max-width: 1000px;
`

const Grid = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr 1fr 1fr;
`

const GridItem = styled.div`
  padding: 26px;
  border: thin solid;
  border-radius: 15px;
`

const Flex = styled.div`
  display: flex;
  // height: 100%;
  align-items: center;
  max-width: 100vw;
  justify-content: space-between;
`
const FlexItem = styled.div`
  // flex-basis: 100%;
  flex: 1;
  // max-width: 100vw;
`

const CardFlexItem = styled(FlexItem)`
  flex: none;
`

const HeroTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // padding: 10% 10% 0 0;
`

const HeroMessage = styled.h1`
  ${FontVariant.title_lg}
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

const SectionTitle = styled.h2`
  ${FontVariant.title_md}
  text-align: center;
  // margin-top: 48px;
  margin-bottom: 48px;

  &:after {
    content: '';
    // position: absolute;
    left: 0;
    bottom: -5px;
    width: 50px;
    height: 2px;
    background-color: black;
  }
`

const CardTitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
`

const CardText = styled.p`
  font-size: 8px;
`
const CardAvatar = styled(Image)`
  border-radius: 50%;
  max-width: 36px;
  max-height: 36px;
  width: auto;
  height: auto;
`

export default function Page() {
  return (
    <main style={{ padding: '0px', gap: '0px', maxWidth: '100vw' }}>
      <Section id="hero-section" style={{ padding: '0' }}>
        <Flex>
          <FlexItem>
            <HeroTextArea id="hero-text-section" style={{ padding: '0 96px 0 96px' }}>
              <HeroMessage>
                Welcome to <span style={{ color: `${Color.orange900}`, padding: '0 7px 0 0' }}>Kixlab</span>!
              </HeroMessage>
              <br />
              <HeroCaption>
                Research of <br /> <strong>Human-Computer Interaction</strong> at Scale
              </HeroCaption>
              <HeroParagraph>
                The KAIST Interaction Lab (KIXLAB) is a human-computer interaction research group in the School of
                Computing at KAIST. Our mission is to improve ways people learn, collaborate, discuss, make decisions,
                and take action online by designing new interactive systems that leverage and support interaction at
                scale.
              </HeroParagraph>
            </HeroTextArea>
          </FlexItem>
          <FlexItem style={{ flexShrink: '2' }}>
            <Image src={heroImg} alt="Kixlab group picture" layout="responsive" priority />
          </FlexItem>
        </Flex>
      </Section>

      <Section id="news-section" altBackground={true} style={{ paddingBottom: '48px' }}>
        <SectionTitle>Latest News</SectionTitle>
        <Flex style={{ alignItems: 'stretch', columnGap: '72px' }}>
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4)
            .map(post => (
              <FlexItem>
                <h3 style={{ fontSize: `12px`, fontWeight: 'bold' }}>{post.title}</h3>
                <p style={{ fontSize: '8px', padding: '4px 0px' }}>{post.date.toDateString()}</p>
                <p style={{ fontSize: '8px' }}>{post.summary}</p>
              </FlexItem>
            ))}
        </Flex>
      </Section>

      <Section id="research-section">
        <SectionTitle>Research Themes</SectionTitle>
        <Grid>
          {ResearchTopics.map(topic => (
            <GridItem>
              <CardTitle style={{ fontSize: '20px' }}>
                🤖<br></br>
                {topic}
              </CardTitle>
              <CardText style={{ fontSize: '10px', color: 'gray', paddingBottom: '12px' }}>
                One or two line description of this project
              </CardText>
              <Flex style={{ flexDirection: 'row', justifyContent: 'start' }}>
                <CardFlexItem>
                  {/* Need a way to map keywords to members */}
                  <CardAvatar src={ExampleImg} alt="Picture of X" style={{ borderRadius: '50%' }}></CardAvatar>
                </CardFlexItem>
                <CardFlexItem>
                  {/* Need a way to map keywords to members */}
                  <CardAvatar src={ExampleImg} alt="Picture of X" style={{ borderRadius: '50%' }}></CardAvatar>
                </CardFlexItem>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Section>

      <Section id="media-section" altBackground={true}>
        <SectionTitle>KIXLAB on Media</SectionTitle>
      </Section>
    </main>
  )
}
