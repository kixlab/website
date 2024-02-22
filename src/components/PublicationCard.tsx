'use client'

import React from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import type { Publication } from '@/data/publications'
import { URL } from '@/components/URL'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Title = styled.div`
  ${FontVariant.body_lg}
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

const Author = styled.div``

const URLs = styled.div`
  display: flex;
  gap: 8px;
`

const Award = styled.div`
  ${FontVariant.body_sm}
  color: ${Color.orange900};
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
      <Title>{pub.title}</Title>
      <Info>
        <Venue>{pub.venue}</Venue>
        <Author>{pub.authors.map(({ name, lastName }, i) => name + ' ' + lastName).join(', ')}</Author>
      </Info>
      <SubInfo>
        {pub.links && (
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
