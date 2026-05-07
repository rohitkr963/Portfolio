'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaGithub, FaAward, FaStar } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import Image from 'next/image'
import ImageModal from './ImageModal'
import { VARIANTS } from '@/lib/design-tokens'

// ── CSS Confetti Effect ──
function CSSConfetti({ isActive }) {
  if (!isActive) return null
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
      {[...Array(30)].map((_, i) => {
        const colors = ['#00F5FF', '#7C3AED', '#EC4899', '#F59E0B']
        const color = colors[Math.floor(Math.random() * colors.length)]
        const left = `${Math.random() * 100}%`
        const delay = `${Math.random() * 2}s`
        const duration = `${1 + Math.random() * 2}s`

        return (
          <div
            key={i}
            className="absolute top-[-10px] w-2 h-2"
            style={{
              left,
              backgroundColor: color,
              animation: `confetti-fall ${duration} ease-in ${delay} forwards`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        )
      })}
      <style jsx>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(300px) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [selectedImage, setSelectedImage] = useState(null)
  const [imageTitle, setImageTitle] = useState('')
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const openImageModal = (image, title) => {
    setSelectedImage(image)
    setImageTitle(title)
    setIsImageModalOpen(true)
  }

  const achievements = [
    {
      title: 'Alpha Hack 2.0 - Gold Medalist',
      subtitle: 'National Hackathon Winner',
      date: 'January 2025',
      description: 'Won Gold Medal in Alpha Hack 2.0 National Hackathon competing against top developers from across the country.',
      icon: FaTrophy,
      image: '/hackthon.jpg',
      accent: '#F59E0B',
      highlights: [
        'Competed against 500+ participants nationwide',
        'Built innovative solution in 48-hour timeframe',
        'Recognized for technical excellence and innovation'
      ]
    },
  ]

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #050810, #0a0814, #050810)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#F59E0B]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={VARIANTS.fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 border border-white/10 mb-6">
            <HiSparkles className="text-[#F59E0B]" />
            <span className="text-sm font-semibold gradient-text tracking-wide" style={{ background: 'linear-gradient(to right, #F59E0B, #EC4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Milestones & Awards
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
          >
            <span className="text-white/90">Key </span>
            <span className="gradient-text" style={{ background: 'linear-gradient(to right, #F59E0B, #EC4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Achievements
            </span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto font-body">
            Celebrating success through innovation, dedication, and continuous growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Main Achievement Card */}
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative glass rounded-3xl overflow-hidden border border-white/8 hover:border-[#F59E0B]/30 transition-all duration-500 shadow-2xl"
              style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
            >
              <CSSConfetti isActive={inView} />

              {/* Background gradient hint */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-transparent opacity-50 z-0" />
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #F59E0B, #EC4899)' }}>
                        <achievement.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white/90 mb-1 font-display">
                          {achievement.title}
                        </h3>
                        <p className="text-sm font-semibold text-[#F59E0B] font-body">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/40 font-body mb-4">
                      <FaStar className="text-[#F59E0B]" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>

                  {achievement.image && (
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      onClick={() => openImageModal(achievement.image, achievement.title)}
                      className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl flex-shrink-0 ml-4 cursor-pointer group-hover:border-[#F59E0B]/50 transition-colors"
                    >
                      <Image src={achievement.image} alt={achievement.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                      <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                        <FaAward className="text-[#F59E0B] text-xl drop-shadow-md" />
                      </div>
                    </motion.div>
                  )}
                </div>

                <p className="text-sm text-white/50 leading-relaxed font-body mb-6 flex-grow">
                  {achievement.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white/70 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[2px] rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EC4899]" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {achievement.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/45 font-body">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#F59E0B]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* GitHub Heatmap Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 border border-white/8 hover:border-[#00F5FF]/20 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10 text-[#00F5FF]">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white/90 font-display">GitHub Contributions</h3>
                  <p className="text-sm text-[#00F5FF] font-body">Consistency in coding</p>
                </div>
              </div>
              <p className="text-sm text-white/50 font-body mb-6">
                A visual representation of my daily coding habits, open-source contributions, and project commits over the last year.
              </p>
            </div>

            <div className="glass rounded-2xl p-4 border border-white/5 overflow-x-auto w-full">
              {/* GitHub chart embed */}
              <div className="min-w-[500px]">
                <img 
                  src="https://ghchart.rshah.org/00F5FF/rohitkr963" 
                  alt="Rohit's GitHub Commits" 
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: FaTrophy, value: '1', label: 'Hackathon Win', color: '#F59E0B' },
            { icon: FaCode, value: '500+', label: 'Commits', color: '#00F5FF' },
            { icon: FaMedal, value: '8.56', label: 'CGPA', color: '#10B981' },
            { icon: FaStar, value: '15+', label: 'Tech Stack', color: '#7C3AED' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-5 border border-white/8 text-center"
            >
              <div className="flex justify-center mb-2">
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div className="text-2xl font-bold text-white/90 font-display mb-1">{stat.value}</div>
              <div className="text-[11px] text-white/40 uppercase tracking-widest font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <ImageModal
        image={selectedImage}
        title={imageTitle}
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
      />
    </section>
  )
}

export default Achievements
