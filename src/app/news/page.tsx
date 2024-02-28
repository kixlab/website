'use client'

import { useState } from 'react'
import NewsCard from '@/components/NewsCard'
import { NewsLine, NewsSection } from '@/components/Section'
import Post, { POSTS } from '@/data/posts'
import NewsModal from '@/components/NewsModal'

export default function Page() {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState<Post | null>(null)

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>News</h1>
      <NewsSection>
        <NewsLine />
        {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
          ({ title, date, categories, summary, content, endsAt }, i) => (
            <NewsCard
              key={i}
              post={{
                title,
                date,
                categories,
                summary,
                content,
                endsAt,
              }}
              position={i % 2 === 0 ? 'left' : 'right'}
              setModal={setModal}
              setModalContent={setModalContent}
            />
          )
        )}
      </NewsSection>
      <div
        style={{
          display: modal ? 'block' : 'none',
        }}
      >
        <NewsModal post={modalContent} onClose={() => setModal(false)} />
      </div>
    </main>
  )
}
