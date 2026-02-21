'use client'

import React, { useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { Member } from '@/data/members'

enum ProfileMode {
  DEFAULT = 'DEFAULT',
  CHRISTMAS = 'CHRISTMAS',
  CHILDREN = 'CHILDREN',
  APRIL_FOOLS = 'APRIL-FOOLS',
  HANBOK = 'HANBOK',
}

export const CurrentMode = ProfileMode.DEFAULT

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
  mode?: ProfileMode
}

export const MemberCard = ({ member, mode = ProfileMode.DEFAULT }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const originalSrc = member.img ? `/members/${member.img}` : '/members/default.png'
  const hoverSrc = useMemo(() => {
    if (mode === ProfileMode.DEFAULT) return undefined
    return member.hoverImg?.[mode]
  }, [member.hoverImg, mode])

  const hasHover = Boolean(hoverSrc)

  const handleEnter = () => {
    if (!hasHover) return
    setIsHovered(true)
  }
  const handleLeave = () => {
    if (!hasHover) return
    setIsHovered(false)
  }
  const handleClick = () => {
    if (!hasHover) return
    setIsHovered(prev => !prev)
  }

  return (
    <Card>
      <ImageContainer onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick}>
        <MemberImage
          placeholder="blur"
          blurDataURL="/members/default.png"
          fallbackSrc="/members/default.png"
          width={180}
          height={180}
          src={originalSrc}
          alt={member.firstName}
        />
        {hasHover && (
          <MemberImage
            key={hoverSrc}
            placeholder="blur"
            blurDataURL="/members/default.png"
            fallbackSrc="/members/default.png"
            width={180}
            height={180}
            src={`/${hoverSrc}`}
            alt={member.firstName}
            style={{
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        )}
      </ImageContainer>
      <Info>
        <Name>
          {member.firstName} {member.lastName}
        </Name>
        <Affiliation>
          {member.currentPosition ||
            ((member.kixlabPosition === 'Visiting Researcher' || member.kixlabPosition === 'Undergrad Intern') &&
              member.affiliation)}
        </Affiliation>
        <Buttons>
          {member.email && <EmailButton href={`mailto:${member.email}`} />}
          {member.site && <WebsiteButton href={member.site} target="_blank" rel="noopener noreferrer" />}
          {member.msThesis && <ThesisButton href={member.msThesis} />}
        </Buttons>
      </Info>
    </Card>
  )
}
