import { Inter } from 'next/font/google'
import './globals.css'
import SplashCursor from '@/components/SplashCursor'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://rohitxdev-portfolio.netlify.app'),
  title: 'Rohit Kumar | Full Stack Developer & Software Engineer',
  description:
    'Portfolio of Rohit Kumar — Full Stack Developer specializing in MERN stack, React.js, Next.js, Node.js, and REST APIs. Currently working at Mobiloitte Technologies & Fraylon Technologies.',
  keywords: [
    'Rohit Kumar',
    'Full Stack Developer',
    'MERN Stack',
    'React Developer',
    'Next.js',
    'Node.js',
    'Software Engineer',
    'Web Developer India',
    'Portfolio',
    'JavaScript Developer',
  ],
  authors: [{ name: 'Rohit Kumar', url: 'https://rohitxdev-portfolio.netlify.app' }],
  creator: 'Rohit Kumar',
  openGraph: {
    title: 'Rohit Kumar | Full Stack Developer & Software Engineer',
    description:
      'Portfolio of Rohit Kumar — MERN Stack Developer building scalable web applications with React, Node.js, and modern cloud tools.',
    url: 'https://rohitxdev-portfolio.netlify.app',
    siteName: 'Rohit Kumar Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Rohit Kumar – Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Kumar | Full Stack Developer',
    description: 'MERN Stack Developer | React, Node.js, Next.js | Open to Opportunities',
    images: ['/opengraph-image.png'],
    creator: '@rohitkr963',
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
  alternates: {
    canonical: 'https://rohitxdev-portfolio.netlify.app',
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
