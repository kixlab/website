import { Color } from '@/app/theme'
import React from 'react'

interface Props {
  style?: React.CSSProperties
}

export const Divider = ({ style }: Props) => {
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
