'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import styled from '@emotion/styled'

import { PUBLICATIONS, PublicationTypes, ResearchTopics } from '@/data/publications'
import type { PublicationType, ResearchTopicType } from '@/data/publications'
import PublicationCard from '@/components/Publication/PublicationCard'
import { Sections, Section, SectionTitle, SectionContent } from '@/components/Section'
import { FontVariant, Color } from '@/app/theme'
import { uniq } from 'lodash'
import Filter from '@/components/Filter'
import Divider from '@/components/Divider'

const Filters = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 40px;
  padding-bottom: 40px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const SubContainer = styled.div`
  width: 80%;
  padding: 40px;
  padding-left: 96px;
`

const SideBar = styled.div`
  width: 20%;
  position: sticky;
  padding: 96px;
  padding-left: 10px;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
`

const SidebarLink = styled.a`
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 10px;
  padding-bottom: 5px;
  color: ${Color.gray700};
  ${FontVariant.body_md}

  &:hover {
    color: ${Color.orange900};
  }
`

const NavTitle = styled.div`
  padding-bottom: 5px;
  color: ${Color.gray700};
  ${FontVariant.body_md}
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
        pub =>
          (researchTopic === 'All' || pub.topics.includes(researchTopic)) &&
          (publicationType === 'All' || pub.type === publicationType)
      )
    )
  }, [researchTopic, publicationType])

  const publicationYears = Array.from(new Set(publicationList.map(p => p.year)))
    .sort()
    .reverse()

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
          {publicationList.filter(pub => pub.type === 'preprint').length > 0 && (
            <Section>
              <SectionTitle>Preprints</SectionTitle>
              <SectionContent>
                {publicationList
                  .filter(pub => pub.type === 'preprint')
                  .map(pub => (
                    <div id={pub.title.replace(/\s+/g, '-').toLowerCase()} key={pub.title}>
                      <PublicationCard pub={pub} />
                    </div>
                  ))}
              </SectionContent>
            </Section>
          )}
          {uniq(PUBLICATIONS.map(p => p.year))
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
                      .map(pub => (
                        <div id={pub.title.replace(/\s+/g, '-').toLowerCase()} key={pub.title}>
                          <PublicationCard key={pub.title} pub={pub} />
                        </div>
                      ))}
                  </SectionContent>
                </Section>
              </>
            ))}
        </Sections>
      </SubContainer>
      <SideBar>
        <div>
          <NavTitle>Preprints</NavTitle>
          {publicationList
            .filter(pub => pub.type === 'preprint')
            .map(pub => (
              <SidebarLink key={pub.title} href={`#${pub.title.replace(/\s+/g, '-').toLowerCase()}`}>
                {pub.title}
              </SidebarLink>
            ))}
        </div>
        {publicationYears.map(year => (
          <div key={year}>
            <NavTitle>{year}</NavTitle>
            {publicationList
              .filter(pub => pub.year === year)
              .map(pub => (
                <SidebarLink key={pub.title} href={`#${pub.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  {pub.title}
                </SidebarLink>
              ))}
          </div>
        ))}
      </SideBar>
    </Container>
  )
}
