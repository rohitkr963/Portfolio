'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
  FaGithub, FaLinkedin, FaMapMarkerAlt, FaCode,
  FaMusic, FaTrophy, FaArrowRight,
} from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { VARIANTS } from '@/lib/design-tokens'

// ── Fun Facts carousel ──
const FUN_FACTS = [
  { icon: '🏆', text: 'Alpha Hack 2.0 Gold Medalist — National Hackathon' },
  { icon: '☕', text: 'Coffee-to-code ratio: 3 cups per feature shipped' },
  { icon: '🌐', text: 'Building for sub-500ms load times, always' },
  { icon: '📚', text: 'Currently deep-diving into system design patterns' },
  { icon: '🎯', text: '2 active engineering roles running simultaneously' },
]

function FunFactsCarousel() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % FUN_FACTS.length), 3000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="relative h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-3">
        <HiSparkles className="text-[#00F5FF]" />
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Fun Facts</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="text-3xl mb-3">{FUN_FACTS[idx].icon}</div>
          <p className="text-sm text-white/70 leading-relaxed font-body">{FUN_FACTS[idx].text}</p>
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="flex gap-1.5 mt-4">
        {FUN_FACTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === idx ? 'w-6 bg-[#00F5FF]' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ── GitHub latest commit ──
function GitHubActivity() {
  const [commit, setCommit] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const repos = ['Doctor-Connect', 'Rider-Go-Web', 'AirBnb-project']
    const random = repos[Math.floor(Math.random() * repos.length)]
    fetch(`https://api.github.com/repos/rohitkr963/${random}/commits?per_page=1`)
      .then(r => r.json())
      .then(data => {
        if (data[0]) {
          setCommit({
            message: data[0].commit.message.split('\n')[0].slice(0, 60),
            repo: random,
            time: new Date(data[0].commit.author.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
          })
        }
      })
      .catch(() => setCommit({ message: 'Building something great...', repo: 'Portfolio', time: 'Today' }))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <FaGithub className="text-white/60" />
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Currently Building</span>
      </div>
      {loading ? (
        <div className="flex-1 space-y-2">
          <div className="h-3 rounded shimmer bg-white/10 w-3/4" />
          <div className="h-3 rounded shimmer bg-white/10 w-1/2" />
        </div>
      ) : commit ? (
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-semibold">{commit.repo}</span>
          </div>
          <p className="text-sm text-white/80 font-mono leading-snug mb-2">
            "{commit.message}"
          </p>
          <span className="text-xs text-white/35">{commit.time}</span>
        </div>
      ) : null}
    </div>
  )
}

// ── India SVG map (simplified outline) ──
function IndiaMapCard() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <FaMapMarkerAlt className="text-[#EC4899]" />
        <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Location</span>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        {/* Simplified India SVG */}
        <svg viewBox="0 0 200 220" className="w-28 h-28 opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 10 C60 10 30 30 20 60 C10 90 15 120 25 140 C40 165 60 180 80 200 C90 210 100 215 100 215 C100 215 110 210 120 200 C140 180 160 165 175 140 C185 120 190 90 180 60 C170 30 140 10 100 10Z"
            stroke="rgba(0,245,255,0.5)"
            strokeWidth="2"
            fill="rgba(0,245,255,0.05)"
          />
          {/* Haryana dot */}
          <circle cx="90" cy="75" r="4" fill="#00F5FF">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="90" cy="75" r="10" fill="rgba(0,245,255,0.15)">
            <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-white/80">Haryana, India</p>
        <p className="text-xs text-white/35">IST · UTC+5:30</p>
      </div>
    </div>
  )
}

