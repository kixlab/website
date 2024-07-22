'use client'
import styled from '@emotion/styled'
import React, { useState, useEffect, useRef } from 'react'
import { MEMBERS_KEY, MEMBERS, CareerTypes } from '@/data/members'
import { Sections, Section, SectionTitle } from '@/components/Section'
import MemberCard from '@/components/MemberCard'
import AlumniCard from '@/components/AlumniCard'
import { FontVariant, Color } from '@/app/theme'
import Image from 'next/image'
import Divider from '@/components/Divider'
import { Sidebar } from '@/components/SideBar'
import { ScreenSize, linearlyScaleSize } from '@/app/theme'

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 25px;
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
const AlumniSectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const SubCategoryTitle = styled.h2`
  ${FontVariant.title_sm}
`

const SpecialThanksSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const SpecialThanksTitle = styled.h2`
  font-size: 1.5rem;
  color: ${Color.gray900};
`

const SpecialThanksText = styled.div`
  display: flex;
  flex-direction: column;
`

const SpecialThanksSubtitle = styled.h3`
  ${FontVariant.body_lg}
  color: ${Color.gray900};
  margin: 0;
`

const SpecialThanksDescription = styled.p`
  ${FontVariant.body_md}
  color: ${Color.gray700};
  gap: 4px;
`

export default function Page() {
  const [sidebarList, setSidebarList] = useState<string[]>([])
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const ignoreObserver = useRef(false)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (ignoreObserver.current) return

        entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id))
      },
      {
        // when a section passes the area that is 10% from the top and 80% from the bottom of the viewport, it will be considered intersecting
        rootMargin: '-20% 0px -80% 0px',
      }
    )

    const sections = Object.values(sectionRefs.current)
    sections.forEach(section => {
      section && observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  useEffect(() => {
    handleSidebarList(MEMBERS_KEY)
  }, [])

  const handleSidebarList = (list: string[]) => {
    const sections = CareerTypes.filter(career => career !== 'Alumni').map(career =>
      career.replace(/\s+/g, '').replace('.', '')
    )
    sections.push('alumni')
    setSidebarList(sections)
  }

  const handleLinkClick = (sectionId: string) => {
    setActiveSection(sectionId)
    ignoreObserver.current = true

    setTimeout(() => {
      ignoreObserver.current = false
    }, 1000)
  }

  return (
    <Container>
      <main style={{ padding: '0px', margin: '0px' }}>
        <h1>People</h1>
        <Sections>
          {CareerTypes.filter(career => career !== 'Alumni').map(
            (career, i) =>
              MEMBERS_KEY.filter(key => MEMBERS[key].career === career && career !== 'Alumni').length >= 1 && (
                <React.Fragment key={career}>
                  <Section
                    key={career}
                    id={career.replace(/\s+/g, '').replace('.', '')}
                    ref={el => {
                      sectionRefs.current[career] = el
                    }}
                  >
                    <SectionTitle id={career.replace(/\s+/g, '').replace('.', '')}>{career}</SectionTitle>
                    <SectionContent>
                      {MEMBERS_KEY.filter(key => MEMBERS[key].career == career && career != 'Alumni').map(key => (
                        <MemberCard key={key} mem={MEMBERS[key]} />
                      ))}
                    </SectionContent>
                  </Section>
                  <Divider />
                </React.Fragment>
              )
          )}
          <Section
            key="alumni"
            id="alumni"
            ref={el => {
              sectionRefs.current['alumni'] = el
            }}
          >
            <SectionTitle id="alumni">Alumni</SectionTitle>
            {['Postdoc Researcher', 'Ph.D Student', 'M.S. Student', 'Visiting Researcher', 'Intern'].map(
              alumniCareer => (
                <div key={alumniCareer}>
                  <SubCategoryTitle>{alumniCareer}</SubCategoryTitle>
                  <AlumniSectionContent>
                    {MEMBERS_KEY.filter(
                      key => MEMBERS[key].career === 'Alumni' && MEMBERS[key].affiliation === alumniCareer
                    ).map(key => (
                      <AlumniCard key={key} mem={MEMBERS[key]} />
                    ))}
                  </AlumniSectionContent>
                </div>
              )
            )}
          </Section>
          <Divider />
          <Section key="thanks">
            <SpecialThanksTitle id="thanks">Special Thanks</SpecialThanksTitle>
            <SpecialThanksSection>
              <Image src="/images/jura.jpeg" alt="Jura Coffee Machine" width={200} height={200} />
              <SpecialThanksText>
                <SpecialThanksSubtitle>Jura</SpecialThanksSubtitle>
                <SpecialThanksDescription>Coffee Machine</SpecialThanksDescription>
                <SpecialThanksDescription>
                  <i>“Thank you for your steadfast warmth and the delightful brews that kickstart my mornings”</i>
                </SpecialThanksDescription>
              </SpecialThanksText>
            </SpecialThanksSection>
          </Section>
        </Sections>
      </main>
      <SideContainer>
        <Sidebar activeSection={activeSection} handleLinkClick={handleLinkClick} sidebarList={sidebarList} />
      </SideContainer>
    </Container>
  )
}
