'use client'
import { FontVariant, ScreenSize, linearlyScaleSize } from '@/app/theme'
import { AlumniCard, SpecialThanksCard } from '@/components/AlumniCard'
import { Divider } from '@/components/Divider'
import { MemberCard, CurrentMode } from '@/components/MemberCard'
import { Section, SectionTitle, Sections } from '@/components/Section'
import { Sidebar } from '@/components/SideBar'
import { ALUMNI_MEMBERS_BY_POSITION, CURRENT_MEMBERS_BY_POSITION, KixlabPositions } from '@/data/members'
import styled from '@emotion/styled'
import { startCase } from 'lodash'
import React, { useRef } from 'react'

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 48px 24px;
  @media (max-width: ${ScreenSize.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
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
    width: 80%;

    @media (max-width: ${ScreenSize.sm}) {
      width: 100%;
    }
  }
`
const SideContainer = styled.div`
  padding-top: 96px;
  padding-left: 30px;
  padding-right: 30px;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${ScreenSize.md}) {
    display: none;
  }
`
const AlumniSectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  @media (max-width: ${ScreenSize.xl}) {
    grid-template-columns: 1fr;
  }
  margin-bottom: 24px;
`

const SubCategoryTitle = styled.h2`
  ${FontVariant.title_md}
  margin-bottom: 8px;
`

const kixlabPositions = KixlabPositions // change this if you want to re-order the sections in the page.

