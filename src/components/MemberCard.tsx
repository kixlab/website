'use client'

import React from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { IMember } from '@/data/members'
import Link from 'next/link'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 200px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  ${FontVariant.body_md}
`

const Email = styled.span`
  color: ${Color.gray700};
  ${FontVariant.body_md}
`

const NameWithWebsite = styled(Link)`
  ${FontVariant.body_lg}
  color: ${Color.gray900};
  text-align: center;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  overflow: hidden;
`

const MemberImage = styled(ImageWithFallback)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Name = styled.span`
  ${FontVariant.body_lg}
  color: ${Color.gray900};
  text-align: center;
`

const Affiliation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${Color.gray700};
  }
`

interface Props {
  member: IMember
}

export const MemberCard = ({ member }: Props) => {
  return (
    <Card>
      <ImageContainer>
        <MemberImage
          placeholder="blur"
          blurDataURL="/members/default.png"
          fallbackSrc="/members/default.png"
          width={180}
          height={180}
          src={`/members/${member.img}`}
          alt={member.firstName}
        />
      </ImageContainer>
      <Info>
        {member.site ? (
          <NameWithWebsite href={member.site}>
            {member.firstName} {member.lastName}
          </NameWithWebsite>
        ) : (
          <Name>
            {member.firstName} {member.lastName}
          </Name>
        )}
        <Email>{member.email}</Email>
        {member.affiliation && <Affiliation>{member.affiliation}</Affiliation>}
      </Info>
    </Card>
  )
}
