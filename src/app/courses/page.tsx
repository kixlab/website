'use client'

import styled from '@emotion/styled'
import React from 'react'
import { COURSES } from '@/data/courses'
import { FontVariant, Color } from '@/app/theme'
import { chunk } from 'lodash'

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
export default function Page() {
  return (
    <main>
      <h1>Courses</h1>
      <Sections>
        {COURSES.map(({ code, title, description, editions }, i) => (
          <React.Fragment key={i}>
            <Section key={i}>
              <SectionTitle>
                {code} {title}
              </SectionTitle>
              <SectionContent>{description}</SectionContent>
              <SectionGroup>
                {chunk(editions, 3).map((editionGroup: any, j: any) => (
                  <SectionEditions key={j}>
                    {editionGroup.map((edition: any, k: any) => (
                      <SectionEdition key={k} href={edition.url}>
                        • {edition.semester}
                      </SectionEdition>
                    ))}
                  </SectionEditions>
                ))}
              </SectionGroup>
            </Section>
            {i < COURSES.length - 1 && <HorizontalLine />}
          </React.Fragment>
        ))}
      </Sections>
    </main>
  )
}
