'use client'

import React, { useState } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export default function EmotionRegistry({ children }: Props) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css', prepend: true })
    cache.compat = true
    return cache
  })

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted)
    const names = entries.map(([name]) => name).join(' ')
    let styles = ''

    for (const [, value] of entries) {
      if (typeof value === 'string') {
        styles += value
      }
    }

    return <style data-emotion={`${cache.key} ${names}`} dangerouslySetInnerHTML={{ __html: styles }} />
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
