'use client'
import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { MEMBERS, KixlabPositionTypes, SeasonTypes } from '@/data/members'
import { ALUMNI } from '@/data/alumni'
import { Sections, Section, SectionTitle } from '@/components/Section'
import { MemberCard } from '@/components/MemberCard'
import { AlumniCard } from '@/components/AlumniCard'
import { FontVariant, Color } from '@/app/theme'
import Image from 'next/image'
import { Divider } from '@/components/Divider'
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
  ${FontVariant.title_md}
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
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  return (
    <Container>
      <main style={{ padding: '0px', margin: '0px' }}>
        <h1>People</h1>
        <Sections>
          {KixlabPositionTypes.map(kixlabPosition => {
            const filteredMembers = MEMBERS.filter(member => member.kixlabPosition === kixlabPosition)
            return (
              filteredMembers.length > 0 && (
                <React.Fragment key={kixlabPosition}>
                  <Section
                    key={kixlabPosition}
                    id={kixlabPosition.replace(/\s+/g, '').replace('.', '')}
                    ref={el => {
                      sectionRefs.current[kixlabPosition] = el
                    }}
                  >
                    <SectionTitle id={kixlabPosition.replace(/\s+/g, '').replace('.', '')}>
                      {kixlabPosition}
                    </SectionTitle>
                    <SectionContent>
                      {filteredMembers
                        .sort((memberA, memberB) => {
                          // sort by last name in ascending order
                          if (memberA.lastName === memberB.lastName) {
                            // sort by first name if last name is the same
                            return memberA.firstName.localeCompare(memberB.firstName)
                          } else {
                            return memberA.lastName.localeCompare(memberB.lastName)
                          }
                        })
                        .map(member => (
                          <MemberCard key={member.email} member={member} />
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
            ref={el => {
              sectionRefs.current['alumni'] = el
            }}
          >
            <SectionTitle id="alumni">Alumni</SectionTitle>
            {KixlabPositionTypes.map(kixlabPosition => {
              const filteredMembers = ALUMNI.filter(alumnus => alumnus.kixlabPosition === kixlabPosition)
              return (
                filteredMembers.length > 0 && (
                  <React.Fragment key={kixlabPosition}>
                    <SubCategoryTitle>{kixlabPosition}</SubCategoryTitle>
                    <AlumniSectionContent>
                      {filteredMembers
                        .sort((memberA, memberB) => {
                          // sort first by startYear and startSeason in descending order
                          if (memberA.startYear === memberB.startYear) {
                            // TODO: sort by endYear and endSeason if startYear and startSeason are the same
                            return SeasonTypes.indexOf(memberB.startSeason) - SeasonTypes.indexOf(memberA.startSeason)
                          } else {
                            return memberB.startYear - memberA.startYear
                          }
                        })
                        .map((alumnus, i) => (
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
            <SpecialThanksTitle id="thanks">Special Thanks</SpecialThanksTitle>
            <SpecialThanksSection>
              <Image src="/images/jura.png" alt="Jura Coffee Machine" width={200} height={200} />
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
        <Sidebar
          sidebarList={[
            ...KixlabPositionTypes.map(kixlabPosition => kixlabPosition.replace(/\s+/g, '').replace('.', '')),
            'alumni',
          ]}
          sectionRefs={sectionRefs}
        />
      </SideContainer>
    </Container>
  )
}
