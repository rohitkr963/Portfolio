'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaDatabase, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiTypescript } from 'react-icons/si'
import { VARIANTS } from '@/lib/design-tokens'

// ── Skill data with proficiency ──
const SKILL_TABS = {
  Frontend: {
    color: '#00F5FF',
    colorDim: 'rgba(0,245,255,0.12)',
    skills: [
      { name: 'React.js',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',      level: 90, projects: 4 },
      { name: 'Next.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',    level: 85, projects: 2 },
      { name: 'JavaScript',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 92, projects: 6 },
      { name: 'TypeScript',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 70, projects: 2 },
      { name: 'Tailwind CSS',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 88, projects: 4 },
      { name: 'HTML5',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',      level: 95, projects: 6 },
      { name: 'CSS3',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',        level: 90, projects: 6 },
    ],
  },
  Backend: {
    color: '#7C3AED',
    colorDim: 'rgba(124,58,237,0.12)',
    skills: [
      { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',  level: 85, projects: 5 },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 83, projects: 5 },
      { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 80, projects: 4 },
      { name: 'MySQL',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',    level: 72, projects: 2 },
      { name: 'REST APIs',  logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',               level: 88, projects: 5 },
      { name: 'Socket.io',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', level: 75, projects: 2 },
    ],
  },
  DevOps: {
    color: '#EC4899',
    colorDim: 'rgba(236,72,153,0.12)',
    skills: [
      { name: 'Git',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',    level: 88, projects: 6 },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 88, projects: 6 },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 65, projects: 1 },
      { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png', level: 85, projects: 4 },
      { name: 'Render', logo: 'https://cdn.simpleicons.org/render/46E3B7', level: 80, projects: 3 },
    ],
  },
  Tools: {
    color: '#F59E0B',
    colorDim: 'rgba(245,158,11,0.12)',
    skills: [
      { name: 'Postman',  logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', level: 85, projects: 5 },
      { name: 'VS Code',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95, projects: 6 },
      { name: 'Python',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 60, projects: 1 },
      { name: 'Figma',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',  level: 55, projects: 2 },
    ],
  },
}

// ── Proficiency bar ──
function ProficiencyBar({ level, color, inView }) {
  return (
    <div className="mt-2 h-1 rounded-full bg-white/8 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
      />
    </div>
  )
}

// ── Skill Card ──
function SkillCard({ skill, color, colorDim, index, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      variants={VARIANTS.scaleIn}
      custom={index * 0.05}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.06, y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative glass rounded-2xl p-4 border border-white/8 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden group"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-2">
        {/* Logo */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Image
            src={skill.logo}
            alt={skill.name}
            width={44}
            height={44}
            className="object-contain drop-shadow-lg"
            unoptimized
          />
        </div>

        {/* Name */}
        <p className="text-xs font-semibold text-white/80 font-body">{skill.name}</p>

        {/* Proficiency */}
        <div className="w-full">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] text-white/30 font-body">{skill.projects} projects</span>
            <span className="text-[10px] font-bold" style={{ color }}>{skill.level}%</span>
          </div>
          <ProficiencyBar level={skill.level} color={color} inView={inView} />
        </div>
      </div>
    </motion.div>
  )
}

// ── Tech Radar (simplified) ──
const RADAR_ITEMS = {
  Adopt:  ['React.js', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Git', 'REST APIs'],
  Trial:  ['TypeScript', 'Docker', 'Socket.io', 'WebRTC'],
  Assess: ['Python', 'GraphQL', 'Redis', 'Kubernetes'],
  Hold:   ['jQuery', 'PHP'],
}

function TechRadar({ inView }) {
  const rings = ['Adopt', 'Trial', 'Assess', 'Hold']
  const ringColors = ['#00F5FF', '#7C3AED', '#EC4899', '#F59E0B']

  return (
    <div className="glass rounded-3xl p-6 border border-white/8 mt-8">
      <div className="flex items-center gap-2 mb-6">
        <HiLightningBolt className="text-[#00F5FF]" />
        <h3
          className="text-lg font-bold text-white/90"
          style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
        >
          Tech Radar
        </h3>
        <span className="text-xs text-white/35 font-body ml-1">— how I use each technology</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rings.map((ring, ri) => (
          <div key={ring}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: ringColors[ri] }} />
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest">{ring}</span>
            </div>
            <div className="space-y-1.5">
              {RADAR_ITEMS[ring].map((tech, ti) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: ri * 0.1 + ti * 0.05 }}
                  className="text-xs text-white/50 font-body hover:text-white/80 transition-colors cursor-default flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ringColors[ri] }} />
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Skills Component ──
const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const tabs = Object.keys(SKILL_TABS)
  const { color, colorDim, skills } = SKILL_TABS[activeTab]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #050810, #07091a, #050810)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7C3AED]/8 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={VARIANTS.fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 border border-white/10 mb-6">
            <HiSparkles className="text-[#00F5FF]" />
            <span className="text-sm font-semibold gradient-text tracking-wide">Technical Expertise</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
          >
            <span className="text-white/90">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto font-body">
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          variants={VARIANTS.fadeUp}
          custom={0.1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => {
            const isActive = tab === activeTab
            const tabColor = SKILL_TABS[tab].color
            return (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-6 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-300 overflow-hidden"
                style={{
                  background: isActive ? `linear-gradient(135deg, ${tabColor}25, ${tabColor}10)` : 'rgba(255,255,255,0.04)',
                  border: isActive ? `1px solid ${tabColor}50` : '1px solid rgba(255,255,255,0.08)',
                  color: isActive ? tabColor : 'rgba(255,255,255,0.45)',
                  boxShadow: isActive ? `0 0 20px ${tabColor}20` : 'none',
                }}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: `${tabColor}08` }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* ── Skills Grid (animated tab switch) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {skills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  color={color}
                  colorDim={colorDim}
                  index={i}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Tech Radar ── */}
        <TechRadar inView={inView} />

        {/* ── Bottom stats ── */}
        <motion.div
          variants={VARIANTS.fadeUp}
          custom={0.5}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { value: '15+', label: 'Technologies', icon: '⚡' },
            { value: '500+', label: 'GitHub Commits', icon: '📦' },
            { value: '3+', label: 'Projects Shipped', icon: '🚀' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-4 border border-white/8 text-center"
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <div
                className="text-2xl font-extrabold gradient-text mb-0.5"
                style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
              >{stat.value}</div>
              <div className="text-xs text-white/35 font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
