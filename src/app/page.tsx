import dynamic from 'next/dynamic'

const loadSection = (section: string) => {
  return dynamic(() => import(`./homepage/${section}`).then(mod => mod[section]), {
    loading: () => <p>Loading...</p>,
  })
}
const HeroSection = loadSection('HeroSection')
const NewsSection = loadSection('NewsSection')
const ResearchThemesSection = loadSection('ResearchThemesSection')
const MediaSection = loadSection('MediaSection')

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
