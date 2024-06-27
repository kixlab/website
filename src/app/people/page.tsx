'use client'

import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
//import { usePathname, useSearchParams } from 'next/navigation'
import { MEMBERS_KEY, MEMBERS, CareerTypes } from '@/data/members'
import { Sections, Section, SectionTitle } from '@/components/Section'
import MemberCard from '@/components/MemberCard'
import AlumniCard from '@/components/AlumniCard'
import { Color } from '@/app/theme'

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 36px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`
const MainInner = styled.div`
  display: flex;
`

const AlumniSectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const TableOfContents = styled.ul`
  position: sticky;
  top: 100px;
  gap: 12px;
  display: flex;
  flex-direction: column;

  margin: 0;

  width: fit-content;
  height: fit-content;
`

const AnchorLi = styled.li`
  list-style-type: none;
`

const Anchor = styled.a<{ selected?: boolean }>`
  text-decoration: none;
  color: ${props => (props.selected ? Color.orange900 : Color.gray900)};

  &:hover {
    color: ${Color.orange900};
  }
`

const SubCategoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
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
const SpecialThanksImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
`

const SpecialThanksText = styled.div`
  display: flex;
  flex-direction: column;
`

const SpecialThanksSubtitle = styled.h3`
  font-size: 1.25rem;
  color: ${Color.orange900};
  margin: 0;
`

const SpecialThanksDescription = styled.p`
  font-size: 1rem;
  color: ${Color.gray700};
  margin: 0.5rem 0 0 0;
`

export default function Page() {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const myObserverCallback = (entries: IntersectionObserverEntry[]) => {
        entries.reverse().forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            if (entry.target.id) {
              setSelected(entry.target.id)
            }
          }
        })
      }

      const io = new IntersectionObserver(myObserverCallback, { threshold: 0.1 })

      CareerTypes.map(career => {
        const element = document.querySelector(`#${career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`)
        if (element) {
          io.observe(element)
        }
      })

      return () => {
        io.disconnect()
      }
    }
  }, [])

  return (
    <main>
      <h1>People</h1>
      <MainInner>
        <Sections>
          {CareerTypes.filter(career => career !== 'Alumni').map(
            (career, i) =>
              MEMBERS_KEY.filter(key => MEMBERS[key].career === career && career !== 'Alumni').length >= 1 && (
                <Section key={career}>
                  <SectionTitle id={career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}>
                    {career}
                  </SectionTitle>
                  <SectionContent>
                    {MEMBERS_KEY.filter(key => MEMBERS[key].career == career && career != 'Alumni').map(key => (
                      <MemberCard key={key} mem={MEMBERS[key]} />
                    ))}
                  </SectionContent>
                </Section>
              )
          )}
          <Section key="alumni">
            <SectionTitle id="alumni">Alumni</SectionTitle>
            {['Postdoct Researcher', 'Ph.D Student', 'M.S. Student', 'Visiting Researcher', 'Intern'].map(
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
          <SpecialThanksTitle>Special Thanks</SpecialThanksTitle>
          <SpecialThanksSection>
            <SpecialThanksImage src="images/jura.jpeg" alt="Jura Coffee Machine" />
            <SpecialThanksText>
              <SpecialThanksSubtitle>Jura</SpecialThanksSubtitle>
              <SpecialThanksDescription>Coffee Machine</SpecialThanksDescription>
              <SpecialThanksDescription>
                “Thank you for your steadfast warmth and the delightful brews that kickstart my mornings”
              </SpecialThanksDescription>
            </SpecialThanksText>
          </SpecialThanksSection>
        </Sections>
        <nav>
          <TableOfContents>
            {CareerTypes.filter(career => career !== 'Alumni').map((career, i) => (
              <AnchorLi key={`toc-${career}`}>
                <Anchor
                  href={`#${career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`}
                  selected={selected === career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}
                  onClick={() => setSelected(career.toLowerCase().replaceAll(' ', '-').replaceAll('.', ''))}
                >
                  {career}
                </Anchor>
              </AnchorLi>
            ))}
            <AnchorLi key="toc-alumni">
              <Anchor href="#alumni" selected={selected === 'alumni'} onClick={() => setSelected('alumni')}>
                Alumni
              </Anchor>
            </AnchorLi>
          </TableOfContents>
        </nav>
      </MainInner>
    </main>
  )
}
