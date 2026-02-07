import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import GlobalStyles from '@/app/GlobalStyles'
import EmotionRegistry from '@/app/EmotionRegistry'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'KIXLAB',
  description: 'KIXLAB is a human-computer interaction research group in the School of Computing at KAIST.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'KIXLAB',
    description: 'KIXLAB is a human-computer interaction research group in the School of Computing at KAIST.',
    url: 'https://www.kixlab.org',
    images: [
      {
        url: 'https://www.kixlab.org/images/logo_preview.png',
        width: 1200,
        height: 630,
        alt: 'KIXLAB Logo Preview Image',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <EmotionRegistry>
          <GlobalStyles />
          <NavBar />
          {children}
          <Footer />
        </EmotionRegistry>
      </body>
      <GoogleAnalytics gaId="G-WY6K7SWSCE" />
    </html>
  )
}
