import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { useInView } from 'react-intersection-observer'

export const ImageWithFallback = ({ fallbackSrc, ...props }: { fallbackSrc: string } & ImageProps) => {
  const [imageSrc, setImageSrc] = useState(props.src)
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  })

  const onError = () => {
    setImageSrc(fallbackSrc)
  }

  return <div ref={ref}>{inView ? <Image {...props} src={imageSrc} alt={props.alt} onError={onError} /> : null}</div>
}