// ── Bento Card wrapper ──
const BentoCard = ({ children, className = '', delay = 0, ...props }) => {
  return (
    <motion.div
      custom={delay}
      variants={VARIANTS.scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`glass rounded-3xl p-6 border border-white/8 hover:border-[#00F5FF]/20 transition-all duration-500 ${className}`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── Main About Component ──
const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #050810, #080c18, #050810)' }}
    >
      {/* Section bg decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          ref={ref}
          variants={VARIANTS.fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 border border-white/10 mb-6"
          >
            <HiSparkles className="text-[#00F5FF]" />
            <span className="text-sm font-semibold gradient-text tracking-wide">Get To Know Me</span>
          </motion.div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
          >
            <span className="text-white/90">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto font-body">
            Developer, builder, and problem-solver from India — turning ideas into scalable products.
          </p>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* Card 1 — Photo + Name (large, spans 2 cols) */}
          <BentoCard delay={0} className="lg:col-span-2 md:col-span-2 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl"
                style={{ boxShadow: '0 0 40px rgba(0,245,255,0.15)' }}>
                <Image
                  src="/rohit-photo.jpg"
                  alt="Rohit Kumar"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Online indicator */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#050810] animate-pulse" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-white/90 mb-1"
                style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
              >
                Rohit Kumar
              </h3>
              <p className="gradient-text font-semibold text-base mb-3">Full Stack Developer</p>
              <p className="text-sm text-white/50 leading-relaxed font-body mb-4 max-w-sm">
                Building scalable web applications with clean code and creative design.
                Passionate about performance, developer experience, and continuous learning.
              </p>
              {/* Quote */}
              <blockquote className="text-xs text-white/35 italic border-l-2 border-[#00F5FF]/40 pl-3 font-body">
                "Code is poetry — every function tells a story."
              </blockquote>
              {/* Social links */}
              <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                {[
                  { href: 'https://github.com/rohitkr963', icon: FaGithub, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/rohit-kumar-577572292/', icon: FaLinkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-9 h-9 glass rounded-xl border border-white/10 hover:border-[#00F5FF]/40 flex items-center justify-center text-white/50 hover:text-[#00F5FF] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#050810] transition-all"
                  style={{ background: 'linear-gradient(135deg, #00F5FF, #7C3AED)' }}
                >
                  Let's Work <FaArrowRight size={10} />
                </motion.a>
              </div>
            </div>
          </BentoCard>

          {/* Card 2 — GitHub Activity */}
          <BentoCard delay={0.1} className="min-h-[180px]">
            <GitHubActivity />
          </BentoCard>

          {/* Card 3 — Location */}
          <BentoCard delay={0.2} className="min-h-[200px]">
            <IndiaMapCard />
          </BentoCard>

          {/* Card 4 — Fun Facts */}
          <BentoCard delay={0.3} className="min-h-[200px]">
            <FunFactsCarousel />
          </BentoCard>

          {/* Card 5 — Music */}
          <BentoCard delay={0.4} className="min-h-[160px]">
            <div className="flex items-start gap-3 mb-4">
              <FaMusic className="text-[#EC4899] mt-0.5 flex-shrink-0" />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Music I Code To</span>
            </div>
            <div className="space-y-2">
              {[
                { title: 'Synthwave Playlist', mood: 'Late night coding' },
                { title: 'Lo-Fi Hip Hop', mood: 'Deep focus mode' },
                { title: 'Phonk Hits', mood: 'Debugging sessions' },
              ].map((track, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(236,72,153,${0.15 + i * 0.05})` }}>
                    <FaMusic size={10} className="text-[#EC4899]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/70">{track.title}</p>
                    <p className="text-[10px] text-white/30">{track.mood}</p>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 6 — Open to Work Status */}
          <BentoCard delay={0.5}>
            <div className="flex items-center gap-2 mb-4">
              <HiLightningBolt className="text-[#00F5FF]" />
              <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">Status</span>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Full-time Roles', status: 'Open', color: 'bg-green-400' },
                { label: 'Freelance', status: 'Available', color: 'bg-[#00F5FF]' },
                { label: 'Collaboration', status: 'Always Open', color: 'bg-[#7C3AED]' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-white/50 font-body">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.color} animate-pulse`} />
                    <span className="text-xs font-semibold text-white/70">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

        </div>

        {/* About text below bento */}
        <motion.div
          variants={VARIANTS.fadeUp}
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 glass rounded-3xl p-8 md:p-10 border border-white/8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3
                className="text-xl font-bold text-white/90 mb-4"
                style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
              >
                Dedicated Developer & Problem Solver
              </h3>
              <p className="text-white/50 leading-relaxed text-sm font-body mb-4">
                Hello! I'm Rohit, a dedicated developer with a strong passion for creating efficient
                and user-friendly web applications. I enjoy learning new technologies, solving complex
                problems, and building clean, maintainable solutions that make a real impact.
              </p>
              <p className="text-white/50 leading-relaxed text-sm font-body">
                I have a solid understanding of full-stack development and love working on both
                the front-end and back-end to bring ideas to life. Clean code, continuous learning,
                and staying adaptable in a fast-changing tech world — that's my philosophy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '8.56', label: 'CGPA (BCA)', icon: '🎓' },
                { value: '2', label: 'Active Roles', icon: '💼' },
                { value: '3+', label: 'Projects Shipped', icon: '🚀' },
                { value: '15+', label: 'Technologies', icon: '⚡' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 border border-white/8 text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-extrabold gradient-text mb-0.5"
                    style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
                  >{stat.value}</div>
                  <div className="text-xs text-white/35 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
