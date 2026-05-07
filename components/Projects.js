'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaStar, FaFilter, FaCode, FaFileAlt } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import Image from 'next/image'
import CaseStudyModal from './CaseStudyModal'
import TiltCard from './TiltCard'
import { VARIANTS } from '@/lib/design-tokens'

// ── Fetch GitHub stars ──
function useGitHubStars(repo) {
  const [stars, setStars] = useState(null)
  useEffect(() => {
    fetch(`https://api.github.com/repos/rohitkr963/${repo}`)
      .then(r => r.json())
      .then(d => setStars(d.stargazers_count ?? 0))
      .catch(() => setStars(0))
  }, [repo])
  return stars
}

// ── Filter tabs ──
const FILTERS = ['All', 'Full-Stack', 'Frontend', 'API']

const mainProjects = [
  {
    id: 1,
    title: 'Doctor-Connect',
    subtitle: 'Telemedicine Platform',
    description: 'Real-time doctor-patient consultation platform with video calls, appointment scheduling, digital health records, and an AI chatbot for instant health queries.',
    image: '/Doctor-Connect.png',
    repo: 'Doctor-Connect',
    github: 'https://github.com/rohitkr963/Doctor-Connect',
    live: 'https://doctor-connect-fronted.vercel.app/',
    tags: ['Full-Stack', 'API'],
    accent: '#00F5FF',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io', 'JWT'],
    highlights: ['Real-time video via WebRTC', 'JWT auth', 'AI chatbot integration', 'Deployed on Vercel'],
    caseStudy: {
      problem: 'Traditional healthcare systems lack accessibility and real-time communication between doctors and patients.',
      solution: 'Built a comprehensive telemedicine platform with real-time chat, voice, and video calling using WebRTC and Socket.io, along with JWT-based secure authentication and an AI-powered chatbot.',
      features: ['Real-time video and voice calling with WebRTC', 'Instant messaging system with Socket.io', 'Secure JWT-based authentication', 'AI chatbot for health queries', 'Digital health record management', 'Appointment scheduling', 'Responsive design', 'Dark mode support'],
      results: ['Successfully deployed on Vercel with 99.9% uptime', 'Reduced patient wait time for consultations', 'Improved healthcare accessibility for remote areas', 'Secured sensitive health data'],
      challenges: ['Implemented real-time communication with minimal latency', 'Managed complex state for concurrent video calls', 'Integrated AI chatbot with medical knowledge base'],
    }
  },
  {
    id: 2,
    title: 'Rider-Go',
    subtitle: 'Ride Booking Platform',
    description: 'Full-stack ride booking system with dual user/captain dashboards, role-based JWT auth, 20+ documented RESTful APIs, and real-time ride tracking.',
    image: '/Rider-go.png',
    repo: 'Rider-Go-Web',
    github: 'https://github.com/rohitkr963/Rider-Go-Web',
    live: 'https://rider-go-web.vercel.app',
    tags: ['Full-Stack', 'API'],
    accent: '#7C3AED',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Socket.io', 'JWT'],
    highlights: ['Dual user/captain dashboard', '20+ REST APIs', 'Role-based access control', 'TypeScript'],
    caseStudy: {
      problem: 'Creating a reliable and secure ride-booking platform handling both user and driver interfaces with complex booking logic.',
      solution: 'Developed a full-stack MERN application with TypeScript for type safety, JWT role-based auth, and 20+ RESTful APIs.',
      features: ['Dual interface for riders and drivers', 'JWT-based secure authentication', 'Real-time ride tracking', '20+ documented RESTful APIs', 'Driver availability status', 'TypeScript for code quality'],
      results: ['Built scalable architecture for concurrent bookings', 'Implemented secure authentication', 'Comprehensive API documentation', 'Responsive design across devices'],
      challenges: ['Complex state management for real-time updates', 'Role-based protected routes with JWT', 'Scalable REST API architecture', 'Type safety with TypeScript'],
    }
  },
]

const additionalProjects = [
  {
    id: 3,
    title: 'Airbnb Clone',
    description: 'Full-stack Airbnb clone with listings, booking logic, and JWT auth. 15+ API endpoints with Node.js/Express backend.',
    repo: 'AirBnb-project',
    github: 'https://github.com/rohitkr963/AirBnb-project',
    live: 'https://airbnb-project-cma4.onrender.com',
    tags: ['Full-Stack'],
    accent: '#EC4899',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'TodoList Major Project',
    description: 'Comprehensive task management app with advanced features, authentication, and responsive design.',
    repo: 'TodoList-Major-Project',
    github: 'https://github.com/rohitkr963/TodoList-Major-Project',
    live: '#',
    tags: ['Full-Stack'],
    accent: '#7C3AED',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Video Calling App',
    description: 'Real-time P2P video calling with WebRTC integration — video/audio communication, screen sharing, and chat.',
    repo: 'Video-Calling-App-fronted',
    github: 'https://github.com/rohitkr963/Video-Calling-App-fronted',
    live: '#',
    tags: ['Frontend', 'API'],
    accent: '#00F5FF',
    technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
  },
  {
    id: 6,
    title: 'Hangman Game',
    description: 'Interactive word guessing game with dynamic word selection, score tracking, and smooth UI animations.',
    repo: 'Hangman-Game',
    github: 'https://github.com/rohitkr963/Hangman-Game',
    live: '#',
    tags: ['Frontend'],
    accent: '#F59E0B',
    technologies: ['React', 'JavaScript'],
  },
]

