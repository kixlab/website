'use client'

import React from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import Link from 'next/link'
import { Member } from '@/data/members'
import Image from 'next/image'

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
  return (
    <SpecialThanksContainer>
      <Image src={img} alt="Jura Coffee Machine" width={200} height={200} />
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
