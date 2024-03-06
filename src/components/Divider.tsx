import { Color } from '@/app/theme'

export default function Divider() {
  return (
    <hr
      style={{
        width: '100%',
        height: '1px',
        border: 'none',
        backgroundColor: Color.gray200,
      }}
    />
  )
}
