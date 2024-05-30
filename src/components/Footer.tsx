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
`

const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const FooterText = styled.p<{ bold?: boolean }>`
  ${FontVariant.body_lg}
  font-weight: ${props => (props.bold ? FontWeight.body_lg : FontWeight.body_md)};
  color: ${Color.white};
  margin: 0;
`

const MapLink = styled.a`
  font-size: ${FontSize.body_lg};
  font-weight: ${FontWeight.body_md};
  color: ${Color.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const FooterLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const LogoLink = styled.a`
  display: inline-block;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <FooterText bold>Our Bunker</FooterText>
        <FooterText>KAIST, N1 Room 624,</FooterText>
        <FooterText>291 Daehak-ro, Yuseong-gu, Daejeon (34141)</FooterText>
        <FooterText>
          Republic of Korea (
          <MapLink href="https://goo.gl/maps/8PG4bhyMoxwS1pXH8" target="_blank">
            Google Map
          </MapLink>
          )
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
