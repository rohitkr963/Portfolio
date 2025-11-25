import { Inter } from 'next/font/google'
import './globals.css'
import SplashCursor from '@/components/SplashCursor'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://portfolio-rohitkr963.vercel.app'),
  title: 'Rohit Kumar | Full Stack Developer',
  description: 'Portfolio of Rohit Kumar, a Full Stack Developer specializing in MERN stack, React, and Next.js.',
  openGraph: {
    title: 'Rohit Kumar | Full Stack Developer',
    description: 'Portfolio of Rohit Kumar, a Full Stack Developer specializing in MERN stack, React, and Next.js.',
    url: 'https://portfolio-rohitkr963.vercel.app',
    siteName: 'Rohit Kumar Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Rohit Kumar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
    google: 'PLACEHOLDER_CODE',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <SplashCursor />
        {children}
      </body>
    </html>
  )
}
