'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Color, FontVariant } from '@/app/theme'
import styled from '@emotion/styled'
import Markdown from 'react-markdown'

import { POSTS } from '@/data/posts'
import { MEMBERS } from '@/data/members'
import { ResearchTopics } from '@/data/publications'
import React from 'react'

const Section = styled.section<{ altBackground?: boolean }>`
  background-color: ${(props) => (props.altBackground ? '#F6F6F6' : 'white')};
  margin: 0 auto;
  width: 100%;
  padding: 48px 96px;
`
const GridContainer = styled.div<{ columnTemplate: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columnTemplate || '1fr 1fr'}; // default is two columns
`
const FlexContainer = styled.div<{ direction?: 'row' | 'column'; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '0px'}
  align-items: center;
  max-width: 100vw;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Text = styled.div`
  ${FontVariant.body_md}
  color: ${Color.gray700}

  p {
    margin: 0;
  }
`

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
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
  return (
    <div style={{ display: 'grid', gap: '8px', marginBottom: '72px' }}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  )
}

const HeroSection = () => {
  const RespFontSize = {
    title_xl: '2.25rem',
    title_lg: '1.75rem',
    title_sm: '1rem',
  } as const

  const HeroContainer = styled.div`
    display: flex;
  `

  const HeroTextArea = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 90px 96px;
  `

  const HeroTitle = styled.h1`
    font-size: clamp(2rem, 1vw + 2rem, 3.5rem);
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 24px;
  `
  const HeroSubtitle = styled.h2`
    font-size: clamp(1.25rem, 0.3125 + 4.17vw, 2.5rem);
    font-weight: 300;
    margin-bottom: 32px;
  `
  const HeroMessage = styled.p`
    font-size: clamp(1rem, 0.65vw + 0.5rem, 2rem);
    color: ${Color.gray700};
    text-align: justify;
    min-width: 300px;
    max-width: 100%;
  `

  const HeroImageContainer = styled.div`
    flex-basis: 50%;
    display: grid;
    align-content: center;
    position: relative;
    z-index: 0;
  `

  return (
    <Section id="hero-section" style={{ padding: '0' }}>
      {/* padding: 0 is to allow image to stretch to the right side of the webpage*/}
      <HeroContainer>
        <HeroTextArea id="hero-text-area">
          <HeroTitle>
            Welcome to <span style={{ color: `${Color.orange900}`, paddingRight: '7px' }}>Kixlab</span>!
          </HeroTitle>
          <HeroSubtitle>
            Research of <br /> <strong style={{ fontWeight: '700' }}>Human-Computer Interaction</strong> at Scale
          </HeroSubtitle>
          <HeroMessage>
            The KAIST Interaction Lab (KIXLAB) is a human-computer interaction research group in the School of Computing
            at KAIST. Our mission is to improve ways people learn, collaborate, discuss, make decisions, and take action
            online by designing new interactive systems that leverage and support interaction at scale.
          </HeroMessage>
        </HeroTextArea>
        <HeroImageContainer id="hero-image-area">
          <Image
            id="hero-image"
            src={'/images/hero-image.png'}
            alt="Kixlab group picture"
            fill={true}
            priority
            style={{ objectFit: 'contain' }}
          />
        </HeroImageContainer>
      </HeroContainer>
    </Section>
  )
}

