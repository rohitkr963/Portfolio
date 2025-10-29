'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa'
import Image from 'next/image'

const GitHubStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const username = 'rohitkr963' // Your GitHub username

  const stats = [
    {
      icon: FaCode,
      label: 'Total Commits',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaStar,
      label: 'Stars Earned',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaCodeBranch,
      label: 'Pull Requests',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaGithub,
      label: 'Repositories',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/20 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 mb-4"
          >
            <span className="text-sm font-semibold gradient-text flex items-center gap-2">
              <FaGithub className="text-lg" />
              GitHub Activity
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coding <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Consistent contributions and open-source involvement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <FaGithub className="text-3xl" />
              GitHub Stats
            </h3>
            <div className="relative w-full h-auto">
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=a855f7&icon_color=ec4899&text_color=6b7280`}
                alt="GitHub Stats"
                width={500}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <FaCode className="text-3xl text-purple-500" />
              Most Used Languages
            </h3>
            <div className="relative w-full h-auto">
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=a855f7&text_color=6b7280`}
                alt="Top Languages"
                width={500}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* GitHub Streak */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-bl-full"></div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FaStar className="text-3xl text-yellow-500" />
            Contribution Streak
          </h3>
          <div className="relative w-full h-auto flex justify-center">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=00000000&ring=a855f7&fire=ec4899&currStreakLabel=a855f7`}
              alt="GitHub Streak"
              width={800}
              height={200}
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </motion.div>

        {/* Activity Graph */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 overflow-hidden mt-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FaCodeBranch className="text-3xl text-green-500" />
            Contribution Activity
          </h3>
          <div className="relative w-full h-auto">
            <Image
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=00000000&color=a855f7&line=ec4899&point=6b7280&area=true&area_color=a855f7`}
              alt="Activity Graph"
              width={1200}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* GitHub Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
            <span>View Full GitHub Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats
