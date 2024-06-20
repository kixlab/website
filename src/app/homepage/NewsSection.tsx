'use client'
import Markdown from 'react-markdown'
import { POSTS } from '@/data/posts'
import { SectionHeader } from '@/components/Section'
import React from 'react'
import { Section, FlexContainer, Text } from './Styles'
import styled from '@emotion/styled'
import { Color, FontVariant } from '@/app/theme'
import LinkButton from '@/components/LinkButton'

const NewsItemsArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 72px;
`

const NewsItem = styled.div`
  flex: 1;
  min-width: 249px;
`
const NewsItemTitle = styled.h3`
  ${FontVariant.title_md}
`
const NewsItemLabelsArea = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
`
const NewsItemLabel = styled.div`
  ${FontVariant.body_md}
  width: fit-content;
  background-color: #7d7d7d;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
`
const NewsItemTextArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`

export const NewsSection = () => {
  return (
    <Section id="news-section" altBackground={true}>
      <SectionHeader title="Latest News" subtitle="Check the latest news from KIXLAB" />
      <FlexContainer direction="column" style={{ gap: '72px', justifyContent: 'space-between', alignItems: 'center' }}>
        <NewsItemsArea>
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4)
            .map((post, i) => (
              <NewsItem key={i}>
                <NewsItemLabelsArea style={{ marginBottom: '10px' }}>
                  {post.categories.map((category, j) => (
                    <NewsItemLabel key={j}>{category}</NewsItemLabel>
                  ))}
                </NewsItemLabelsArea>
                <NewsItemTextArea>
                  <NewsItemTitle>{post.title}</NewsItemTitle>
                  <Text>{post.date.toDateString()}</Text>
                  <Text>
                    <Markdown>{post.summary}</Markdown>
                  </Text>
                </NewsItemTextArea>
              </NewsItem>
            ))}
        </NewsItemsArea>
        <LinkButton href="/news" text="See More" style={{}} />
      </FlexContainer>
    </Section>
  )
}