export default function Page() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  return (
    <Container>
      <main style={{ padding: '0px', margin: '0px' }}>
        <h1>People</h1>
        <Sections>
          {kixlabPositions.map(position => {
            return (
              CURRENT_MEMBERS_BY_POSITION[position] &&
              CURRENT_MEMBERS_BY_POSITION[position].length > 0 && (
                <React.Fragment key={position}>
                  <Section
                    key={position}
                    id={startCase(position)}
                    ref={el => {
                      sectionRefs.current[position] = el
                    }}
                  >
                    <SectionTitle>{position}</SectionTitle>
                    <SectionContent>
                      {CURRENT_MEMBERS_BY_POSITION[position].map(member => (
                        <MemberCard key={member.email} member={member} mode={CurrentMode} />
                      ))}
                    </SectionContent>
                  </Section>
                  <Divider />
                </React.Fragment>
              )
            )
          })}
          <Section
            id="alumni"
            key="alumni"
            ref={el => {
              sectionRefs.current['alumni'] = el
            }}
          >
            <SectionTitle id="alumni">Alumni</SectionTitle>
            {KixlabPositions.map(position => {
              // group Ph.D. students and Postdocs together under "Ph.D. / Postdoc" section
              if (position === 'Ph.D. Student') {
                return null
              }
              if (position === 'Postdoc Researcher') {
                const postdocs = ALUMNI_MEMBERS_BY_POSITION['Postdoc Researcher'] || []
                const phds = ALUMNI_MEMBERS_BY_POSITION['Ph.D. Student'] || []
                const combined = [...postdocs, ...phds]
                if (combined.length > 0) {
                  const seasonOrder = ['Fall', 'Summer', 'Spring', 'Winter']
                  combined.sort((a, b) => {
                    const aIsAlumni = a.isAlumni ?? false
                    const bIsAlumni = b.isAlumni ?? false
                    const aEndYear = aIsAlumni ? a.endYear ?? a.startYear ?? 3000 : 3000
                    const bEndYear = bIsAlumni ? b.endYear ?? b.startYear ?? 3000 : 3000
                    const aEndSeason = aIsAlumni ? a.endSeason ?? a.startSeason ?? 'Winter' : 'Winter'
                    const bEndSeason = bIsAlumni ? b.endSeason ?? b.startSeason ?? 'Winter' : 'Winter'
                    if (aEndYear !== bEndYear) {
                      return bEndYear - aEndYear
                    }
                    const seasonA = seasonOrder.indexOf(aEndSeason)
                    const seasonB = seasonOrder.indexOf(bEndSeason)
                    if (seasonA !== seasonB) {
                      return seasonA - seasonB
                    }
                    if (a.lastName === b.lastName) {
                      return a.firstName.localeCompare(b.firstName)
                    }
                    return a.lastName.localeCompare(b.lastName)
                  })
                  return (
                    <React.Fragment key="Ph.D. / Postdoc">
                      <SubCategoryTitle>Ph.D. / Postdoc</SubCategoryTitle>
                      <AlumniSectionContent>
                        {combined.map((alumnus, i) => (
                          <AlumniCard key={i} mem={alumnus} showRole={true} />
                        ))}
                      </AlumniSectionContent>
                    </React.Fragment>
                  )
                }
                return null
              }

              // group Visiting Researchers and Past Researchers together under "Past Researcher"
              if (position === 'Past Researcher') {
                return null
              }
              if (position === 'Visiting Researcher') {
                const visitingResearchers = ALUMNI_MEMBERS_BY_POSITION['Visiting Researcher'] || []
                const pastMembers = ALUMNI_MEMBERS_BY_POSITION['Past Researcher'] || []
                const combined = [...visitingResearchers, ...pastMembers]
                if (combined.length > 0) {
                  combined.sort((a, b) => {
                    const aIsAlumni = a.isAlumni ?? false
                    const bIsAlumni = b.isAlumni ?? false
                    const aEndYear = aIsAlumni ? a.endYear ?? a.startYear ?? 3000 : 3000
                    const bEndYear = bIsAlumni ? b.endYear ?? b.startYear ?? 3000 : 3000
                    const aEndSeason = aIsAlumni ? a.endSeason ?? a.startSeason ?? 'Winter' : 'Winter'
                    const bEndSeason = bIsAlumni ? b.endSeason ?? b.startSeason ?? 'Winter' : 'Winter'
                    if (aEndYear !== bEndYear) {
                      return bEndYear - aEndYear
                    }
                    const seasonA = ['Fall', 'Summer', 'Spring', 'Winter'].indexOf(aEndSeason)
                    const seasonB = ['Fall', 'Summer', 'Spring', 'Winter'].indexOf(bEndSeason)
                    if (seasonA !== seasonB) {
                      return seasonA - seasonB
                    }
                    if (a.lastName === b.lastName) {
                      return a.firstName.localeCompare(b.firstName)
                    }
                    return a.lastName.localeCompare(b.lastName)
                  })
                  return (
                    <React.Fragment key="Past Researcher">
                      <SubCategoryTitle>Past Researcher</SubCategoryTitle>
                      <AlumniSectionContent>
                        {combined.map((alumnus, i) => (
                          <AlumniCard key={i} mem={alumnus} showRole={true} />
                        ))}
                      </AlumniSectionContent>
                    </React.Fragment>
                  )
                }
                return null
              }

              return (
                ALUMNI_MEMBERS_BY_POSITION[position] &&
                ALUMNI_MEMBERS_BY_POSITION[position].length > 0 && (
                  <React.Fragment key={position}>
                    <SubCategoryTitle>{position}</SubCategoryTitle>
                    <AlumniSectionContent>
                      {ALUMNI_MEMBERS_BY_POSITION[position].map((alumnus, i) => (
                        // TODO: populate alumni data with email field and use email as key
                        <AlumniCard key={i} mem={alumnus} />
                      ))}
                    </AlumniSectionContent>
                  </React.Fragment>
                )
              )
            })}
          </Section>
          <Divider />
          <Section key="thanks">
            <SectionTitle id="thanks">Special Thanks</SectionTitle>
            <SpecialThanksCard
              img="/images/jura.png"
              name="Jura"
              position="Coffee Machine"
              description="Thank you for your steadfast warmth and the delightful brews that kickstart my mornings"
            />
          </Section>
        </Sections>
      </main>
      <SideContainer>
        <Sidebar
          sidebarList={[
            ...kixlabPositions.filter(position => position !== 'Past Researcher').map(position => startCase(position)),
            'alumni',
          ]}
          sectionRefs={sectionRefs}
        />
      </SideContainer>
    </Container>
  )
}
