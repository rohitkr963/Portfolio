'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaCode,
  FaArrowRight,
  FaBuilding,
} from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Associate Software Engineer',
    company: 'BlackCoffer',
    location: 'New Delhi, India',
    period: 'June 2026 – Present',
    status: 'current',
    statusLabel: '🟢 Currently Working',
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    colorSoft: 'from-violet-50 to-indigo-50',
    colorSoftDark: 'from-violet-950/30 to-indigo-950/30',
    borderColor: 'border-violet-200 dark:border-violet-800',
    badgeColor: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
    dotColor: 'from-violet-600 to-indigo-600',
    description:
      'Working as an Associate Software Engineer at BlackCoffer, designing and maintaining robust enterprise REST APIs using Node.js and Express.js, optimizing backend performance, and enforcing code quality standards.',
    achievements: [
      'Designed and maintained robust REST APIs using Node.js and Express.js, supporting enterprise-level applications',
      'Resolved production issues and optimized backend performance, significantly improving API response time and reliability',
      'Partnered with cross-functional teams to deliver new features while enforcing code quality and deployment standards',
    ],
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Git', 'Docker', 'Postman', 'Vercel'],
  },
  {
    id: 2,
    type: 'work',
    title: 'Junior Software Engineer Trainee',
    company: 'Mobiloitte Technologies',
    location: 'New Delhi, India',
    period: 'March 2025 – June 2026',
    status: 'completed',
    statusLabel: '⚪ Completed',
    color: 'from-rose-500 via-pink-500 to-fuchsia-600',
    colorSoft: 'from-rose-50 to-pink-50',
    colorSoftDark: 'from-rose-950/30 to-pink-950/30',
    borderColor: 'border-pink-200 dark:border-pink-800',
    badgeColor: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300',
    dotColor: 'from-rose-500 to-fuchsia-600',
    description:
      'Worked as a Junior Software Engineer Trainee at Mobiloitte Technologies, developing application features, implementing responsive UI components, and integrating REST APIs with streamlined data flows.',
    achievements: [
      'Developed and enhanced multiple application features, improving usability based on business and client requirements',
      'Implemented clean, responsive UI components that noticeably improved overall user experience',
      'Integrated REST APIs and streamlined data flow between frontend and backend systems',
      'Performed thorough code reviews, bug fixing, and functionality testing to ensure stable releases',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'],
  },
]

const cardVariants = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.25, ease: 'easeOut' },
  }),
}

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white via-violet-50/20 to-white dark:from-gray-950 dark:via-violet-950/10 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-violet-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 border border-violet-200 dark:border-violet-800 mb-6 shadow-sm"
          >
            <HiSparkles className="text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-bold gradient-text tracking-wide">Career Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Work{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world engineering experience — building scalable products, shipping features, and growing with industry-leading teams.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-purple-400 to-pink-400 dark:from-violet-700 dark:via-purple-700 dark:to-pink-700 rounded-full md:-translate-x-0.5" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* ── Timeline Node ── */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.25 + 0.15, type: 'spring', stiffness: 300 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.dotColor} border-4 border-white dark:border-gray-950 shadow-xl flex items-center justify-center`}
                  >
                    <FaBriefcase className="text-white text-sm" />
                  </motion.div>
                </div>

                {/* ── Card ── */}
                <div
                  className={`ml-16 md:ml-0 md:w-[46%] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`group relative rounded-3xl p-7 border-2 ${exp.borderColor} bg-gradient-to-br ${exp.colorSoft} dark:${exp.colorSoftDark} dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                  >
                    {/* Glow overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                    />
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* ── Header row ── */}
                    <div className="relative z-10 flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-start gap-4">
                        {/* Company icon */}
                        <div
                          className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg flex-shrink-0`}
                        >
                          <FaBuilding className="text-white text-lg" />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-snug">
                            {exp.title}
                          </h3>
                          <p className={`text-sm font-bold mt-0.5 bg-clip-text text-transparent bg-gradient-to-r ${exp.color}`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Status badge */}
                      {exp.status === 'current' && (
                        <span className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 animate-pulse">
                          Active
                        </span>
                      )}
                    </div>

                    {/* ── Meta info ── */}
                    <div className="relative z-10 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-5">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-violet-500" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-violet-500" />
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 italic">
                        {exp.statusLabel}
                      </span>
                    </div>

                    {/* ── Description ── */}
                    <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* ── Achievements ── */}
                    <div className="relative z-10 mb-5">
                      <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <HiLightningBolt className="text-violet-500" />
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.25 + i * 0.08 + 0.3 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <FaCheckCircle className="text-violet-500 dark:text-violet-400 mt-0.5 flex-shrink-0 text-xs" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* ── Technologies ── */}
                    <div className="relative z-10">
                      <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <FaCode className="text-violet-500" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-full ${exp.badgeColor} border ${exp.borderColor} shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Professional Stats Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-700 to-pink-600 opacity-90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10 p-10 md:p-14">
            <p className="text-center text-white/70 text-sm font-semibold uppercase tracking-widest mb-8">
              Professional at a Glance
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '2+', label: 'Active Roles', icon: '💼' },
                { value: '8.56', label: 'CGPA', icon: '🎓' },
                { value: '15+', label: 'Technologies', icon: '⚡' },
                { value: '3+', label: 'Major Projects', icon: '🚀' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="text-3xl mb-1">{stat.icon}</span>
                  <div className="text-4xl font-black text-white tracking-tight">{stat.value}</div>
                  <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
