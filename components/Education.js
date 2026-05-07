'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBook } from 'react-icons/fa'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      field: 'Computer Science',
      institution: 'Maharishi Markandeshwar University',
      location: 'Haryana, India',
      period: '2021 - 2025',
      cgpa: '8.56',
      achievements: [
        'Maintained excellent academic performance with 8.56 CGPA',
        'Completed multiple full-stack development projects',
        'Won Alpha Hack 2.0 National Hackathon (Gold Medalist)',
        'Built and deployed full-stack projects independently',
        'Active participant in coding competitions and hackathons'
      ],
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development',
        'Object-Oriented Programming',
        'Computer Networks',
        'Software Engineering',
        'Operating Systems',
        'System Design'
      ]
    },
    {
      degree: 'Senior Secondary (12th)',
      field: 'Science Stream (PCM)',
      institution: 'R.N.S.H Inter College, BSEB',
      location: 'Bihar, India',
      period: '2021 - 2023',
      percentage: '75.2%',
      achievements: [
        'Scored 75.2% in board examinations',
        'Strong foundation in Physics, Chemistry, and Mathematics',
        'Developed early interest in programming and technology'
      ]
    },
    {
      degree: 'Secondary (10th)',
      field: 'General',
      institution: 'R.N.S.H Inter College, BSEB',
      location: 'Bihar, India',
      period: '2020 - 2021',
      percentage: '82%',
      achievements: [
        'Achieved 82% in board examinations',
        'Solid academic foundation across all subjects',
        'Demonstrated consistent academic excellence'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white via-green-50/20 to-white dark:from-gray-900 dark:via-green-950/20 dark:to-gray-900 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">🎓 Academic Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-green-950/30 dark:to-emerald-950/30 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/10 transition-all duration-500 border-2 border-green-100 dark:border-green-900 overflow-hidden"
            >
              {/* Gradient overlay with glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg flex-shrink-0"
                    >
                      <FaGraduationCap className="text-3xl text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-green-600 dark:text-green-400 font-semibold mb-3">
                        {edu.field}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <FaUniversity className="text-green-500" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt className="text-green-500" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-green-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CGPA/Percentage Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-xl text-center min-w-[120px]">
                      <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                      <div className="relative z-10">
                        <FaAward className="text-white text-2xl mx-auto mb-2" />
                        <div className="text-3xl font-bold text-white mb-1">
                          {edu.cgpa || edu.percentage}
                        </div>
                        <div className="text-xs text-white/90 font-semibold uppercase tracking-wide">
                          {edu.cgpa ? 'CGPA' : 'Percentage'}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Achievements */}
                {edu.achievements && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-1 w-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                        Key Highlights
                      </h4>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 p-3 rounded-xl"
                        >
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Courses */}
                {edu.courses && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-1 w-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide flex items-center gap-2">
                        <FaBook className="text-green-500" />
                        Relevant Coursework
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <motion.span
                          key={courseIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + courseIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 dark:from-green-900/40 dark:via-emerald-900/40 dark:to-teal-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg border border-green-200 dark:border-green-800 transition-all duration-300 cursor-pointer"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border-2 border-green-200 dark:border-green-800 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500 rounded-full">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">8.56</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Overall CGPA</div>
              </div>
            </div>
            <div className="h-12 w-px bg-green-300 dark:bg-green-700"></div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500 rounded-full">
                <FaAward className="text-white text-xl" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2025</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Expected Graduation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
