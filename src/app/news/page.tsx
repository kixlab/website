'use client'

import { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import { NewsLine, NewsSection } from '@/components/Section'
import Post, { POSTS } from '@/data/posts'
import NewsModal from '@/components/NewsModal'

import styled from '@emotion/styled'
import { Color, ScreenSize } from '../theme'

const padding = 80
const postWidth = 400

const NewsSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 0;
  max-width: 1000px;
  width: 100%;
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

  @media (max-width: ${ScreenSize.xl}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    padding: 0;
  }

  @media (max-width: ${ScreenSize.md}) {
    grid-template-columns: 1fr;
  }

  & > div {
    width: ${postWidth}px;
    margin-bottom: -${padding / 2}px;

    @media (max-width: ${ScreenSize.xl}) {
      width: 100%;
      margin-bottom: 0px;
    }
  }

  & > div:nth-of-type(odd) {
    margin-right: auto;
    margin-left: 80px;
    align-items: flex-start;
    text-align: left;

    @media (max-width: ${ScreenSize.xl}) {
      margin-left: 0px;
      margin-right: 0px;
      align-items: flex-start;
      text-align: left;
    }
  }
  & > div:nth-of-type(even) {
    margin-left: auto;
    margin-right: 80px;
    align-items: flex-end;
    text-align: right;

    @media (max-width: ${ScreenSize.xl}) {
      margin-left: 0px;
      margin-right: 0px;
      align-items: flex-start;
      text-align: left;
    }
  }
`

export default function Page() {
  const [modalContent, setModalContent] = useState<Post | null>(null)

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>News</h1>
      <NewsSection>
        <NewsLine />
        {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
          ({ title, date, categories, summary, contentMdFilePath, endsAt }, i) => (
            <NewsCard
              key={i}
              post={{
                title,
                date,
                categories,
                summary,
                contentMdFilePath,
                endsAt,
              }}
              position={i % 2 === 0 ? 'left' : 'right'}
              setModalContent={setModalContent}
            />
          )
        )}
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
