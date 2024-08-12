'use client'

import React from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import Link from 'next/link'
import { IAlumnus } from '@/data/alumni'

const AlumniCardContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const TextRow = styled.div`
    display = flex;
    align-items: center;
    gap: 8px;
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
  font-size: 0.9rem;
  color: ${Color.gray700};
`

const Period = styled.div`
  font-size: 0.9rem;
  color: ${Color.gray700};
`
const Education = styled.div`
  font-size: 0.9rem;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  color: ${Color.gray700};
`

export const AlumniCard = ({ mem }: { mem: IAlumnus }) => {
  return (
    <AlumniCardContainer>
      <Text>
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
          <Period>
            {mem.startSeason} {mem.startYear} {mem.endSeason && mem.endYear ? ` - ${mem.endSeason} ${mem.endYear}` : ''}
          </Period>
          {mem.currentPosition && <CurrentPosition>{mem.currentPosition}</CurrentPosition>}
          {mem.affiliation && <Education>{mem.affiliation}</Education>}
        </TextRow>
      </Text>
    </AlumniCardContainer>
  )
}
