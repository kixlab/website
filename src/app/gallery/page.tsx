'use client'

import Image from 'next/image'
import styled from '@emotion/styled'
import { FontVariant } from '../theme'
import Link from 'next/link'

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
  const images: Array<{ filename: string; description: string }> = [
    {
      filename: 'group_2024_aug.jpg',
      description: 'August, 2024',
    },
    {
      filename: 'group_2023_jul.jpg',
      description: 'July, 2023',
    },
    {
      filename: 'group_2023_mar.jpg',
      description: 'March, 2023',
    },
    {
      filename: 'group_2022_jul.jpg',
      description: 'July, 2022',
    },
    {
      filename: 'group_2022_mar.jpg',
      description: 'March, 2022',
    },
    {
      filename: 'group_2021_jul.jpg',
      description: 'July, 2021',
    },
    {
      filename: 'group_2021_mar.jpg',
      description: 'March, 2021',
    },
    {
      filename: 'group_2020_nov.jpg',
      description: 'November, 2020',
    },
    {
      filename: 'group_2020_mar.jpg',
      description: 'March, 2020',
    },
    {
      filename: 'group_2020_feb.jpg',
      description: 'February, 2020',
    },
    {
      filename: 'group_2019_aug.jpg',
      description: 'August, 2019',
    },
    {
      filename: 'group_2019_jun.jpg',
      description: 'June, 2019',
    },
    {
      filename: 'group_2019_feb.jpg',
      description: 'February, 2019',
    },
    {
      filename: 'group_2018_dec.jpg',
      description: 'December, 2018',
    },
    {
      filename: 'group_2018_aug.jpg',
      description: 'August, 2018',
    },
    {
      filename: 'group_2018_jun.jpg',
      description: 'June, 2018',
    },
    {
      filename: 'group_2018_feb.jpg',
      description: 'February, 2018',
    },
    {
      filename: 'group_2017_dec.jpg',
      description: 'December, 2017',
    },
    {
      filename: 'group_2017_jul.jpg',
      description: 'July, 2017',
    },
    {
      filename: 'group_2017_apr.jpg',
      description: 'April, 2017',
    },
    {
      filename: 'group_2017_feb.jpg',
      description: 'February, 2017',
    },
    {
      filename: 'group_2016_dec.jpg',
      description: 'December, 2016',
    },
    {
      filename: 'group_2016_aug.jpg',
      description: 'August, 2016',
    },
  ]

  return (
    <main>
      <h1>Gallery</h1>
      <Row>
        {images.map((img, idx) => (
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
