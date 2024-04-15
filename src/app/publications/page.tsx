'use client'

import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { PUBLICATIONS, PublicationTypes, ResearchTopics } from '@/data/publications'
import type { PublicationType, ResearchTopicType } from '@/data/publications'
import PublicationCard from '@/components/Publication/PublicationCard'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import Filter from '@/components/Filter'
import { uniq } from 'lodash'
import Divider from '@/components/Divider'

const Filters = styled.div`
  display: flex;
  gap: 12px;
`

export default function Page() {
  const [researchTopic, setResearchTopic] = useState<ResearchTopicType | 'All'>('All')
  const [publicationType, setPublicationType] = useState<PublicationType | 'All'>('All')
  const [publicationList, setPublicationList] = useState(PUBLICATIONS)

  const handleResearchTopicChange = (topic: string) => {
    setResearchTopic(topic as ResearchTopicType)
  }

  const handlePublicationTypeChange = (type: string) => {
    setPublicationType(type as PublicationType)
  }

  useEffect(() => {
    setPublicationList(
      PUBLICATIONS.filter(
        (pub) =>
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
        {PUBLICATIONS.filter((pub) => pub.type === 'preprint').length > 0 && (
          <Section>
            <SectionTitle>Preprints</SectionTitle>
            <SectionContent>
              {publicationList
                .filter((pub) => pub.type === 'preprint')
                .map((pub) => (
                  <PublicationCard key={pub.title} pub={pub} />
                ))}
            </SectionContent>
          </Section>
        )}
        {uniq(PUBLICATIONS.map((p) => p.year)).map((year, i) => (
          <>
            <Divider />
            <Section key={i}>
              <SectionTitle>{year}</SectionTitle>
              <SectionContent>
                {publicationList
                  .filter(({ year: y }) => y === year)
                  .map((pub) => (
                    <>
                      <PublicationCard key={pub.title} pub={pub} />
                    </>
                  ))}
              </SectionContent>
            </Section>
          </>
        ))}
      </Sections>
    </main>
  )
}
