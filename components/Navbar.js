'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  HiHome, HiUser, HiCode, HiBriefcase, HiAcademicCap, HiMail,
} from 'react-icons/hi'
import DarkModeToggle from './DarkModeToggle'

const NAV_ITEMS = [
  { name: 'Home',        href: '#home',         icon: HiHome },
  { name: 'About',       href: '#about',         icon: HiUser },
  { name: 'Skills',      href: '#skills',        icon: HiCode },
  { name: 'Projects',    href: '#projects',      icon: HiBriefcase },
  { name: 'Experience',  href: '#experience',    icon: HiBriefcase },
  { name: 'Education',   href: '#education',     icon: HiAcademicCap },
  { name: 'Achievements',href: '#achievements',  icon: null },
  { name: 'Contact',     href: '#contact',       icon: HiMail },
]

const MOBILE_NAV = [
  { name: 'Home',      href: '#home',      icon: HiHome },
  { name: 'About',     href: '#about',     icon: HiUser },
  { name: 'Projects',  href: '#projects',  icon: HiBriefcase },
  { name: 'Skills',    href: '#skills',    icon: HiCode },
  { name: 'Contact',   href: '#contact',   icon: HiMail },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      // Active section detection
      const sections = NAV_ITEMS.map(i => i.href.replace('#', ''))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled
            ? 'py-2 border-b border-white/8'
            : 'py-4'
        }`}
        style={{
          background: scrolled
            ? 'rgba(5,8,16,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">

            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.04 }}
              className="font-display text-xl font-bold gradient-text"
              style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
            >
              RK
            </motion.a>

            {/* Nav links */}
            <div className="flex items-center gap-1">
              {NAV_ITEMS.slice(0, 7).map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium font-body rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#00F5FF]'
                        : 'text-white/50 hover:text-white/90'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[#00F5FF] to-[#7C3AED] rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/rohitkr963"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.15, y: -1 }}
                className="text-white/40 hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohit-kumar-577572292/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, y: -1 }}
                className="text-white/40 hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin size={18} />
              </motion.a>

              {/* Hire Me CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-[#050810] transition-all duration-300 pulse-glow"
                style={{
                  background: 'linear-gradient(135deg, #00F5FF, #7C3AED)',
                  boxShadow: '0 0 20px rgba(0,245,255,0.2)',
                }}
              >
                Hire Me ✨
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE BOTTOM NAV ── */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{
          background: 'rgba(5,8,16,0.9)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="flex items-center justify-around px-2 py-2 pb-safe">
          {MOBILE_NAV.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200"
              >
                <motion.div
                  animate={{
                    color: isActive ? '#00F5FF' : 'rgba(255,255,255,0.4)',
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon size={22} />
                </motion.div>
                <span
                  className="text-[10px] font-body transition-colors duration-200"
                  style={{ color: isActive ? '#00F5FF' : 'rgba(255,255,255,0.35)' }}
                >
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-dot"
                    className="absolute top-1 w-1 h-1 rounded-full bg-[#00F5FF]"
                    transition={{ type: 'spring', stiffness: 400 }}
                  />
                )}
              </a>
            )
          })}
        </div>
      </motion.nav>

      {/* Bottom nav spacer on mobile */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  )
}

export default Navbar
