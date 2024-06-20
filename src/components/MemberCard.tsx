'use client'

import React from 'react'
import styled from '@emotion/styled'

import { FontVariant, Color } from '@/app/theme'
import { ImageWithFallback } from '@/components/ImageWithFallback'

import type { IMember } from '@/data/members'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  width: fit-content;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;

  ${FontVariant.body_md}

  width: fit-content;
`

const NameWithWebsite = styled.a`
  ${FontVariant.body_lg}
  color: ${Color.gray900};

  &::before {
    content: '🔗';
    margin-right: 6px;
  }
`

const MemberImage = styled(ImageWithFallback)`
  border-radius: 50%;
`

const Name = styled.span`
  ${FontVariant.body_lg}
  color: ${Color.gray900};
`

const ThesisLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${Color.gray900};
  text-decoration: none;
  &::before {
    content: '📖';
  }
  &:hover {
    text-decoration: underline;
  }
`

const Affiliation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${Color.gray900};

  &::before {
    content: '🏫';
  }
`

export default function MemberCard({ mem }: { mem: IMember }) {
  return (
    <Card>
      <MemberImage
        placeholder="blur"
        blurDataURL="/members/default.png"
        fallbackSrc="/members/default.png"
        width={180}
        height={180}
        src={`/members/${mem.img}`}
        alt={mem.firstName}
      />
      <Info>
        {mem.site ? (
          <NameWithWebsite href={mem.site}>
            {mem.firstName} {mem.lastName}
          </NameWithWebsite>
        ) : (
          <Name>
            {mem.firstName} {mem.lastName}
          </Name>
        )}
        <span>{mem.email}</span>
        {mem.thesis && (
          <ThesisLink
            href={mem.thesis}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read ${mem.firstName} ${mem.lastName}'s M.S. thesis`}
          >
            M.S. thesis
          </ThesisLink>
        )}
        {mem.affiliation && <Affiliation>{mem.affiliation}</Affiliation>}
      </Info>
    </Card>
  )
}
