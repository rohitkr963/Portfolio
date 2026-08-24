'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FaDownload, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'
import MagneticButton from './MagneticButton'
import ResumeModal from './ResumeModal'

const GalaxyBackground = dynamic(() => import('./GalaxyBackground'), { ssr: false })

function useScramble(text, trigger) {
  const [displayed, setDisplayed] = useState(text)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'
  const frameRef = useRef(null)

  const scramble = useCallback(() => {
    let iteration = 0
    const totalFrames = text.length * 3
    clearInterval(frameRef.current)
    frameRef.current = setInterval(() => {
      setDisplayed(
        text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < iteration / 3) return text[i]
          return chars[Math.floor(Math.random() * chars.length)]
        }).join('')
      )
      if (iteration >= totalFrames) clearInterval(frameRef.current)
      iteration++
    }, 30)
  }, [text])

  useEffect(() => { scramble() }, [])
  useEffect(() => () => clearInterval(frameRef.current), [])

  return { displayed, scramble }
}

function ISTClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(
      new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata', hour: '2-digit',
        minute: '2-digit', second: '2-digit', hour12: true,
      })
    )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="font-mono tabular-nums">{time} IST</span>
}

const CODE_LINES = [
  { text: '// Doctor-Connect · Real-time', color: 'rgba(100,220,100,0.7)' },
  { text: 'const joinRoom = async (id) => {', color: '#00F5FF' },
  { text: "  await socket.emit('join', { id })", color: 'rgba(240,244,255,0.75)' },
  { text: '  const peer = new RTCPeerConnection()', color: 'rgba(240,244,255,0.75)' },
  { text: '  peer.ontrack = ({ streams }) => {', color: '#00F5FF' },
  { text: '    remote.srcObject = streams[0]', color: 'rgba(240,244,255,0.75)' },
  { text: '  }', color: 'rgba(240,244,255,0.75)' },
  { text: '  return peer', color: '#EC4899' },
  { text: '}', color: 'rgba(240,244,255,0.75)' },
]

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-5 font-mono text-xs leading-relaxed border border-white/10 hover:border-[#00F5FF]/30 transition-all duration-500"
    >
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-white/25 text-[10px]">doctor-connect.js</span>
      </div>
      {CODE_LINES.map((line, i) => (
        <div key={i} className="flex gap-3">
          <span className="text-white/20 select-none w-4 text-right flex-shrink-0">{i + 1}</span>
          <span className="whitespace-pre" style={{ color: line.color }}>{line.text}</span>
        </div>
      ))}
    </motion.div>
  )
}

const STATS = [
  { value: '2', label: 'Active Roles', icon: '💼' },
  { value: '8.56', label: 'CGPA', icon: '🎓' },
  { value: '15+', label: 'Technologies', icon: '⚡' },
  { value: '3+', label: 'Projects', icon: '🚀' },
]

const TECH_STRIP = [
  'React.js', 'Node.js', 'Next.js', 'MongoDB', 'Express.js',
  'TypeScript', 'Tailwind CSS', 'REST APIs', 'Socket.io', 'WebRTC',
  'Docker', 'Git', 'JWT', 'Postman', 'Vercel',
]

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { displayed, scramble } = useScramble('Rohit Kumar', true)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden mesh-gradient grain-overlay">
      {mounted && !isMobile && (
        <div className="absolute inset-0 three-container">
          <GalaxyBackground />
        </div>
      )}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.035] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-24">
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">

          {/* LEFT */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 border border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-sm font-semibold text-green-400">Available for Work</span>
              </div>
              <div className="glass rounded-full px-4 py-2 text-xs text-white/50 border border-white/8">
                🕐 {mounted && <ISTClock />}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}>
              <h1
                className="font-display text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none cursor-pointer select-none gradient-text"
                onClick={scramble}
                title="Click to scramble ✨"
                style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
              >
                {displayed}
              </h1>
              <p className="mt-2 text-[11px] text-white/20 font-body">(click to scramble)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl md:text-3xl font-display font-semibold text-white/75 h-10 flex items-center"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer 💻', 2000,
                  'MERN Stack Engineer 🚀', 2000,
                  'API Architect ⚡', 2000,
                  'UI/UX Craftsman 🎨', 2000,
                  'Problem Solver 🧩', 2000,
                ]}
                wrapper="span"
                speed={55}
                className="gradient-text"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base text-white/50 max-w-lg leading-relaxed font-body"
            >
              Building scalable web applications using React.js, Node.js, Express.js & MongoDB.
              Currently shipping real products at{' '}
              <span className="text-[#00F5FF] font-semibold">BlackCoffer</span> &{' '}
              <span className="text-[#7C3AED] font-semibold">Mobiloitte Technologies</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-[#050810] overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00F5FF, #7C3AED)', boxShadow: '0 0 30px rgba(0,245,255,0.25)' }}
              >
                <span className="relative z-10">View My Work</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </MagneticButton>

              <motion.button
                onClick={() => setIsResumeModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm glass border border-white/10 hover:border-[#00F5FF]/40 text-white/80 hover:text-white transition-all duration-300"
              >
                <FaDownload className="text-[#00F5FF]" />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-5"
            >
              {[
                { href: 'https://github.com/rohitkr963', icon: FaGithub, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/rohit-kumar-577572292/', icon: FaLinkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="text-white/40 hover:text-[#00F5FF] transition-colors duration-200"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
              <div className="h-4 w-px bg-white/15" />
              <span className="text-xs text-white/25 font-body">rohit737heye@gmail.com</span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="glass rounded-2xl p-4 border border-white/8 hover:border-[#00F5FF]/25 transition-all duration-300 text-center cursor-default"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-display text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-white/40 font-body mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            <CodeCard />
          </div>
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-xs text-white/25 font-body tracking-widest uppercase">Tech Stack</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />
            <div className="marquee-track">
              {[...TECH_STRIP, ...TECH_STRIP].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 mx-6 text-sm text-white/40 hover:text-[#00F5FF] transition-colors duration-200 whitespace-nowrap cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#00F5FF]/40" />
                  <span className="font-body">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/25 font-body tracking-widest uppercase">scroll to explore</span>
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-white/25 hover:text-[#00F5FF] transition-colors duration-200"
            aria-label="Scroll down"
          >
            <HiChevronDown size={26} />
          </motion.button>
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  )
}

export default Hero