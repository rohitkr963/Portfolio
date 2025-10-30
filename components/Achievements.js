'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaMedal, FaRocket, FaCode, FaStar, FaAward } from 'react-icons/fa'
import Image from 'next/image'
import ImageModal from './ImageModal'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState(null)
  const [imageTitle, setImageTitle] = useState('')
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)

  const openImageModal = (image, title) => {
    setSelectedImage(image)
    setImageTitle(title)
    setIsImageModalOpen(true)
  }

  const closeImageModal = () => {
    setIsImageModalOpen(false)
    setTimeout(() => {
      setSelectedImage(null)
      setImageTitle('')
    }, 300)
  }

  const achievements = [
    {
      title: 'Alpha Hack 2.0 - Gold Medalist',
      subtitle: 'National Hackathon Winner',
      date: 'January 2025',
      description: 'Won Gold Medal in Alpha Hack 2.0 National Hackathon competing against top developers from across the country.',
      icon: FaTrophy,
      image: '/hackthon.jpg',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      highlights: [
        'Competed against 500+ participants nationwide',
        'Built innovative solution in 48-hour timeframe',
        'Recognized for technical excellence and innovation'
      ]
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white via-yellow-50/20 to-white dark:from-gray-900 dark:via-yellow-950/20 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 via-orange-100 to-amber-100 dark:from-yellow-900/30 dark:via-orange-900/30 dark:to-amber-900/30 border border-yellow-200 dark:border-yellow-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">🏆 Milestones & Awards</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Celebrating success through innovation, dedication, and continuous growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-90`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8">
                {/* Header with Icon/Image */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} shadow-xl`}
                      >
                        <achievement.icon className="text-3xl text-white" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <FaStar className="text-yellow-500" />
                      <span className="font-semibold">{achievement.date}</span>
                    </div>
                  </div>

                  {/* Achievement Image/Photo */}
                  {achievement.image && (
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      onClick={() => openImageModal(achievement.image, achievement.title)}
                      className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 flex-shrink-0 ml-4 cursor-pointer group"
                    >
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex items-center justify-center">
                          <FaAward className="text-yellow-400 text-2xl drop-shadow-lg group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      {/* Click to view hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                          <p className="text-white text-xs font-bold">Click to view</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {achievement.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide flex items-center gap-2">
                    <span className={`h-1 w-8 bg-gradient-to-r ${achievement.color} rounded-full`}></span>
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {achievement.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + highlightIndex * 0.05 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${achievement.color}`}></span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-bl-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: FaTrophy, value: '1', label: 'National Hackathon Win', color: 'from-yellow-500 to-orange-500' },
            { icon: FaCode, value: '10+', label: 'Projects Completed', color: 'from-blue-500 to-indigo-500' },
            { icon: FaMedal, value: '8.56', label: 'CGPA', color: 'from-green-500 to-emerald-500' },
            { icon: FaStar, value: '2+', label: 'Years Coding', color: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100 dark:border-gray-700"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg mb-3`}
              >
                <stat.icon className="text-xl text-white" />
              </motion.div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
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
