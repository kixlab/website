'use client'
import Image from 'next/image'
import { Color, ScreenSize, linearlyScaleSize } from '@/app/theme'
import styled from '@emotion/styled'
import React from 'react'
import { Section } from './Styles'

export const HeroSection = () => {
  const RespFontSize = {
    title_xl: '2.25rem',
    title_lg: '1.75rem',
    title_sm: '1rem',
  } as const

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
      })}
      ${linearlyScaleSize({
        minSizePx: 48,
        maxSizePx: 96,
        minScreenSizePx: parseInt(ScreenSize.md),
        maxScreenSizePx: parseInt(ScreenSize.lg),
      })};
  `

  const HeroTitle = styled.h1`
    // TODO: Try to make the responsive font-size more systematic. This is a temporary fix.
    font-size: clamp(2rem, 1vw + 2rem, 3.5rem);
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
    font-size: clamp(1.25rem, 0.3125 + 4.17vw, 2.5rem);
    font-weight: 300;
    margin-bottom: 32px;

    @media (max-width: ${ScreenSize.md}) {
      align-self: center;
      text-align: center;
    }
  `
  const HeroMessage = styled.p`
    font-size: clamp(1rem, 0.65vw + 0.5rem, 2rem);
    color: ${Color.gray700};
    text-align: justify;
    max-width: 100%;
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
          <Image
            id="hero-image"
            src={'/images/hero-image.webp'}
            alt="Kixlab group picture"
            fill={true}
            priority
            style={{ position: 'absolute', objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </HeroImageContainer>
      </HeroContainer>
    </Section>
  )
}
