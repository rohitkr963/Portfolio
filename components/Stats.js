'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { FaProjectDiagram, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: FaProjectDiagram,
      value: 10,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30'
    },
    {
      icon: FaCode,
      value: 3,
      suffix: '+',
      label: 'Technologies Mastered',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30'
    },
    {
      icon: FaGraduationCap,
      value: 8.56,
      suffix: '',
      label: 'CGPA',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30',
      isDecimal: true
    },
    {
      icon: FaBriefcase,
      value: 2,
      suffix: '',
      label: 'Internships',
      color: 'from-rose-500 to-orange-500',
      bgColor: 'from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30'
    }
  ]

  const AnimatedCounter = ({ value, suffix = '', isDecimal = false }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (inView) {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(current)
          }
        }, duration / steps)

        return () => clearInterval(timer)
      }
    }, [inView, value])

    return (
      <span>
        {isDecimal ? count.toFixed(2) : Math.floor(count)}
        {suffix}
      </span>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border border-indigo-200 dark:border-indigo-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">📊 Achievement Stats</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Metrics that showcase my journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className={`relative bg-gradient-to-br ${stat.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-white dark:border-gray-800 overflow-hidden`}>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg mb-6`}
                >
                  <stat.icon className="text-3xl text-white" />
                </motion.div>

                {/* Counter */}
                <div className="relative z-10">
                  <div className={`text-5xl font-extrabold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}>
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      isDecimal={stat.isDecimal}
                    />
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { emoji: '🚀', text: 'Full Stack Developer' },
            { emoji: '💡', text: 'Problem Solver' },
            { emoji: '🎯', text: 'Goal Oriented' },
            { emoji: '⚡', text: 'Quick Learner' }
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
            >
              <span className="text-2xl mr-2">{badge.emoji}</span>
              <span className="text-gray-800 dark:text-gray-200 font-semibold">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
