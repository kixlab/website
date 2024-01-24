'use client'

import React from 'react'
import styled from '@emotion/styled'

import type { Publication } from '@/data/publications'
import { URL } from '@/components/URL'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Title = styled.div`
  font-size: ${props => props.theme.fontSize.body_lg};
  font-weight: ${props => props.theme.fontWeight.body_lg};
`

const Info = styled.div`
  display: flex;
  gap: 12px;
  font-size: ${props => props.theme.fontSize.body_md};
  color: ${props => props.theme.color.gray700};
`

const Venue = styled.div`
  font-style: italic;
`

const Author = styled.div``

const URLs = styled.div`
  display: flex;
  gap: 8px;
`

export default function PublicationCard({ key, pub }: { key: number; pub: Publication }) {
  return (
    <Card key={key}>
      <Title>{pub.title}</Title>
      <Info>
        <Venue>{pub.venue}</Venue>
        <Author>
          {pub.authors.map(({ name, lastName }, i) => (
            <span key={i}>
              {name} {lastName}
            </span>
          ))}
        </Author>
      </Info>

      <URLs>
        {pub.links?.map(({ url, type }, i) => (
          <URL href={url} key={i} type={type} target="_blank">
            {type}
          </URL>
        ))}
      </URLs>
    </Card>
  )
}
