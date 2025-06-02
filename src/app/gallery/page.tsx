'use client'

import Image from 'next/image'
import styled from '@emotion/styled'
import { FontVariant } from '../theme'
import Link from 'next/link'
import { GROUPPHOTOS } from '@/data/groupPhotos'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 32px;
`

const Col = styled.div`
  flex: 1 1 100%;
  max-width: 100%;
  @media (min-width: 768px) {
    flex: 1 1 48%;
    max-width: 48%;
  }
  text-align: center;
`

const StyledImage = styled(Image)`
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  width: 100%;
  height: auto;
  display: block;
`

const ImageSubtitle = styled.p`
  margin-top: 8px;
  ${FontVariant.title_sm}
`

export default function GalleryPage() {
  return (
    <main>
      <h1>Gallery</h1>
      <Row>
        {GROUPPHOTOS.map((img, idx) => (
          <Col key={idx}>
            <Link href={`/group/${img.filename}`} target="_blank" rel="noopener noreferrer">
              <StyledImage
                src={`/group/${img.filename}`}
                alt={img.description}
                width={400}
                height={300}
                layout="responsive"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx < 2}
                style={{ objectFit: 'cover', aspectRatio: '8 / 5' }}
              />
            </Link>
            <ImageSubtitle>{img.description}</ImageSubtitle>
          </Col>
        ))}
      </Row>
    </main>
  )
}
