'use client'

import React from 'react'
import styled from '@emotion/styled'

import { PUBLICATIONS, YearTypes } from '@/data/publications'
import PublicationCard from '@/components/PublicationCard'

const Main = styled.main`
  padding: 40px 96px;
`

const PageTitle = styled.h1`
  margin: 0;
  ${props => props.theme.fontVariant.title_lg}
`

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SectionTitle = styled.h2`
  margin: 0;
  ${props => props.theme.fontVariant.title_md}
  color: ${props => props.theme.color.orange900};
`

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export default function Page() {
  return (
    <Main>
      <Sections>
        <PageTitle>Publications</PageTitle>
        {YearTypes.map(
          (year, i) =>
            PUBLICATIONS.filter(({ year: y }) => y === year).length >= 1 && (
              <Section key={i}>
                <SectionTitle>{year}</SectionTitle>
                <SectionContent>
                  {PUBLICATIONS.filter(({ year: y }) => y === year).map(pub => (
                    <PublicationCard key={i} pub={pub} />
                  ))}
                </SectionContent>
              </Section>
            )
        )}
      </Sections>
    </Main>
  )
}
