'use client'
import Link from 'next/link'
import Markdown from 'react-markdown'
import { POSTS } from '@/data/posts'
import { SectionHeader } from '@/components/Section'
import React from 'react'
import { Section, FlexContainer, Text } from './Styles'
import styled from '@emotion/styled'
import { Color, FontVariant, ScreenSize } from '@/app/theme'
import NewsCard from '@/components/NewsCard'

const NewsItemsArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  padding: 0;

  @media (max-width: ${ScreenSize.xl}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${ScreenSize.md}) {
    grid-template-columns: 1fr;
  }
`

export const NewsSection = () => {
  const redirectToNewsPage = () => {
    window.location.href = `/news`
  }

  return (
    <Section id="news-section" altBackground={true}>
      <SectionHeader title="Latest News" subtitle="Check the latest news from KIXLAB" />
      <FlexContainer direction="column" style={{ gap: '72px', justifyContent: 'space-between' }}>
        <NewsItemsArea>
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4)
            .map((post, index) => (
              <NewsCard key={index} post={post} setModalContent={redirectToNewsPage} />
            ))}
        </NewsItemsArea>
        <Link
          href="/news"
          style={{
            border: `1px solid ${Color.gray500}`,
            padding: '8px 20px',
            width: 'fit-content',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          See More →
        </Link>
      </FlexContainer>
    </Section>
  )
}