// ── Featured Project Card ──
function FeaturedCard({ project, index, inView, onCaseStudy }) {
  const stars = useGitHubStars(project.repo)
  const [hovered, setHovered] = useState(false)

  return (
    <TiltCard className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-500"
      style={{ boxShadow: hovered ? `0 20px 60px ${project.accent}20` : '0 8px 32px rgba(0,0,0,0.4)' }}
    >
      <motion.div
        variants={VARIANTS.fadeUp}
        custom={index * 0.15}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="h-full flex flex-col"
        style={{ background: 'rgba(5,8,16,0.85)' }}
      >
        {/* Image section */}
        <div className="relative overflow-hidden h-52 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/40 to-transparent z-10" />

          {/* Animated gradient background as fallback/overlay */}
          <div
            className="absolute inset-0 opacity-30 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${project.accent}40, #7C3AED30)`,
              opacity: hovered ? 0.5 : 0.25,
            }}
          />

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md border"
              style={{
                background: `${project.accent}20`,
                borderColor: `${project.accent}40`,
                color: project.accent,
              }}
            >
              Featured
            </span>
          </div>

          {/* Stars badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1 glass rounded-full px-2.5 py-1 border border-white/10">
              <FaStar className="text-yellow-400 text-[10px]" />
              <span className="text-[10px] text-white/70 font-mono">
                {stars === null ? '…' : stars}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <p className="text-xs font-semibold mb-1" style={{ color: project.accent }}>{project.subtitle}</p>
            <h3
              className="text-xl font-bold text-white/90 mb-2"
              style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
            >{project.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed font-body">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="mb-4 space-y-1.5">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-white/45 font-body">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                {h}
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold font-body border"
                style={{
                  background: `${project.accent}10`,
                  borderColor: `${project.accent}25`,
                  color: `${project.accent}cc`,
                }}
              >{tech}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-auto pt-4 border-t border-white/6">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold glass border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all"
            >
              <FaGithub size={14} />
              Code
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-[#050810] transition-all"
              style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99)` }}
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </motion.a>
            <motion.button
              onClick={() => onCaseStudy(project)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Case Study"
              className="px-3 py-2.5 rounded-xl glass border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all"
            >
              <FaFileAlt size={13} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  )
}

// ── Additional Project Card ──
function AdditionalCard({ project, inView }) {
  const stars = useGitHubStars(project.repo)
  return (
    <motion.div
      variants={VARIANTS.scaleIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group glass rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-400 flex flex-col"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
    >
      {/* Color bar top */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h4
            className="text-base font-bold text-white/85 group-hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
          >{project.title}</h4>
          <div className="flex items-center gap-1 flex-shrink-0 ml-2">
            <FaStar className="text-yellow-400 text-[10px]" />
            <span className="text-[10px] text-white/40 font-mono">{stars === null ? '…' : stars}</span>
          </div>
        </div>

        <p className="text-xs text-white/45 leading-relaxed font-body flex-grow mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map(t => (
            <span key={t} className="px-2 py-0.5 rounded text-[10px] font-semibold font-body"
              style={{ background: `${project.accent}12`, color: `${project.accent}bb` }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold glass border border-white/8 hover:border-white/20 text-white/60 hover:text-white transition-all">
            <FaGithub size={12} /> Code
          </a>
          {project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-[#050810] transition-all"
              style={{ background: project.accent }}>
              <FaExternalLinkAlt size={10} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Main Projects Component ──
const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)

  const filteredAdditional = activeFilter === 'All'
    ? additionalProjects
    : additionalProjects.filter(p => p.tags.includes(activeFilter))

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #050810, #060a15, #050810)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00F5FF]/6 blur-3xl rounded-full pointer-events-none" />

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
            <span className="text-sm font-semibold gradient-text tracking-wide">Portfolio Showcase</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
          >
            <span className="text-white/90">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto font-body">
            From ideas to production — explore my full-stack engineering journey
          </p>
        </motion.div>

        {/* ── Featured Projects ── */}
        <motion.div
          variants={VARIANTS.fadeUp}
          custom={0.1}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-4 flex items-center gap-2"
        >
          <HiLightningBolt className="text-[#00F5FF]" />
          <h3 className="text-lg font-bold text-white/70 font-body">Featured Work</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainProjects.map((project, i) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onCaseStudy={(p) => { setSelectedProject(p); setIsCaseStudyOpen(true) }}
            />
          ))}
        </div>

        {/* ── Filter + More Projects ── */}
        <motion.div
          variants={VARIANTS.fadeUp}
          custom={0.4}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <HiLightningBolt className="text-[#7C3AED]" />
            <h3 className="text-lg font-bold text-white/70 font-body">More Projects</h3>
          </div>
          {/* Filter pills */}
          <div className="flex items-center gap-2 sm:ml-auto">
            <FaFilter className="text-white/30 text-xs" />
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold font-body transition-all duration-200"
                style={{
                  background: activeFilter === f ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.04)',
                  border: activeFilter === f ? '1px solid rgba(124,58,237,0.5)' : '1px solid rgba(255,255,255,0.08)',
                  color: activeFilter === f ? '#7C3AED' : 'rgba(255,255,255,0.4)',
                }}
              >{f}</button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          >
            {filteredAdditional.map(project => (
              <AdditionalCard key={project.id} project={project} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          variants={VARIANTS.fadeUp}
          custom={0.7}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <a
            href="https://github.com/rohitkr963"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl glass border border-white/10 hover:border-[#00F5FF]/30 text-white/70 hover:text-white font-semibold transition-all duration-300 text-sm font-body"
          >
            <FaGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        isOpen={isCaseStudyOpen}
        onClose={() => { setIsCaseStudyOpen(false); setTimeout(() => setSelectedProject(null), 300) }}
      />
    </section>
  )
}

export default Projects
