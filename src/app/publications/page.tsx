'use client'

import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styled from '@emotion/styled'
import { PUBLICATIONS_BY_YEAR, PREPRINTS, PublicationTypes, ResearchTopics, Publication } from '@/data/publications'
import type { PublicationType, ResearchTopicType } from '@/data/publications'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import { PublicationCard } from '@/components/Publication/PublicationCard'
import { Filter } from '@/components/Filter'
import { Sidebar } from '@/components/SideBar'
import { Divider } from '@/components/Divider'
import _ from 'lodash'
import { ScreenSize, linearlyScaleSize } from '@/app/theme'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px
    ${linearlyScaleSize({
      minSizePx: 24,
      maxSizePx: 96,
      minScreenSizePx: parseInt(ScreenSize.md),
      maxScreenSizePx: parseInt(ScreenSize.lg),
    })};
  padding-right: ${linearlyScaleSize({
    minSizePx: 24,
    maxSizePx: 8,
    minScreenSizePx: parseInt(ScreenSize.sm),
    maxScreenSizePx: parseInt(ScreenSize.md),
  })};
  width: 100%;
  gap: 16px;
  @media (min-width: ${ScreenSize.max}) {
    width: ${ScreenSize.max};
    margin: 0 auto;
  }

  & > main {
    // make the main content (publications list) take up 85% and the Sidebar component 15%
    width: 85%;
  }
`

const SideContainer = styled.div`
  padding-top: 96px;
  padding-left: 30px;
  padding-right: 30px;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${ScreenSize.sm}) {
    display: none;
  }
`

const Filters = styled.div`
  display: flex;
  gap: 12px;
`

const preprintKey = 'Preprint'
const PUBLICATIONS_BY_SECTION = {
  [preprintKey]: PREPRINTS,
  ...PUBLICATIONS_BY_YEAR,
}
const sortSections = (sections: string[]) => {
  return sections.sort((a, b) => {
    if (a === preprintKey) return -1
    if (b === preprintKey) return 1
    return b.localeCompare(a)
  })
}

export default function Page() {
  const router = useRouter()
  const params = useSearchParams()
  const researchTopic = (params.get('researchTopic') as ResearchTopicType | null) ?? 'All'
  const publicationType = (params.get('publicationType') as PublicationType | null) ?? 'All'
  const [publicationList, setPublicationList] = useState<Record<string, Publication[]>>(PUBLICATIONS_BY_SECTION)
  const [sectionList, setSectionList] = useState<string[]>(sortSections(Object.keys(PUBLICATIONS_BY_SECTION)))
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const handleResearchTopicChange = (topic: string) => {
    router.push(`/publications/?researchTopic=${topic}&publicationType=${publicationType}`)
  }
  const handlePublicationTypeChange = (type: string) => {
    router.push(`/publications/?researchTopic=${researchTopic}&publicationType=${type}`)
  }
  useEffect(() => {
    const filteredList: Record<string, Publication[]> = Object.entries(PUBLICATIONS_BY_SECTION).reduce(
      (acc, [year, publications]) => {
        const filteredPublications = publications.filter(
          pub =>
            (researchTopic === 'All' || pub.topics.includes(researchTopic)) &&
            (publicationType === 'All' || pub.type === publicationType)
        )
        if (filteredPublications.length > 0) {
          acc[year] = filteredPublications
        }
        return acc
      },
      {} as Record<string, Publication[]>
    )

    setPublicationList(filteredList)
  }, [researchTopic, publicationType])
  useEffect(() => {
    setSectionList(sortSections(Object.keys(publicationList)))
  }, [publicationList])

  return (
    <Container>
      <main style={{ padding: '0px', margin: '0px' }}>
        <h1>Publications</h1>
        <Filters>
          <Filter
            filterName="Research Topic"
            optionSet={['All', ...Object.keys(ResearchTopics)]}
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
          {sectionList.map(sectionName => {
            return (
              publicationList[sectionName] &&
              publicationList[sectionName].length > 0 && (
                <React.Fragment key={sectionName}>
                  <Section
                    key={sectionName}
                    id={_.startCase(sectionName)}
                    ref={el => {
                      sectionRefs.current[sectionName] = el
                    }}
                  >
                    <SectionTitle>{sectionName}</SectionTitle>
                    <SectionContent>
                      {publicationList[sectionName].map(pub => (
                        <PublicationCard key={pub.title} pub={pub} />
                      ))}
                    </SectionContent>
                  </Section>
                  <Divider />
                </React.Fragment>
              )
            )
          })}
        </Sections>
      </main>
      <SideContainer>
        <Sidebar sidebarList={sectionList} sectionRefs={sectionRefs} />
      </SideContainer>
    </Container>
  )
}
