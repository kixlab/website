'use client'

import styled from '@emotion/styled'
import React from 'react'
import { COURSES } from '@/data/courses'
import { FontVariant, Color } from '@/app/theme'

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

const PreviousEditionsContainer = styled.div`
  display: grid;
  // TODO: number of links on one row is hard-coded to 3. Can we make this more flexible?
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 10px;
  width: 50%; // Make the links closer to each other. Can we remove this hard-coded width in favor of more flexible template columns?
`

const PreviousEditionLink = styled.a`
  ${FontVariant.body_md}
  color: ${Color.orange900};
  text-decoration: none;
  width: fit-content;
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
        {COURSES.map((course, i) => (
          <React.Fragment key={course.code}>
            <Section key={course.code}>
              <SectionTitle>
                {course.code} {course.title}
              </SectionTitle>
              <SectionContent>{course.description}</SectionContent>
              <PreviousEditionsContainer>
                {course.editions.map(edition => (
                  <PreviousEditionLink key={edition.url} href={edition.url}>
                    • {edition.semester}
                  </PreviousEditionLink>
                ))}
              </PreviousEditionsContainer>
            </Section>
            {i < COURSES.length - 1 && <HorizontalLine />}
          </React.Fragment>
        ))}
      </Sections>
    </main>
  )
}
