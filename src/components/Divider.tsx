import { Color } from '@/app/theme'
import React from 'react'

interface DividerProps {
  style?: React.CSSProperties
}

export default function Divider({ style }: DividerProps) {
  return (
    <hr
      style={{
        width: '100%',
        height: '1px',
        border: 'none',
        backgroundColor: Color.gray200,
        ...style,
      }}
    />
  )
}