const NewsSection = () => {
  const NewsItemsArea = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 72px;
  `

  const NewsItem = styled.div`
    flex: 1;
    min-width: 249px;
  `
  const NewsItemTitle = styled.h3`
    ${FontVariant.title_md}
  `
  const NewsItemLabelsArea = styled.div`
    display: grid;
    gap: 48px;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  `
  const NewsItemLabel = styled.div`
    ${FontVariant.body_md}
    width: fit-content;
    background-color: #7d7d7d;
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    text-transform: capitalize;
  `
  const NewsItemTextArea = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `

  return (
    <Section id="news-section" altBackground={true}>
      <SectionHeader title="Latest News" subtitle="Check the latest news from KIXLAB" />
      <FlexContainer direction="column" style={{ gap: '72px', justifyContent: 'space-between' }}>
        <NewsItemsArea>
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4)
            .map((post, i) => (
              <NewsItem key={i}>
                <NewsItemLabelsArea style={{ marginBottom: '10px' }}>
                  {post.categories.map((category, j) => (
                    <NewsItemLabel key={j}>{category}</NewsItemLabel>
                  ))}
                </NewsItemLabelsArea>
                <NewsItemTextArea>
                  <NewsItemTitle>{post.title}</NewsItemTitle>
                  <Text>{post.date.toDateString()}</Text>
                  <Text>
                    <Markdown>{post.summary}</Markdown>
                  </Text>
                </NewsItemTextArea>
              </NewsItem>
            ))}
        </NewsItemsArea>
        <Link
          href="/news"
          style={{
            border: `1px solid ${Color.gray500}`,
            padding: '8px 20px',
            width: 'fit-content',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          See More →
        </Link>
      </FlexContainer>
    </Section>
  )
}
const ResearchThemesSection = () => {
  const ResearchTopicsArea = styled.div`
    display: grid;
    gap: 48px;
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  `

  const ResearchTopicItem = styled.div`
    padding: 26px;
    border: thin solid;
    border-radius: 15px;
    &:hover {
      box-shadow: 3px 3px 10px 0px ${Color.orange300};
    }
    transition: box-shadow 0.3s ease-in-out;
  `

  const ResearchTopicItemTitle = styled.h3`
    ${FontVariant.title_md}
  `

  const ResearchTopicMembersArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 8px;
  `

  const ResearchTopicsMemberAvatar = styled(Image)`
    border-radius: 50%;
    max-width: 36px;
    max-height: 36px;
    width: auto;
    height: auto;
  `
  let filteredMembers = []
  return (
    <Section id="research-section">
      {/* <SectionTitle>Research Themes</SectionTitle> */}
      <SectionHeader title="Research Themes" subtitle="Discover the research happening at KIXLAB" />
      <ResearchTopicsArea>
        {ResearchTopics.map((topic, i) => (
          <ResearchTopicItem key={i}>
            <ResearchTopicItemTitle style={{ textTransform: 'capitalize' }}>
              🤖<br></br>
              {topic}
            </ResearchTopicItemTitle>
            <Text style={{ color: 'gray', paddingBottom: '12px' }}>One or two line description of this project</Text>
            <ResearchTopicMembersArea>
              {
                (filteredMembers = MEMBERS.filter(
                  (member) => Array.isArray(member.researchTopics) && member.researchTopics.includes(topic)
                )
                  .slice(0, 6)
                  .map((member, j) => (
                    <ResearchTopicsMemberAvatar
                      width={36}
                      height={36}
                      src={member.imgPath}
                      alt={member.fullName}
                      key={j}
                    ></ResearchTopicsMemberAvatar>
                  )))
              }

              {
                /* Add +{number} in case of overfill */
                filteredMembers.slice(6).length > 0 && (
                  <span style={{ width: '36px', textAlign: 'center' }}>+{filteredMembers.slice(6).length}</span>
                )
              }
            </ResearchTopicMembersArea>
          </ResearchTopicItem>
        ))}
      </ResearchTopicsArea>
    </Section>
  )
}

const MediaSection = () => {
  const MediaArea = styled.div`
    display: flex;
    flex-direction: row;
    flex: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 72px;
  `
  const VideoTitle = styled.h3`
    ${FontVariant.title_md}
    text-align: center;
  `
  const VideoDate = styled.h4`
    text-align: center;
    font-size: 16px;
  `
  const videos = [
    {
      url: 'https://www.youtube.com/embed/j0v1Cr74kN8?si=tp_blkpKqN4FP9te',
      title: 'What is Interaction-centric AI?',
      date: '2022.10.28',
    },
    {
      url: 'https://www.youtube.com/embed/pkhTuiYvvw4?si=hUee7IqJ-m95L1k2',
      title: 'KIXLAB Introduction',
      date: '2021.02.12',
    },
    { url: 'https://www.youtube.com/embed/GgvkmXXPFPI?si=YWMLcLMhac5kRYzJ', title: 'Open KAIST', date: '2022.01.10' },
  ]

  return (
    <Section id="media-section" altBackground={true}>
      <SectionHeader title="KIXLAB on Media" subtitle="Explore KIXLAB’s media realm" />
      <MediaArea>
        {videos.map((video, i) => (
          <GridContainer columnTemplate="1fr" style={{ gap: '4px' }} key={i}>
            <iframe
              width="473"
              height="291"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDate>{video.date}</VideoDate>
          </GridContainer>
        ))}
      </MediaArea>
    </Section>
  )
}

export default function Page() {
  return (
    <main style={{ padding: '0px', gap: '0px', marginBottom: '16px', alignItems: 'center' }}>
      <HeroSection></HeroSection>
      <NewsSection></NewsSection>
      <ResearchThemesSection></ResearchThemesSection>
      <MediaSection></MediaSection>
    </main>
  )
}
