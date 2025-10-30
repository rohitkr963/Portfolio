'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Development Intern',
      company: 'Internselite',
      location: 'Remote',
      period: 'May 2025 - July 2025',
      description: 'Contributed to full-stack web development projects using React.js, Node.js, and MongoDB. Developed responsive, user-friendly UIs and integrated RESTful APIs with backend services.',
      achievements: [
        'Participated in weekly Agile sprints, collaborating with mentors to deliver 6+ features',
        'Improved code maintainability by 30% by applying clean code principles and Git workflows',
        'Developed responsive, user-friendly UIs and integrated RESTful APIs with backend services',
        'Contributed to multiple full-stack web development projects'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'RESTful APIs', 'Git', 'Agile']
    },
    {
      type: 'work',
      title: 'Full Stack Development Intern',
      company: 'Alpha Intern',
      location: 'offline',
      period: '3 month',
      description: 'Working on full-stack development projects, building modern web applications and enhancing technical skills.',
      achievements: [
        'Developing full-stack web applications',
        'Learning and implementing best practices in web development',
        'Collaborating with team members on various projects'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS']
    },
    {
      type: 'work',
      title: 'AI/ML Training Program',
      company: 'Xplore Company',
      location: 'offline',
      period: '1 Month',
      description: 'Completed intensive AI/ML training program covering machine learning fundamentals, algorithms, and practical applications. The program also included comprehensive aptitude training to enhance problem-solving and analytical skills.',
      achievements: [
        'Gained hands-on experience with AI/ML algorithms and frameworks',
        'Completed aptitude training covering logical reasoning and quantitative analysis',
        'Applied machine learning concepts to real-world problem scenarios',
        'Enhanced analytical and problem-solving capabilities'
      ],
      technologies: ['Python', 'Machine Learning', 'AI', 'Data Analysis', 'Aptitude Training']
    }
  ]


  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-pink-50/20 to-white dark:from-gray-900 dark:via-pink-950/20 dark:to-gray-900 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">💼 Career Journey</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey building impactful web applications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg shadow-purple-500/50"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="group relative bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-indigo-950/30 dark:to-purple-950/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-500/20 transition-all duration-500 border-2 border-indigo-100 dark:border-indigo-900 overflow-hidden"
                  >
                    {/* Gradient overlay with glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Header */}
                    <div className="relative z-10 flex items-start space-x-4 mb-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 shadow-lg">
                        <FaBriefcase className="text-2xl bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                          {item.company || item.institution}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <FaMapMarkerAlt />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendarAlt />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide flex items-center gap-2">
                        <span className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg border border-indigo-200 dark:border-indigo-800 transition-all duration-300 cursor-pointer"
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

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Professional Summary
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                8.56
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                CGPA
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Major Projects
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
