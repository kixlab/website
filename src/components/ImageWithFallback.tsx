import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

export const ImageWithFallback = ({ fallbackSrc, ...props }: { fallbackSrc: string } & ImageProps) => {
  const [imageSrc, setImageSrc] = useState(props.src)

  const onError = () => {
    setImageSrc(fallbackSrc)
  }

  return <Image {...props} src={imageSrc} alt={props.alt} onError={onError} />
}
