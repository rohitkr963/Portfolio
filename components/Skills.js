'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaFigma,
  FaDatabase
} from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiPostman } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { 
          name: 'HTML5', 
          icon: FaHtml5, 
          color: '#E34F26',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        { 
          name: 'CSS3', 
          icon: FaCss3Alt, 
          color: '#1572B6',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        { 
          name: 'JavaScript', 
          icon: FaJs, 
          color: '#F7DF1E',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        { 
          name: 'React.js', 
          icon: FaReact, 
          color: '#61DAFB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        { 
          name: 'Tailwind CSS', 
          icon: SiTailwindcss, 
          color: '#06B6D4',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
        },
        { 
          name: 'Next.js', 
          icon: SiNextdotjs, 
          color: '#000000',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { 
          name: 'Node.js', 
          icon: FaNodeJs, 
          color: '#339933',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        { 
          name: 'Express.js', 
          icon: SiExpress, 
          color: '#000000',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        { 
          name: 'MongoDB', 
          icon: SiMongodb, 
          color: '#47A248',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        },
        { 
          name: 'PostgreSQL', 
          icon: SiPostgresql, 
          color: '#4169E1',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        { 
          name: 'MySQL', 
          icon: FaDatabase, 
          color: '#4479A1',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { 
          name: 'Git', 
          icon: FaGitAlt, 
          color: '#F05032',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        { 
          name: 'GitHub', 
          icon: FaGithub, 
          color: '#181717',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        { 
          name: 'Postman', 
          icon: SiPostman, 
          color: '#FF6C37',
          logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
        },
        { 
          name: 'VS Code', 
          icon: FaAws, 
          color: '#007ACC',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        { 
          name: 'Docker', 
          icon: FaDocker, 
          color: '#2496ED',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        { 
          name: 'Vercel', 
          icon: FaAws, 
          color: '#000000',
          logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png'
        },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">⚡ Technical Skills</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      whileHover={{ scale: 1.1, y: -8 }}
                      className="relative flex flex-col items-center space-y-3 p-5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group/skill cursor-pointer overflow-hidden"
                      style={{
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      {/* Colored glow on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 blur-xl"
                        style={{ backgroundColor: skill.color }}
                      ></div>
                      
                      {/* Technology Logo */}
                      <motion.div
                        className="relative z-10 w-16 h-16 flex items-center justify-center"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="object-contain drop-shadow-lg group-hover/skill:drop-shadow-2xl transition-all duration-300"
                            unoptimized
                          />
                        </div>
                      </motion.div>
                      
                      {/* Skill Name */}
                      <span 
                        className="relative z-10 text-gray-900 dark:text-white font-bold text-sm text-center"
                        style={{ 
                          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      >
                        {skill.name}
                      </span>
                      
                      {/* Bottom accent line */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover/skill:opacity-100 transition-opacity"
                        style={{ backgroundColor: skill.color }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
            <span className="text-sm font-semibold gradient-text">🚀 More Technologies</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Additional <span className="gradient-text">Skills</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Express.js',
              'Mongoose',
              'JWT',
              'Socket.io',
              'WebRTC',
              'bcrypt.js',
              'Vite',
              'Vercel',
              'Render',
              'Responsive Design',
              'RESTful APIs',
              'Agile Methodology'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 text-gray-900 dark:text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/50 dark:hover:to-purple-900/50 transition-all duration-300 border border-indigo-200/50 dark:border-indigo-800/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
