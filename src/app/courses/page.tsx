'use client'

import styled from '@emotion/styled'
import { COURSES } from '@/data/courses'
import { FontVariant, Color } from '@/app/theme'

export default function Page() {
  return (
    <main>
      <h1>Courses</h1>
      <Sections>
        {COURSES.map(({ code, title, description, editions }, i) => (
          <>
            <Section key={i}>
              <SectionTitle>
                {code} {title}
              </SectionTitle>
              <SectionContent>{description}</SectionContent>
              <SectionGroup>
                {groupEditions(editions).map((editionGroup, i) => (
                  <SectionEditions key={i}>
                    {editionGroup.map((edition: any, i: any) => (
                      <SectionEdition key={i} href={edition.url}>
                        {' '}
                        • {edition.semester}
                      </SectionEdition>
                    ))}
                  </SectionEditions>
                ))}
              </SectionGroup>
            </Section>
            {i < COURSES.length - 1 && <HorizontalLine />}
          </>
        ))}
      </Sections>
    </main>
  )
}

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 80%;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SectionTitle = styled.h2`
  margin: 0;
  ${FontVariant.title_md}
`

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${FontVariant.body_md}
  color: ${Color.gray700}
`

const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SectionEditions = styled.div`
  display: flex;
  flex-direction: row;
`

const SectionEdition = styled.a`
  ${FontVariant.body_md}
  color: ${Color.orange900};
  text-decoration: none;
  flex-basis: 170px;

  &:hover {
    text-decoration: underline;
  }
`

const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${Color.gray300};
  width: 100%;
`

function groupEditions(editions: any) {
  const groupedEditions = []
  for (let i = 0; i < editions.length; i += 3) {
    groupedEditions.push(editions.slice(i, i + 3))
  }
  return groupedEditions
}
