'use client'

import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { Color, FontVariant, FontSize, FontWeight } from '@/app/theme'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 36px 48px;
  background-color: ${Color.gray600};
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const FooterText = styled.a`
  ${FontVariant.body_md}
  color: ${Color.white};
  text-decoration: none;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 4px 0;
  }
`

const FooterTextBold = styled.p`
  font-size: ${FontSize.body_md};
  font-weight: ${FontWeight.body_lg};
  color: ${Color.white};
  text-decoration: none;
  margin: 0;

  @media (max-width: 768px) {
    margin: 4px 0;
  }
`

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 16px;
  }
`

const LogoLink = styled.a`
  display: inline-block;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <FooterTextBold>Our Bunker</FooterTextBold>
        <FooterText href="https://goo.gl/maps/8PG4bhyMoxwS1pXH8" target="_blank">
          KAIST, N1 Room 624,
          <br />
          291 Daehak-ro, Yuseong-gu, Daejeon (34141)
          <br />
          Republic of Korea
        </FooterText>
      </FooterTextContainer>
      <FooterLogoContainer>
        <LogoLink href="http://hci.kaist.ac.kr" target="_blank">
          <Image width={81} height={50} src="/images/logo_kaist_hci_white.png" alt="The HCI KAIST Logo" />
        </LogoLink>
        <LogoLink href="https://cs.kaist.ac.kr" target="_blank">
          <Image width={148.41} height={40} src="/images/logo_kaist_soc_white.png" alt="School of Computing Logo" />
        </LogoLink>
      </FooterLogoContainer>
    </FooterContainer>
  )
}
