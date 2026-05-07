'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaTimes } from 'react-icons/fa'

export default function HireMeBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    const handleScroll = () => {
      // Show banner after 30% scroll
      const scrollPosition = window.scrollY
      const documentHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollPosition / documentHeight) * 100

      if (scrollPercentage > 30 && scrollPercentage < 90) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-4 glass rounded-full p-2 pl-6 pr-2 border border-[#00F5FF]/30 shadow-2xl"
          style={{ boxShadow: '0 10px 40px rgba(0,245,255,0.15)' }}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="text-sm font-semibold text-white/90 font-body">Available for new opportunities</span>
          </div>
          
          <div className="flex items-center gap-2 border-l border-white/10 pl-4">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-xs font-bold text-[#050810] flex items-center gap-2 hover:gap-3 transition-all"
              style={{ background: 'linear-gradient(135deg, #00F5FF, #7C3AED)' }}
            >
              Let's Talk <FaArrowRight size={10} />
            </a>
            <button
              onClick={() => setIsDismissed(true)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Dismiss"
            >
              <FaTimes size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
