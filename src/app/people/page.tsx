'use client'

import styled from '@emotion/styled'
import { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { MEMBERS_KEY, MEMBERS, CareerTypes } from '@/data/members'
import { Sections, Section, SectionTitle } from '@/components/Section'
import MemberCard from '@/components/MemberCard'
import { Color } from '@/app/theme'
import { useEffect } from 'react'

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
<<<<<<< HEAD
      <h1>People</h1>
      <MainInner>
        <Sections>
          {CareerTypes.map(
            (career, i) =>
              MEMBERS_KEY.filter(key => MEMBERS[key].career === career).length >= 1 && (
                <Section key={career}>
                  <SectionTitle id={career.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')}>
                    {career}
                  </SectionTitle>
                  <SectionContent>
                    {MEMBERS_KEY.filter(key => MEMBERS[key].career === career).map(key => (
                      <MemberCard key={key} mem={MEMBERS[key]} />
                    ))}
                  </SectionContent>
                </Section>
              )
          )}
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
=======
      {MEMBERS.map(({ fullName }, i) => (
        <div key={i}>{fullName}</div>
      ))}
>>>>>>> renewal
    </main>
  )
}
