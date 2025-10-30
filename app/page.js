'use client'

import { useState, useEffect, Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'

// Critical components - loaded immediately (above the fold)
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SmoothScroll from '../components/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'

// Lazy load components below the fold with dynamic imports
const About = dynamic(() => import('../components/About'), {
  loading: () => <ComponentSkeleton />,
  ssr: true // Enable SSR for SEO
})

const Stats = dynamic(() => import('../components/Stats'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Skills = dynamic(() => import('../components/Skills'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Experience = dynamic(() => import('../components/Experience'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Education = dynamic(() => import('../components/Education'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Achievements = dynamic(() => import('../components/Achievements'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Certificates = dynamic(() => import('../components/Certificates'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <ComponentSkeleton />,
  ssr: true
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <ComponentSkeleton height="h-32" />,
  ssr: true
})

const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'), {
  ssr: false // Client-only component
})

// Loading skeleton component
function ComponentSkeleton({ height = 'h-screen' }) {
  return (
    <div className={`${height} w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse flex items-center justify-center`}>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="text-center relative z-10">
          {/* Animated Logo */}
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 border-r-purple-600 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-transparent border-t-purple-600 border-r-pink-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">RK</span>
              </div>
            </div>
          </div>
          
          {/* Loading Text */}
          <h2 className="text-2xl font-bold gradient-text mb-4">Loading Portfolio</h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white dark:bg-gray-900 relative">
        <ScrollProgress />
        <WhatsAppButton />
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
