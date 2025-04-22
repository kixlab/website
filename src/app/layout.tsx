import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Script from 'next/script'

import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import GlobalStyles from '@/app/GlobalStyles'

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WY6K7SWSCE" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-WY6K7SWSCE', {
        page_path: window.location.pathname,
      });
    `}
      </Script>
      <body className={notoSans.className}>
        <GlobalStyles />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
