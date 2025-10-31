'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-gray-900 dark:via-indigo-950/20 dark:to-gray-900 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">👨‍💻 Get To Know Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences with code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 rounded-3xl overflow-hidden shadow-2xl">
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl animate-float border-4 border-white dark:border-gray-800 ring-4 ring-purple-500/20">
                  <Image
                    src="/WhatsApp Image 2025-10-12 at 10.54.21_e1fb74d9.jpg"
                    alt="Rohit Kumar"
                    fill
                    className="object-cover"
                    quality={75}
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-20 animate-pulse-slow rotate-12"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse-slow animation-delay-2000"></div>
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg opacity-30 animate-pulse-slow animation-delay-4000 -rotate-12"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dedicated Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Hello! I'm Rohit, a dedicated and detail-oriented developer with a strong passion 
              for creating efficient and user-friendly web applications. I enjoy learning new 
              technologies, solving complex problems, and building clean, maintainable solutions 
              that make a real impact.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I have a solid understanding of full-stack development and love working on both 
              the front-end and back-end to bring ideas to life. I believe in writing clean code, 
              continuous learning, and staying adaptable in a fast-changing tech world.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Outside of coding, I like exploring new ideas, improving my skills, and finding 
              creative ways to make technology more meaningful and accessible.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="pt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
              >
                Let's Work Together ✨
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
