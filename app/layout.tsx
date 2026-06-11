import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnnouncementBanner from '@/components/AnnouncementBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vintage Family Medicine and Pediatrics',
    template: '%s | Vintage Family Medicine and Pediatrics',
  },
  description:
    'Patient-centric, evidence-based, compassionate care in Lewisville, TX. Direct Primary Care, video visits, same-day appointments.',
  openGraph: {
    type: 'website',
    siteName: 'Vintage Family Medicine and Pediatrics',
    title: 'Vintage Family Medicine and Pediatrics',
    description:
      'Patient-centric, evidence-based, compassionate care in Lewisville, TX.',
  },
  twitter: {
    card: 'summary',
    title: 'Vintage Family Medicine and Pediatrics',
    description:
      'Patient-centric, evidence-based, compassionate care in Lewisville, TX.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <AnnouncementBanner />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
