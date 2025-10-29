import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rohit Kumar - Portfolio',
  description: 'Personal portfolio showcasing my projects, skills, and experience',
  keywords: ['portfolio', 'developer', 'web developer', 'react', 'nextjs'],
  authors: [{ name: 'Rohit Kumar' }],
  openGraph: {
    title: 'Rohit Kumar - Portfolio',
    description: 'Personal portfolio showcasing my projects, skills, and experience',
    type: 'website',
  },
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
