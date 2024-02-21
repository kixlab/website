'use client'

import PublicationCard from '@/components/PublicationCard'
import { Section, SectionContent, SectionTitle, Sections } from '@/components/Section'
import { PUBLICATIONS } from '@/data/publications'
import { uniq } from 'lodash'

export default function Page() {
  return (
    <main>
      <h1>Publications</h1>
      <Sections>
        {PUBLICATIONS.filter(pub => pub.type === 'preprint').length > 0 && (
          <Section>
            <SectionTitle>Preprints</SectionTitle>
            <SectionContent>
              {PUBLICATIONS.filter(pub => pub.type === 'preprint').map(pub => (
                <PublicationCard key={pub.title} pub={pub} />
              ))}
            </SectionContent>
          </Section>
        )}
        {uniq(PUBLICATIONS.map(p => p.year)).map((year, i) => (
          <Section key={i}>
            <SectionTitle>{year}</SectionTitle>
            <SectionContent>
              {PUBLICATIONS.filter(({ year: y }) => y === year).map(pub => (
                <PublicationCard key={pub.title} pub={pub} />
              ))}
            </SectionContent>
          </Section>
        ))}
      </Sections>
    </main>
  )
}
