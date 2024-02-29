'use client'

import React from 'react'
import Markdown from 'react-markdown'
import styled from '@emotion/styled'
import { FontVariant, Color } from '@/app/theme'
import Post from '@/data/posts'

// TODO: Responsive when the screen size is smaller than 1088px

export const categoryColors: { [key: string]: string } = {
  publication: Color.orange900,
  award: Color.orange700,
  position: Color.orange600,
}

const postWidth = 400
const padding = 80

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${postWidth}px;
  gap: 4px;
  margin-bottom: -${padding / 4}px;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  padding: 16px;
`

const Title = styled.div`
  ${FontVariant.body_lg}
`

export const CategoryContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const Category = styled.span`
  ${FontVariant.body_sm}
  color: ${Color.white};
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: capitalize;
`

export const NewsDate = styled.div`
  ${FontVariant.body_sm}
  color: ${Color.gray700};
  margin-bottom: 4px;
`

const Summary = styled.div`
  ${FontVariant.body_md}
  color: ${Color.gray700};

  a {
    color: ${Color.gray700};
  }
  p {
    margin: 0;
  }
`

const ReadMore = styled.div`
  ${FontVariant.body_md}
  color: ${Color.orange900};
  cursor: pointer;
  text-decoration: none;
`

export default function NewsCard({
  post,
  position,
  setModal,
  setModalContent,
}: {
  post: Post
  position: 'left' | 'right'
  setModal: (modal: boolean) => void
  setModalContent: (post: Post | null) => void
}) {
  var currentDate = new Date()
  var open = post.endsAt && post.endsAt > currentDate
  var closed = post.endsAt && post.endsAt < currentDate

  return (
    <PostContainer
      style={{
        marginLeft: position === 'left' ? postWidth + padding : 0,
        marginRight: position === 'right' ? postWidth + padding : 0,
        alignItems: position === 'left' ? 'flex-start' : 'flex-end',
        textAlign: position === 'left' ? 'left' : 'right',
      }}
    >
      <CategoryContainer>
        {post.categories.map((category, i) => (
          <Category key={i} style={{ backgroundColor: closed ? Color.gray400 : categoryColors[category] }}>
            {category}
          </Category>
        ))}
        {closed && <Category style={{ backgroundColor: Color.gray400 }}>Closed</Category>}
        {open && <Category style={{ backgroundColor: Color.green300 }}>Open</Category>}
      </CategoryContainer>
      <Title>{post.title}</Title>
      <NewsDate>{post.date.toDateString()}</NewsDate>
      <Summary>
        <Markdown>{post.summary}</Markdown>
      </Summary>
      {post.content && (
        <ReadMore
          onClick={e => {
            e.preventDefault()
            setModal(true)
            setModalContent(post)
          }}
        >
          Click here to see the details →
        </ReadMore>
      )}
    </PostContainer>
  )
}
