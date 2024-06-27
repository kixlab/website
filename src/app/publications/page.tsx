'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styled from '@emotion/styled'
import { uniq } from 'lodash'
import { PUBLICATIONS, PublicationTypes, ResearchTopics } from '@/data/publications'
import type { PublicationType, ResearchTopicType } from '@/data/publications'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import PublicationCard from '@/components/Publication/PublicationCard'
import Filter from '@/components/Filter'
import Sidebar from '@/components/SideBar'
import Divider from '@/components/Divider'
import { ScreenSize, linearlyScaleSize } from '@/app/theme'

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

  gap: 16px;
  @media (min-width: ${ScreenSize.max}) {
    width: ${ScreenSize.max};
    margin: 0 auto;
  }

  & > main {
    width: 85%;
  }
`

const SideContainer = styled.div`
  padding-top: 96px;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const ignoreObserver = useRef(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const handleResearchTopicChange = (topic: string) => {
    router.push(`/publications/?researchTopic=${topic}&publicationType=${publicationType}`)
  }

  const handlePublicationTypeChange = (type: string) => {
    router.push(`/publications/?researchTopic=${researchTopic}&publicationType=${type}`)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (ignoreObserver.current) return

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = Object.values(sectionRefs.current)
    sections.forEach(section => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId)
    ignoreObserver.current = true

    setTimeout(() => {
      ignoreObserver.current = false
    }, 2000)
  }

  return (
    <CenteredContainer>
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
            {uniq(publicationList.map(p => p.year))
              .sort()
              .reverse()
              .map((year, i) => (
                <>
                  <Divider key={`divider-${i}`} />
                  <Section
                    id={`year-${year}`}
                    ref={el => {
                      sectionRefs.current[`year-${year}`] = el
                    }}
                    key={i}
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
                </>
              ))}
          </Sections>
        </main>
        <SideContainer>
          <Sidebar
            activeSection={activeSection}
            handleLinkClick={handleLinkClick}
            publicationList={publicationList.map(pub => pub.year)}
          />
        </SideContainer>
      </Container>
    </CenteredContainer>
  )
}
