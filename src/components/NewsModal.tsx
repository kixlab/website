import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Color, FontVariant } from '@/app/theme'
import { Category, CategoryContainer, NewsDate, categoryColors } from './NewsCard'
import Post from '@/data/posts'
import Markdown from 'react-markdown'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  width: 70%;
  background-color: ${Color.white};
  padding: 48px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-bottom: 8px;
`

const Title = styled.div`
  ${FontVariant.title_md}
  padding-top: 4px;
`

const Close = styled.div`
  cursor: pointer;
  ${FontVariant.title_sm}
`

const Content = styled.div`
  ${FontVariant.body_md}
  color: ${Color.black};
  img {
    max-width: 100%;
  }
  a {
    color: ${Color.black};
  }
`

export default function NewsModal({ post, onClose }: { post: Post | null; onClose: () => void }) {
  const [mdContent, setMdContent] = React.useState<string | null>(null)
  if (!post) {
    return null
  } else {
    const currentDate = new window.Date()
    const open = post.endsAt && post.endsAt > currentDate
    const closed = post.endsAt && post.endsAt < currentDate

    fetch(`/posts/${post.contentMdFilePath}`)
      .then((response) => response.text())
      .then((text) => {
        const div = document.createElement('div')
        div.innerHTML = text
        setMdContent(div.textContent)
      })

    return (
      <ModalContainer>
        <ModalCard>
          <Header>
            <div>
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
            </div>
            <Close onClick={onClose}>
              <Image src="/images/close.svg" alt="Close" width="24" height="24" />
            </Close>
          </Header>

          <NewsDate style={{ marginBottom: '8px' }}>{post.date.toDateString()}</NewsDate>
          <Content>
            <Markdown>{mdContent}</Markdown>
          </Content>
        </ModalCard>
      </ModalContainer>
    )
  }
}
