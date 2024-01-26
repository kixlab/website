'use client'

// import React from 'react'

import { PUBLICATIONS, YearTypes } from '@/data/publications'
import PublicationCard from '@/components/PublicationCard'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'

export default function Page() {
  return (
    <main>
      <h1>Publications</h1>
      <Sections>
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
    </main>
  )
}
