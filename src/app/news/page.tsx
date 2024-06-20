'use client'

import { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import Post, { POSTS } from '@/data/posts'
import NewsModal from '@/components/NewsModal'
import styled from '@emotion/styled'
import { Color, ScreenSize } from '../theme'

const NewsSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1000px;
  width: 100%;

  @media (max-width: ${ScreenSize.xl}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 0;
  }

  @media (max-width: ${ScreenSize.md}) {
    grid-template-columns: 1fr;
  }
`

const NewsLine = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${Color.orange900};
  position: absolute;
  left: 50%;
  top: 0;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Color.orange900};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${ScreenSize.xl}) {
    display: none;
  }
`

const NewsContainer = styled.div`
  width: 100%;

  & > div:nth-of-type(odd) {
    margin-right: auto;
    margin-left: 80px;
    align-items: flex-start;
    text-align: left;
  }
  & > div:nth-of-type(even) {
    margin-left: auto;
    margin-right: 80px;
    align-items: flex-end;
    text-align: right;
  }
`

export default function Page() {
  const [modalContent, setModalContent] = useState<Post | null>(null)

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>News</h1>
      <NewsSection>
        <NewsLine />
        <NewsContainer>
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime()).map((post, index) => (
            <NewsCard key={index} post={post} setModalContent={setModalContent} />
          ))}
        </NewsContainer>
      </NewsSection>
      <div
        style={{
          display: modalContent ? 'block' : 'none',
        }}
      >
        <NewsModal
          post={modalContent}
          onClose={() => {
            setModalContent(null)
          }}
        />
      </div>
    </main>
  )
}
