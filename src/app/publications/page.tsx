'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styled from '@emotion/styled'
import { uniq } from 'lodash'
import { PUBLICATIONS, PublicationTypes, ResearchTopics } from '@/data/publications'
import type { PublicationType, ResearchTopicType, Publication } from '@/data/publications'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import PublicationCard from '@/components/Publication/PublicationCard'
import Filter from '@/components/Filter'
import { Sidebar } from '@/components/SideBar'
import Divider from '@/components/Divider'
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

export default function Page() {
  const router = useRouter()
  const params = useSearchParams()
  const researchTopic = (params.get('researchTopic') as ResearchTopicType | null) ?? 'All'
  const publicationType = (params.get('publicationType') as PublicationType | null) ?? 'All'
  const [publicationList, setPublicationList] = useState(PUBLICATIONS)
  const [sidebarList, setSidebarList] = useState<string[]>([])
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const handleResearchTopicChange = (topic: string) => {
    router.push(`/publications/?researchTopic=${topic}&publicationType=${publicationType}`)
  }

  const handlePublicationTypeChange = (type: string) => {
    router.push(`/publications/?researchTopic=${researchTopic}&publicationType=${type}`)
  }

  useEffect(() => {
    const filteredList = PUBLICATIONS.filter(
      pub =>
        (researchTopic === 'All' || pub.topics.includes(researchTopic)) &&
        (publicationType === 'All' || pub.type === publicationType)
    )

    setPublicationList(filteredList)
  }, [researchTopic, publicationType])

  useEffect(() => {
    handleSidebarList(publicationList)
  }, [publicationList])

  const handleSidebarList = (list: Publication[]) => {
    const sections = []
    if (list.filter(pub => pub.type === 'preprint').length > 0) {
      sections.push('preprints')
    }
    const years = uniq(list.map(p => p.year))
      .sort()
      .reverse()
    setSidebarList([...sections, ...years.map(year => year.toString())])
  }

  const sortedYears = useMemo(() => {
    return uniq(publicationList.map(p => p.year))
      .sort()
      .reverse()
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
          {publicationList.filter(pub => pub.type === 'preprint').length > 0 && (
            <Section
              id="preprints"
              ref={el => {
                sectionRefs.current['preprints'] = el
              }}
            >
              <SectionTitle>Preprints</SectionTitle>
              <SectionContent>
                {publicationList
                  .filter(pub => pub.type === 'preprint')
                  .map(pub => (
                    <PublicationCard key={pub.title} pub={pub} />
                  ))}
              </SectionContent>
            </Section>
          )}
          {sortedYears.map((year, i) => (
            <React.Fragment key={year}>
              {i === 0 && publicationList.filter(pub => pub.type === 'preprint').length === 0 ? null : (
                <Divider key={`divider-${i}`} />
              )}
              <Section
                id={`${year}`}
                ref={el => {
                  sectionRefs.current[`${year}`] = el
                }}
                key={year}
              >
                <SectionTitle>{year}</SectionTitle>
                <SectionContent>
                  {publicationList
                    .filter(({ year: y }) => y === year)
                    .map(pub => (
                      <PublicationCard key={pub.title} pub={pub} />
                    ))}
                </SectionContent>
              </Section>
            </React.Fragment>
          ))}
        </Sections>
      </main>
      <SideContainer>
        <Sidebar sidebarList={sidebarList} sectionRefs={sectionRefs} />
      </SideContainer>
    </Container>
  )
}
