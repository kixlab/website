'use client'

import React from 'react'
import { FontVariant, Color, Padding, Radius } from '@/app/theme'
import { Publication } from '@/data/publications'
import { URL } from '@/components/URL'
import { Author } from './Author'
import styled from '@emotion/styled'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & > * {
    word-wrap: break-word;
    display: block;
    max-width: 100%;
  }
`

const Title = styled.h3`
  overflow-wrap: break-word;
  ${FontVariant.body_lg}
  text-decoration: none;
  color: ${Color.gray900};

  &[href]: hover {
    text-decoration: underline;
  }
`

const Info = styled.div`
  ${FontVariant.body_md}
  color: ${Color.gray700};

  & > span {
    padding-right: 16px;
  }
`

const SubInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`

const Venue = styled.span`
  font-style: italic;
`

const URLs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Award = styled.div`
  display: inline-flex;
  align-items: center;
  ${FontVariant.body_sm}
  padding: ${Padding.y} ${Padding.x};
  background-color: #8fd036;
  border-radius: ${Radius.sm};
  color: ${Color.gray900};

  &::before {
    content: '🏆';
    margin-right: 2px;
  }
`

const Tags = styled.span`
  ${FontVariant.body_sm}
  color: ${Color.gray700};
`
const linkOrder = ['ACM DL', 'Website', 'arXiv', 'PDF', 'Slides', 'Poster', 'Video', 'Trailer']
const sortLinksByType = (links: { url: string; type: string }[]) => {
  return links.sort((a, b) => linkOrder.indexOf(a.type) - linkOrder.indexOf(b.type))
}

export const PublicationCard = ({ pub }: { pub: Publication }) => {
  return (
    <Card>
      <Title>{pub.title}</Title>
      <Info>
        <Venue>{pub.venue}</Venue>
        <Author authors={pub.authors} />
      </Info>
      <SubInfo>
        {pub.links && pub.links?.length > 0 && (
          <URLs>
            {sortLinksByType(pub.links).map(({ url, type }, i) => (
              <URL href={url} key={i} type={type} target="_blank">
                {type}
              </URL>
            ))}
          </URLs>
        )}
        {pub.award && <Award>{pub.award}</Award>}
        <Tags>{pub.topics.map(topic => '#' + topic.charAt(0).toUpperCase() + topic.slice(1)).join(' ')}</Tags>
      </SubInfo>
    </Card>
  )
}
