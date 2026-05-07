'use client'

import { useState, useEffect, Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'

// Critical components - loaded immediately (above the fold)
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SmoothScroll from '../components/SmoothScroll'
import ScrollProgress from '../components/ScrollProgress'
import HireMeBanner from '../components/HireMeBanner'
import TerminalEaster from '../components/TerminalEaster'

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
    <div className={`${height} w-full bg-[#050810] animate-pulse flex items-center justify-center`}>
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-[#00F5FF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/40 font-body text-sm">Loading...</p>
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
      <div className="min-h-screen flex items-center justify-center bg-[#050810] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="text-center relative z-10">
          {/* Animated Logo */}
          <div className="mb-8">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-transparent border-t-[#00F5FF] border-r-[#7C3AED] rounded-full animate-spin"></div>
              <span className="text-2xl font-bold text-white font-display">RK</span>
            </div>
          </div>
          
          {/* Loading Text */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-[#00F5FF] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[#EC4899] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-void relative">
        <ScrollProgress />
        <WhatsAppButton />
        <HireMeBanner />
        <TerminalEaster />
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
