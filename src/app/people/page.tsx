'use client'

import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
//import { usePathname, useSearchParams } from 'next/navigation'

import { MEMBERS_KEY, MEMBERS, PositionType } from '@/data/members'
import { Sections, Section, SectionTitle } from '@/components/Section'
import MemberCard from '@/components/MemberCard'
import AlumniCard from '@/components/AlumniCard'
import { Color } from '@/app/theme'

const SectionContent = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`
const MainInner = styled.div`
  display: flex;
`

const AlumniSectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1px;
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
    cursor: pointer;
    color: ${Color.gray900};
  }
`

const SubCategoryTitle = styled.h2`
  font-size: 1rem;
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

      PositionType.map(career => {
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
          {PositionType.filter(career => career !== 'Alumni').map(
            (career, i) =>
              MEMBERS_KEY.filter(key => MEMBERS[key].position === career && career !== 'Alumni').length >= 1 && (
                <Section key={career}>
                  <SectionTitle id={career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}>
                    {career}
                  </SectionTitle>
                  <SectionContent>
                    {MEMBERS_KEY.filter(key => MEMBERS[key].position == career && career != 'Alumni').map(key =>(
                      <MemberCard key={key} mem={MEMBERS[key]} />
                    ))}
                  </SectionContent>
                </Section>
              )
          )}
          <Section key="alumni">
            <SectionTitle id="alumni">Alumni</SectionTitle>
            {['Postdoct Researcher', 'Ph.D Student', 'M.S. Student', 'Visiting Researcher', 'Intern'].map(alumniCareer => (
              <div key={alumniCareer}>
                <SubCategoryTitle>{alumniCareer}</SubCategoryTitle>
                <AlumniSectionContent>
                  {MEMBERS_KEY.filter(key => MEMBERS[key].position === 'Alumni' && MEMBERS[key].affiliation === alumniCareer).map(key => (
                    <AlumniCard key={key} mem={MEMBERS[key]}/>
                  ))}
                  </AlumniSectionContent>
                </div>
            ))}
            </Section>
          </Sections>
        <nav>
          <TableOfContents>
            {PositionType.filter(career => career !== 'Alumni').map((career, i) => (
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
              <Anchor
                href="#alumni"
                selected={selected === 'alumni'}
                onClick={() => setSelected('alumni')}
              >
                Alumni
              </Anchor>
            </AnchorLi>
          </TableOfContents>
        </nav>
      </MainInner>
    </main>
  )
}