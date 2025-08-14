import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jesus Club - CU Boulder | Student Run. No Dues. Join our Club!',
  description: 'Jesus Club is a student-led community at CU Boulder where friendships grow through faith and service. Join us for weekly hangouts and monthly service events.',
  keywords: 'Jesus Club, CU Boulder, Christian, student organization, community service, faith, friendship',
  authors: [{ name: 'Jesus Club CU Boulder' }],
  creator: 'Jesus Club CU Boulder',
  publisher: 'Jesus Club CU Boulder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jesusclub.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jesus Club - CU Boulder',
    description: 'Student Run. No Dues. Join our Club!',
    url: 'https://jesusclub.org',
    siteName: 'Jesus Club CU Boulder',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jesus Club CU Boulder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesus Club - CU Boulder',
    description: 'Student Run. No Dues. Join our Club!',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6C5CE7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
