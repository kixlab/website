'use client'
import { POSTS } from '@/data/posts'
import React from 'react'
import { Section, SectionHeader, FullWidthContainer } from './Styles'
import styled from '@emotion/styled'
import LinkButton from '@/components/LinkButton'
import NewsCard from '@/components/NewsCard'

const NewsItemsArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 0;
  flex-wrap: wrap;

  > * {
    flex: 1;
    min-width: 200px;
  }
`

export const NewsSection = () => {
  const redirectToNewsPage = () => {
    window.location.href = `/news`
  }

  return (
    <FullWidthContainer>
      <Section id="news-section">
        <SectionHeader title="Latest News" subtitle="Check the latest news from KIXLAB" />
        <NewsItemsArea id="news area">
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4)
            .map((post, index) => (
              <NewsCard key={index} post={post} setModalContent={redirectToNewsPage} labelsOnLeft={true} />
            ))}
        </NewsItemsArea>
        <LinkButton href="/news" text="See More" style={{ alignSelf: 'center' }} />
      </Section>
    </FullWidthContainer>
  )
}
