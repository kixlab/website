'use client'

import React from 'react'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'

import type { Member } from '@/data/members'

const AlumniCardContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
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

const NameWithWebsite = styled.a`
  ${FontVariant.body_lg}
  color: ${Color.gray900};

  &::before {
    content: '🔗';
    margin-right: 6px;
  }
`


const CurrentPosition = styled.div`
    font-size: 0.9rem;
    color: ${Color.gray700};
    
    &::before {
    content: '📍';
  }
`

const ThesisLink = styled.a`
  font-size: 0.9rem;
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  color: ${Color.gray700};
  text-decoration: none;
  &::before {
    content: '📖';
  }
  &:hover {
    text-decoration: underline;
  }
`

const Period = styled.div`
  font-size: 0.9rem;
  color: ${Color.gray700};
`


const AlumniCard = ({ mem }: { mem: Member }) => {
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
            {mem.thesis && (
          <ThesisLink href={mem.thesis} target="_blank" rel="noopener noreferrer" aria-label={`Read ${mem.firstName} ${mem.lastName}'s M.S. thesis`}>
            M.S. thesis
          </ThesisLink>
        )}
            <Period>{mem.period}</Period>
            {mem.alumniCurrentPosition && (
          <CurrentPosition>{mem.alumniCurrentPosition}</CurrentPosition>
        )}
          </TextRow>
        </Text>
      </AlumniCardContainer>
    )
  }
  
  export default AlumniCard