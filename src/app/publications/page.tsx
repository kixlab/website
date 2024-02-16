'use client'

import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { PUBLICATIONS, YearTypes, PublicationTypes, ResearchTopics } from '@/data/publications'
import type { PublicationType, ResearchTopic } from '@/data/publications'
import PublicationCard from '@/components/PublicationCard'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import Filter from '@/components/Filter'

const Filters = styled.div`
  display: flex;
  gap: 12px;
`

export default function Page() {
  const [researchTopic, setResearchTopic] = useState<ResearchTopic | 'All'>('All')
  const [publicationType, setPublicationType] = useState<PublicationType | 'All'>('All')
  const [publicationList, setPublicationList] = useState(PUBLICATIONS)

  const handleResearchTopicChange = (topic: string) => {
    setResearchTopic(topic as ResearchTopic)
  }

  const handlePublicationTypeChange = (type: string) => {
    setPublicationType(type as PublicationType)
  }

  useEffect(() => {
    setPublicationList(
      PUBLICATIONS.filter(
        pub =>
          (researchTopic === 'All' || pub.topics.includes(researchTopic)) &&
          (publicationType === 'All' || pub.type === publicationType)
      )
    )
  }, [researchTopic, publicationType])

  return (
    <main>
      <h1>Publications</h1>
      <Filters>
        <Filter
          filterName="Research Topic"
          optionSet={['All', ...ResearchTopics]}
          optionSelected={researchTopic}
          handleOptionChange={handleResearchTopicChange}
        />
        <Filter
          filterName="Type"
          optionSet={['All', ...PublicationTypes]}
          optionSelected={publicationType}
          handleOptionChange={handlePublicationTypeChange}
        />
      </Filters>
      <Sections>
        {YearTypes.map(
          (year, i) =>
            publicationList.filter(({ year: y }) => y === year).length >= 1 && (
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
