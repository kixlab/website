'use client'

import styled from '@emotion/styled'
import { useState } from 'react'
import { Color } from '@/app/theme'
import { CareerTypes, MEMBERS } from '@/data/members'
import { useEffect } from 'react'
import { Section, SectionTitle, Sections } from '@/components/Section'
import MemberCard from '@/components/MemberCard'

const SectionContent = styled.div`
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
`
const MainInner = styled.div`
  display: flex;
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
  color: ${props => (props.selected ? Color.orange900 : Color.gray600)};

  &:hover {
    cursor: pointer;
    color: ${Color.gray900};
  }
`

export default function Page() {
  const [selected, setSelected] = useState('')

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

  useEffect(() => {
    CareerTypes.map(career => {
      const element = document.querySelector(`#${career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}`)
      if (element) {
        io.observe(element)
      }
    })
  })

  return (
    <main>
      <h1>People</h1>
      <MainInner>
        <Sections>
          {CareerTypes.filter(careerType => MEMBERS.some(({ career }) => career === careerType)).map(careerType => (
            <Section key={careerType}>
              <SectionTitle id={careerType.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}>
                {careerType}
              </SectionTitle>
              <SectionContent>
                {MEMBERS.filter(({ career }) => career === careerType).map((member, i) => (
                  <MemberCard key={i} mem={member} />
                ))}
              </SectionContent>
            </Section>
          ))}
        </Sections>
        <nav>
          <TableOfContents>
            {CareerTypes.map((career, i) => (
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
          </TableOfContents>
        </nav>
      </MainInner>
    </main>
  )
}
