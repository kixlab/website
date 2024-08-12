'use client'

import { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import { POSTS, IPost } from '@/data/posts'
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
  display: grid;
  grid-template-colums: 1fr 1fr;

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
    width: 47%; // needs to be <50% to show gap between cards and vertical line
    margin-bottom: -${padding / 2}px;

    @media (max-width: ${ScreenSize.xl}) {
      width: 100%;
      margin-bottom: 0px;
    }
  }

  & > div:nth-of-type(odd) {
    margin-right: auto;
    text-align: right;

    @media (max-width: ${ScreenSize.xl}) {
      margin-left: 0px;
      margin-right: 0px;
      align-items: flex-start;
      text-align: left;
    }
  }
  & > div:nth-of-type(even) {
    margin-left: auto;
    text-align: left;

    @media (max-width: ${ScreenSize.xl}) {
      margin-left: 0px;
      margin-right: 0px;
      align-items: flex-start;
      text-align: left;
    }
  }
`

export default function Page() {
  const [modalContent, setModalContent] = useState<IPost | null>(null)

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>News</h1>
      <NewsSection id="new section">
        <NewsLine />
        <NewsContainer id="news container">
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime()).map((post, index) => (
            <NewsCard key={index} post={post} setModalContent={setModalContent} labelsOnLeft={index % 2 === 1} />
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
