import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true,
})

export const metadata = {
  metadataBase: new URL('https://rohitkr963.vercel.app'), // Update with your actual domain
  
  title: {
    default: 'Rohit Kumar - Full Stack Developer | Portfolio',
    template: '%s | Rohit Kumar'
  },
  
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore my projects, skills, and professional experience in web development.',
  
  keywords: [
    'Rohit Kumar',
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack',
    'Portfolio',
    'Web Development',
    'Software Engineer',
    'MongoDB',
    'Express.js',
    'Tailwind CSS',
    'Three.js',
    'Framer Motion'
  ],
  
  authors: [{ 
    name: 'Rohit Kumar',
    url: 'https://github.com/rohitkr963'
  }],
  
  creator: 'Rohit Kumar',
  publisher: 'Rohit Kumar',
  
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
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rohitkr963.vercel.app',
    siteName: 'Rohit Kumar Portfolio',
    title: 'Rohit Kumar - Full Stack Developer | Portfolio',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore my projects, skills, and professional experience.',
    images: [
      {
        url: '/og-image.jpg', // Create this image in public folder (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: 'Rohit Kumar - Full Stack Developer',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Kumar - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.',
    creator: '@rohitkr963',
    images: ['/og-image.jpg'],
  },
  
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://rohitkr963.vercel.app',
  },
  
  category: 'technology',
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

