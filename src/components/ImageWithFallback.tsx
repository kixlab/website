import { useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'onError' | 'src'> {
  src: ImageProps['src']
  fallbackSrc: string | string[]
}

export const ImageWithFallback = ({ fallbackSrc, src, ...props }: Props) => {
  const [imageSrc, setImageSrc] = useState<ImageProps['src']>(src)
  const [errorIndex, setErrorIndex] = useState(0)

  useEffect(() => {
    setImageSrc(src)
    setErrorIndex(0)
  }, [src])

  const onError = () => {
    if (Array.isArray(fallbackSrc)) {
      if (errorIndex < fallbackSrc.length) {
        const next = fallbackSrc[errorIndex]
        setImageSrc(next)
        setErrorIndex(prev => prev + 1)
      }
      return
    }
    setImageSrc(fallbackSrc)
  }

  return <Image {...props} src={imageSrc} onError={onError} />
}
