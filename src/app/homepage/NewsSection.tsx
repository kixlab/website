'use client'
import { POSTS, Post } from '@/data/posts'
import React, { useState } from 'react'
import { Section, SectionHeader, FullWidthContainer } from './Styles'
import styled from '@emotion/styled'
import { LinkButton } from '@/components/LinkButton'
import { NewsCard } from '@/components/NewsCard'
import { NewsModal } from '@/components/NewsModal'

const minCardWidth = 200
const gap = 24
const sideMargins = 96
const numCards = 4

const NewsItemsArea = styled.div`
  display: grid;
  gap: ${gap}px;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(${minCardWidth}px, 1fr));
  @media (max-width: ${minCardWidth * 4 + gap * 3 + sideMargins * 2}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${minCardWidth * 2 + gap + sideMargins * 2}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const NewsSection = () => {
  const [modalContent, setModalContent] = useState<Post | null>(null)

  return (
    <FullWidthContainer>
      <Section id="news-section">
        <SectionHeader title="Latest News" subtitle="Check the latest news from KIXLAB" />
        <NewsItemsArea id="news area">
          {POSTS.slice(0, numCards).map((post, index) => (
            <NewsCard key={index} post={post} setModalContent={setModalContent} labelsOnLeft={true} />
          ))}
        </NewsItemsArea>
        <LinkButton href="/news" text="See More" style={{ alignSelf: 'center' }} />
      </Section>
      {modalContent && (
        <NewsModal
          post={modalContent}
          onClose={() => {
            setModalContent(null)
          }}
        />
      )}
    </FullWidthContainer>
  )
}
