'use client'

import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import Link from 'next/link'
import { Member } from '@/data/members'
import Image from 'next/image'
import { CurrentMode } from './MemberCard'

const AlumniCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  border-radius: 8px;
  margin-bottom: 8px;
`

const SpecialThanksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const TextRow = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & > span,
  & > a {
    padding-right: 8px;
  }
`

const Name = styled.span`
  ${FontVariant.body_lg}
  color: ${Color.gray900};
`

const NameWithWebsite = styled(Link)`
  ${FontVariant.body_lg}
  color: ${Color.gray900};
`

const CurrentPosition = styled.div`
  ${FontVariant.body_md}
  color: ${Color.gray700};
`

const Period = styled.span`
  ${FontVariant.body_md}
  color: ${Color.gray500};
`
const Education = styled.span`
  ${FontVariant.body_md}
  color: ${Color.gray700};
`

const ThesisLink = styled(Link)`
  ${FontVariant.body_md}
  color: ${Color.gray700};
`

const Description = styled.span`
  ${FontVariant.body_md}
  color: ${Color.gray700};
  font-style: italic;
`

export const AlumniCard = ({ mem }: { mem: Member }) => {
  return (
    <AlumniCardContainer>
      <TextRow>
        {mem.site ? (
          <NameWithWebsite href={mem.site}>
            {mem.firstName} {mem.lastName}
          </NameWithWebsite>
        ) : (
          <Name>
            {mem.firstName} {mem.lastName}
          </Name>
        )}
        {mem.affiliation && <Education>{mem.affiliation}</Education>}
        {Array.isArray(mem.periods) && mem.periods.length > 0 ? (
          <Period>
            {mem.periods
              .map(
                p =>
                  `${p.startYear} ${p.startSeason}${p.endSeason && p.endYear ? ` - ${p.endYear} ${p.endSeason}` : ''}`
              )
              .join(' / ')}
          </Period>
        ) : (
          <Period>
            {mem.startSeason} {mem.startYear} {mem.endSeason && mem.endYear ? ` - ${mem.endSeason} ${mem.endYear}` : ''}
          </Period>
        )}
        {mem.phdThesis && (
          <ThesisLink
            href={{
              pathname: mem.phdThesis,
            }}
          >
            Ph.D. Thesis
          </ThesisLink>
        )}
        {mem.msThesis && (
          <ThesisLink
            href={{
              pathname: mem.msThesis,
            }}
          >
            M.S. Thesis
          </ThesisLink>
        )}
      </TextRow>
      {mem.currentPosition && (
        <TextRow>
          <CurrentPosition>Now {mem.currentPosition}</CurrentPosition>
        </TextRow>
      )}
    </AlumniCardContainer>
  )
}

const JuraImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
`

const FadingImage = styled.div<{ opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ opacity }) => opacity};
`

const juraHoverImages: Partial<Record<string, string>> = {
  'DEFAULT': '/images/jura.png',
  'HANBOK': '/images/jura-hanbok.jpg',
}

export const SpecialThanksCard = ({
  img,
  name,
  position,
  description,
}: {
  img: string
  name: string
  position: string
  description: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverImg = juraHoverImages[CurrentMode]
  const hasHover = Boolean(hoverImg)

  const toggleHover = () => {
    setIsHovered(prev => !prev)
  }

  return (
    <SpecialThanksContainer>
      <JuraImageWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleHover}
      >
        {/* Base Image */}
        <FadingImage opacity={hasHover && isHovered ? 0 : 1}>
          <Image src={img} alt="Jura Coffee Machine" width={200} height={200} priority />
        </FadingImage>
        
        {/* Hover Image */}
        {hasHover && hoverImg && (
          <FadingImage opacity={isHovered ? 1 : 0}>
            <Image src={hoverImg} alt="Jura Coffee Machine (Hover)" width={200} height={200} priority />
          </FadingImage>
        )}
      </JuraImageWrapper>
      <div>
        <TextRow>
          <Name>{name}</Name>
          <Education>{position}</Education>
        </TextRow>
        <TextRow>
          <Description>&quot;{description}&quot;</Description>
        </TextRow>
      </div>
    </SpecialThanksContainer>
  )
}
