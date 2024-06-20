import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'
import { Color, FontSize, FontWeight } from '@/app/theme'
import { FaArrowRight } from 'react-icons/fa'
import React from 'react'

interface LinkButtonProps {
  href: string
  text: string
  image?: string
  style?: React.CSSProperties
}

export default function LinkButton({ href, text, image, style }: LinkButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '48px',
        border: `1px solid ${Color.gray500}`,
        padding: '8px 20px',
        width: 'fit-content',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'black',
        fontSize: `${FontSize.body_md}`,
        fontWeight: `${FontWeight.title_sm}`,
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        {image && <Image src={image} alt={`${href} button`} width={20} height={20} style={{ alignSelf: 'center' }} />}
        {text}
      </div>
      <FaArrowRight />
    </Link>
  )
}
