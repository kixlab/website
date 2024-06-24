import React from 'react'
import { NewsSection } from './homepage/NewsSection'
import { HeroSection } from './homepage/HeroSection'
import { ResearchThemesSection } from './homepage/ResearchThemesSection'
import { MediaSection } from './homepage/MediaSection'

export default function Page() {
  return (
    <main style={{ width: '100vw', padding: '0px', gap: '0px', alignItems: 'center' }}>
      <HeroSection></HeroSection>
      <NewsSection></NewsSection>
      <ResearchThemesSection></ResearchThemesSection>
      <MediaSection></MediaSection>
    </main>
  )
}
