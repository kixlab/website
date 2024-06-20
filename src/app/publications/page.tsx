'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styled from '@emotion/styled'

import { PUBLICATIONS, PublicationTypes, ResearchTopics } from '@/data/publications'
import type { PublicationType, ResearchTopicType } from '@/data/publications'
import PublicationCard from '@/components/Publication/PublicationCard'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import Filter from '@/components/Filter'
import { uniq } from 'lodash'
import { FontVariant, Color } from '@/app/theme'
import Divider from '@/components/Divider'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const SubContainer = styled.main`
  width: 85%;
`

const Filters = styled.div`
  display: flex;
  gap: 12px;
`

const SideBar = styled.div`
  width: 15%;
  position: sticky;
  padding: 96px;
  padding-left: 0px;
  top: 0;
  height: 100vh;
`

const SidebarLink = styled.a`
  display: block;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 10px;
  padding-bottom: 5px;
  color: ${Color.gray700};
  ${FontVariant.body_md}

  &.active {
    color: ${Color.orange900};
  }

  &:hover {
    color: ${Color.orange900};
    text-decoration: underline;
  }
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
    <Container>
      <SubContainer>
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
          {PUBLICATIONS.filter(pub => pub.type === 'preprint').length > 0 && (
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
          {uniq(PUBLICATIONS.map(p => p.year))
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
      </SubContainer>
      <SideBar>
        <SidebarLink
          href="#preprints"
          className={activeSection === 'preprints' ? 'active' : ''}
          onClick={() => handleLinkClick('preprints')}
        >
          Preprints
        </SidebarLink>
        {uniq(publicationList.map(p => p.year))
          .sort()
          .reverse()
          .map(year => (
            <SidebarLink
              key={year}
              href={`#year-${year}`}
              className={activeSection === `year-${year}` ? 'active' : ''}
              onClick={() => handleLinkClick(`year-${year}`)}
            >
              {year}
            </SidebarLink>
          ))}
      </SideBar>
    </Container>
  )
}
