import { FontVariant } from '@/app/theme'
import styled from '@emotion/styled'
import { SectionHeader } from '@/components/Section'
import React from 'react'
import { Section } from './Styles'
import VIDEOS from '@/data/videos'

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
  aspect-ratio: 16 / 9;
`

const VideoTitle = styled.h3`
  ${FontVariant.title_md}
  text-align: center;
`

const VideoDate = styled.h4`
  text-align: center;
  font-size: 16px;
`

export const MediaSection = () => {
  return (
    <Section id="media-section" altBackground={true}>
      <SectionHeader title="KIXLAB on Media" subtitle="Explore KIXLAB’s media realm" />
      <MediaArea>
        {VIDEOS.map(video => (
          <VideoCard key={video.url}>
            <VideoContainer>
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </VideoContainer>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDate>{video.formattedDate}</VideoDate>
          </VideoCard>
        ))}
      </MediaArea>
    </Section>
  )
}
