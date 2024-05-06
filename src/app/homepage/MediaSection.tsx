'use client'
import { FontVariant } from '@/app/theme'
import styled from '@emotion/styled'
import { SectionHeader } from '@/components/Section'
import React from 'react'
import { Section, GridContainer } from './Styles'

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

export const MediaSection = () => {
  return (
    <Section id="media-section" altBackground={true}>
      <SectionHeader title="KIXLAB on Media" subtitle="Explore KIXLAB’s media realm" />
      <MediaArea>
        {videos.map((video, i) => (
          <GridContainer columnTemplate="1fr" style={{ gap: '4px' }} key={i}>
            <iframe
              width="390"
              height="270"
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
