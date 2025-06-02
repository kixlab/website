'use client'
import Image from 'next/image'
import { Color, ScreenSize, linearlyScaleSize, FontVariant } from '@/app/theme'
import styled from '@emotion/styled'
import React from 'react'
import { Section } from './Styles'
import Link from 'next/link'
import { GROUPPHOTOS } from '@/data/groupPhotos'

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  // TODO: Decide whether to keep gap
  // gap: 24px;

  @media (max-width: ${ScreenSize.md}) {
    flex-direction: column;
    gap: 0px;
  }
`

const HeroTextArea = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: ${linearlyScaleSize({
    minSizePx: 48,
    maxSizePx: 96,
    minScreenSizePx: parseInt(ScreenSize.md),
    maxScreenSizePx: parseInt(ScreenSize.lg),
  })};
`

const HeroTitle = styled.h1`
  // TODO: Try to make the responsive font-size more systematic. This is a temporary fix.
  ${FontVariant.title_xl}
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: ${ScreenSize.md}) {
    align-self: center;
    text-align: center;
  }
`

const HeroSubtitle = styled.h2`
  font-size: 1.375rem;
  font-weight: 300;
  margin-bottom: 8px;

  @media (max-width: ${ScreenSize.md}) {
    align-self: center;
    text-align: center;
  }
`
const HeroMessage = styled.p`
  ${FontVariant.body_md}
  color: ${Color.gray700};
  text-align: left;
  max-width: 100%;
  @media (max-width: ${ScreenSize.md}) {
    text-align: center;
  }
`

const HeroImageContainer = styled.div`
  flex-basis: 50%;
  position: relative;
  z-index: 0;
  @media (max-width: ${ScreenSize.md}) {
    // TODO: Set the min-height more systematically. This is a temporary fix.
    min-height: 30vh;
  }
`
export const HeroSection = () => {
  return (
    <Section id="hero-section" style={{ padding: '0' }}>
      {/* padding: 0 is to allow image to stretch to the right side of the webpage*/}
      <HeroContainer>
        <HeroTextArea id="hero-text-area">
          <HeroTitle>
            WELCOME TO <span style={{ color: `${Color.orange900}`, paddingRight: '7px' }}>KIXLAB</span>!
          </HeroTitle>
          <HeroSubtitle>
            Research of <br /> <strong style={{ fontWeight: '700' }}>Human-Computer Interaction</strong> at Scale
          </HeroSubtitle>
          <HeroMessage>
            The KAIST Interaction Lab (KIXLAB) is a human-computer interaction research group in the School of Computing
            at KAIST. Our mission is to improve ways people learn, collaborate, discuss, make decisions, and take action
            online by designing new interactive systems that leverage and support interaction at scale.
          </HeroMessage>
        </HeroTextArea>
        <HeroImageContainer id="hero-image-container">
          <Link href="/gallery">
            <Image
              id="hero-image"
              src={`/group/${GROUPPHOTOS[0].filename}`}
              alt="KIXLAB group picture"
              fill={true}
              priority
              style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Link>
        </HeroImageContainer>
      </HeroContainer>
    </Section>
  )
}
