'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import MagneticButton from './MagneticButton'
import ResumeModal from './ResumeModal'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
})

const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
})

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openResumeModal = (e) => {
    e.preventDefault()
    setIsResumeModalOpen(true)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* 3D Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* 3D Animated Sphere - Hidden on mobile, visible on large screens */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 z-10">
        <Hero3D />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-800 mb-6"
            >
              <span className="text-sm font-semibold gradient-text">👋 Hello, I'm</span>
            </motion.div>

            {/* Name with Neon Glow */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-6 tracking-tight relative"
              style={{
                textShadow: '0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(168, 85, 247, 0.3), 0 0 120px rgba(192, 132, 252, 0.2)'
              }}
            >
              <span className="animate-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text">
                Rohit Kumar
              </span>
            </motion.h1>

            {/* Title with Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-8 font-bold h-24 md:h-32 flex items-center justify-center"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer 💻',
                  2000,
                  'MERN Stack Expert 🚀',
                  2000,
                  'Problem Solver 🧩',
                  2000,
                  'UI/UX Enthusiast 🎨',
                  2000,
                  'Tech Explorer 🔍',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code, innovative solutions, and continuous learning.
            </motion.p>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <MagneticButton
                href="#projects"
                className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-2xl shadow-purple-500/50 overflow-hidden group"
              >
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  View My Work ✨
                </motion.span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </MagneticButton>
              
              <motion.button
                onClick={openResumeModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative border-2 border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-900 dark:text-white hover:border-purple-500 dark:hover:border-purple-500 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-purple-500/20 group"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center space-x-6 mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://github.com/rohitkr963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://www.linkedin.com/in/rohit-kumar-577572292/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <HiChevronDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  )
}

export default Hero