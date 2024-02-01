'use client'

import React from 'react'
import styled from '@emotion/styled'

import { FontVariant, Color } from '@/app/theme'
import { ImageWithFallback } from '@/components/ImageWithFallback'

import type { Member } from '@/data/members'

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

export default function MemberCard({ mem }: { mem: Member }) {
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
      </Info>
    </Card>
  )
}
