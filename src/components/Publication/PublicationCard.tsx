'use client'

import React from 'react'
import { FontVariant, Color } from '@/app/theme'
import type { Publication } from '@/data/publications'
import { URL } from '@/components/URL'
import Author from './Author'
import styled from '@emotion/styled'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Title = styled.a`
  ${FontVariant.body_lg}
  text-decoration: none;
  color: ${Color.gray900};

  &[href]: hover {
    text-decoration: underline;
  }
`

const Info = styled.div`
  display: flex;
  gap: 12px;
  ${FontVariant.body_md}
  color: ${Color.gray700};
`

const SubInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Venue = styled.div`
  font-style: italic;
`

const URLs = styled.div`
  display: flex;
  gap: 8px;
`

const Award = styled.div`
  ${FontVariant.body_sm}
  &::before {
    content: '🥇';
    margin-right: 2px;
  }
`

const Tags = styled.span`
  ${FontVariant.body_sm}
  color: ${Color.gray700};
`

export default function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <Card>
      <Title href={pub.paperLink}>{pub.title}</Title>
      <Info>
        <Venue>{pub.venue}</Venue>
        <Author authors={pub.authors} />
      </Info>
      <SubInfo>
        {pub.links && pub.links?.length > 0 && (
          <URLs>
            {pub.links?.map(({ url, type }, i) => (
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
