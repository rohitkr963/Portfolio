'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'
import { useEffect } from 'react'

const CaseStudyModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-3 bg-gray-900/80 dark:bg-white/80 text-white dark:text-gray-900 rounded-full hover:bg-gray-900 dark:hover:bg-white transition-colors shadow-lg"
            >
              <FaTimes size={20} />
            </motion.button>

            {/* Scrollable Content */}
            <div className="h-full overflow-y-auto">
              {/* Header Section with Image */}
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-30"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaRocket className="text-9xl text-white/20" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="p-8 md:p-12 space-y-12">
                {/* Quick Links */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <FaGithub size={20} />
                    View Source Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
                  >
                    <FaExternalLinkAlt size={18} />
                    Live Demo
                  </motion.a>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 transition-all shadow-md"
                      >
                        <tech.icon className={`${tech.color} text-xl`} />
                        <span className="font-semibold text-gray-900 dark:text-white">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Problem Statement */}
                {project.caseStudy?.problem && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-500" />
                      The Problem
                    </h3>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </div>
                  </div>
                )}

                {/* Solution */}
                {project.caseStudy?.solution && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FaRocket className="text-indigo-500" />
                      The Solution
                    </h3>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                        {project.caseStudy.solution}
                      </p>
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {project.caseStudy?.features && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.caseStudy.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800"
                        >
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results/Impact */}
                {project.caseStudy?.results && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <FaChartLine className="text-purple-500" />
                      Results & Impact
                    </h3>
                    <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
                      <ul className="space-y-3">
                        {project.caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-lg">
                            <span className="text-purple-500 font-bold">▸</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {project.caseStudy?.challenges && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Challenges & Learnings
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <ul className="space-y-3">
                        {project.caseStudy.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <span className="text-indigo-500 font-bold mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CaseStudyModal
