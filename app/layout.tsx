import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import { CtaProvider } from '@/components/CtaProvider'
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
          <CtaProvider>
            <AnnouncementBanner />
            <Header />
            <main>{children}</main>
            <Footer />
          </CtaProvider>
        </LanguageProvider>
        <Script id="klara-config" strategy="afterInteractive">
          {`window.klaraWidget = window.klaraWidget || [];
window.klaraWidget.push(["setWidgetId", "75ccd56b-a75e-48b8-a127-abe5e2e797c5"]);`}
        </Script>
        <Script src="https://widget-fe.klara.com/bundle.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
