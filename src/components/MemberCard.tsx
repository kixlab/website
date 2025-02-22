'use client'

import React from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { Member } from '@/data/members'
import Link from 'next/link'

const Card = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${FontVariant.body_md}
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
`

const Affiliation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${Color.gray700};
`

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`

const EmailButton = styled.a`
  content: url('/images/email.svg');
  width: 30px;
  height: 30px;
  padding: 7px;
  cursor: pointer;

  color: ${Color.white};
  background-color: ${Color.gray700};
  border-radius: 50%;
`

const WebsiteButton = styled.a`
  content: url('/images/website.svg');
  width: 30px;
  height: 30px;
  padding: 6px;
  cursor: pointer;

  color: ${Color.white};
  background-color: ${Color.gray700};
  border-radius: 50%;
`

const ThesisButton = styled.a`
  content: url('/images/thesis.svg');
  width: 30px;
  height: 30px;
  padding: 7px;
  cursor: pointer;

  color: ${Color.white};
  background-color: ${Color.gray700};
  border-radius: 50%;
`

interface Props {
  member: Member
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
        <Name>
          {member.firstName} {member.lastName}
        </Name>
        <Affiliation>{member.affiliation || member.kixlabPosition}</Affiliation>
        <Buttons>
          {member.email && <EmailButton href={`mailto:${member.email}`} />}
          {member.site && <WebsiteButton href={member.site} target="_blank" rel="noopener noreferrer" />}
          {member.msThesis && <ThesisButton href={member.msThesis} />}
        </Buttons>
      </Info>
    </Card>
  )
}
