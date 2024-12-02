import React from 'react'
import Markdown from 'react-markdown'
import styled from '@emotion/styled'
import { FontVariant, Color, ScreenSize } from '@/app/theme'
import { Post } from '@/data/posts'

export const categoryColors: { [key: string]: string } = {
  publication: Color.orange900,
  award: Color.orange700,
  position: Color.orange600,
  news: Color.orange500,
}

const PostContainer = styled.div`
  display: flex;
  max-width: 960px;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid ${Color.gray300};
  padding: 16px;
`

const Title = styled.div`
  ${FontVariant.body_lg}
`

export const CategoryContainer = styled.div<{ labelsOnLeft?: boolean }>`
  display: flex;
  justify-content: ${props => (props.labelsOnLeft ? 'flex-start' : 'flex-end')};
  gap: 8px;
  margin-bottom: 8px;
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
  word-break: break-word;
  color: ${Color.gray700};

  a {
    color: ${Color.gray700};
  }
  p {
    margin: 0;
  }
`

export const ReadMoreButton = styled.button`
  ${FontVariant.body_md}
  color: ${Color.orange900};
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  border: none;
  text-align: inherit;
  margin-top: 8px;
  padding: 0px;

  &:hover {
    text-decoration: underline;
  }
`

const TimelineDot = styled.div<{ labelsOnLeft?: boolean }>`
  width: 6.4%;
  height: 2px;
  background-color: ${Color.orange900};
  position: absolute;
  left: ${props => (props.labelsOnLeft ? 'calc(-3.2%)' : 'calc(100% + 3.2%)')};
  top: 28px;
  transform: translate(-50%, -50%);
  z-index: -1;

  @media (max-width: ${ScreenSize.md}) {
    display: none;
  }
`

interface Props {
  post: Post
  setModalContent: (post: Post) => void
  labelsOnLeft?: boolean
}

export const NewsCard = ({ post, setModalContent, labelsOnLeft: labelsOnLeft }: Props) => {
  const currentDate = new Date()
  const expired = post.endsAt && post.endsAt < currentDate

  return (
    <div style={{ position: 'relative' }}>
      <PostContainer>
        <CategoryContainer labelsOnLeft={labelsOnLeft}>
          {post.categories.map((category, i) => (
            <Category key={i} style={{ backgroundColor: expired ? Color.gray400 : categoryColors[category] }}>
              {category}
            </Category>
          ))}
          {expired !== undefined &&
            (expired ? (
              <Category style={{ backgroundColor: Color.gray400 }}>Closed</Category>
            ) : (
              <Category style={{ backgroundColor: Color.green300 }}>Open</Category>
            ))}
        </CategoryContainer>
        <Title>{post.title}</Title>
        <NewsDate>{post.date.toDateString().split(' ').slice(1).join(' ')}</NewsDate>
        <Summary>
          <Markdown>{post.summary}</Markdown>
        </Summary>
        {post.contentMdFilePath && (
          <ReadMoreButton
            onClick={e => {
              e.preventDefault()
              setModalContent(post)
            }}
          >
            Read More →
          </ReadMoreButton>
        )}
      </PostContainer>
      <TimelineDot labelsOnLeft={labelsOnLeft} />
    </div>
  )
}
