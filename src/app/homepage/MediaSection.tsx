'use client'
import { FontSize, FontWeight } from '@/app/theme'
import styled from '@emotion/styled'
import React from 'react'
import { Section, SectionHeader, FullWidthContainer } from './Styles'
import { VIDEOS } from '@/data/videos'
import { LinkButton } from '@/components/LinkButton'
import { YouTubeEmbed } from '@next/third-parties/google'

const MediaArea = styled.div`
  display: flex;
  flex-direction: row;
  flex: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`

const VideoCard = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: normal;
`
const VideoContainer = styled.div`
  max-height: 300px;
  min-width: 300px;
  aspect-ratio: 16 / 9;
  margin-bottom: 8px;
`

const VideoTitle = styled.h3`
  font-size: ${FontSize.title_sm};
  font-weight: ${FontWeight.title_md};
  text-align: center;
`

const VideoDate = styled.h4`
  font-size: ${FontSize.body_sm};
  font-weight: ${FontWeight.body_sm};
  text-align: center;
`

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const MediaSection = () => {
  return (
    <FullWidthContainer>
      <Section id="media-section">
        <SectionHeader title="KIXLAB on Media" subtitle="Explore KIXLAB’s media realm" />
        <MediaArea>
          {VIDEOS.map(video => (
            <VideoCard key={video.url}>
              <VideoContainer>
                <YouTubeEmbed videoid={video.id}></YouTubeEmbed>
              </VideoContainer>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDate>{formatDate(video.date)}</VideoDate>
            </VideoCard>
          ))}
        </MediaArea>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            justifyContent: 'center',
          }}
        >
          <LinkButton href="https://www.youtube.com/@kixlabkaist5732" image="/images/youtube.svg" text="KIXLAB KAIST" />
          <LinkButton href="https://x.com/kixlab_kaist" image="/images/twitter-x.svg" text="@kixlab_kaist" />
        </div>
      </Section>
    </FullWidthContainer>
  )
}
