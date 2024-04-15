'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
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
  const router = useRouter()
  const params = useSearchParams()
  const researchTopic = (params.get('researchTopic') as ResearchTopicType | null) ?? 'All'
  const publicationType = (params.get('publicationType') as PublicationType | null) ?? 'All'

  const [publicationList, setPublicationList] = useState(PUBLICATIONS)

  const handleResearchTopicChange = (topic: string) => {
    router.push(`/publications/?researchTopic=${topic}&publicationType=${publicationType}`)
  }

  const handlePublicationTypeChange = (type: string) => {
    router.push(`/publications/?researchTopic=${researchTopic}&publicationType=${type}`)
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
          filterName="Publication Type"
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
        {uniq(PUBLICATIONS.map((p) => p.year))
          .sort()
          .reverse()
          .map((year, i) => (
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
