'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaFileAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si'
import Image from 'next/image'
import CaseStudyModal from './CaseStudyModal'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState(null)
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)

  const openCaseStudy = (project) => {
    setSelectedProject(project)
    setIsCaseStudyOpen(true)
  }

  const closeCaseStudy = () => {
    setIsCaseStudyOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const mainProjects = [
    {
      id: 1,
      title: 'Doctor-Connect',
      description: 'A full-stack telemedicine platform enabling real-time doctor-patient chat, appointment scheduling, and digital health record management. Features real-time chat, voice, and video calling, JWT-based authentication, and an AI chatbot for instant health queries.',
      image: '/Doctor-Connect.png',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
      github: 'https://github.com/rohitkr963/Doctor-Connect',
      live: 'https://doctor-connect-fronted.vercel.app/',
      caseStudy: {
        problem: 'Traditional healthcare systems lack accessibility and real-time communication between doctors and patients. Patients often struggle to get timely consultations, and managing health records manually is inefficient and error-prone.',
        solution: 'Built a comprehensive telemedicine platform that bridges the gap between patients and healthcare providers. Implemented real-time chat, voice, and video calling using WebRTC and Socket.io, along with JWT-based secure authentication and an AI-powered chatbot for instant health queries.',
        features: [
          'Real-time video and voice calling with WebRTC',
          'Instant messaging system with Socket.io',
          'Secure JWT-based authentication',
          'AI chatbot for preliminary health queries',
          'Digital health record management',
          'Appointment scheduling system',
          'Responsive design for all devices',
          'Dark mode support'
        ],
        results: [
          'Successfully deployed on Vercel with 99.9% uptime',
          'Reduced patient wait time for consultations by enabling instant online connections',
          'Improved healthcare accessibility for remote areas',
          'Secured sensitive health data with industry-standard encryption'
        ],
        challenges: [
          'Implemented real-time communication with minimal latency using WebRTC peer connections',
          'Managed complex state for multiple concurrent video calls',
          'Ensured HIPAA-compliant data handling and privacy',
          'Optimized performance for low-bandwidth connections',
          'Integrated AI chatbot with medical knowledge base'
        ]
      }
    },
    {
      id: 2,
      title: 'Rider-Go',
      description: 'A full-stack ride booking system for users and captains built with MERN stack. Features secure user & captain login with role-based protected routes using JWT. Includes 20+ documented RESTful APIs with Express.js for comprehensive ride booking management.',
      image: '/Rider-go.png',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      ],
      github: 'https://github.com/rohitkr963/Rider-Go-Web',
      live: 'https://rider-go-web.vercel.app',
      caseStudy: {
        problem: 'Creating a reliable and secure ride-booking platform that handles both user and driver interfaces with complex booking logic, real-time updates, and secure authentication was a significant technical challenge.',
        solution: 'Developed a full-stack MERN application with TypeScript for type safety. Implemented role-based authentication using JWT, created 20+ RESTful APIs for comprehensive ride management, and built separate interfaces for users and captains with real-time ride tracking.',
        features: [
          'Dual interface for riders and drivers',
          'JWT-based secure authentication with role-based access',
          'Real-time ride tracking and updates',
          '20+ documented RESTful APIs',
          'Ride booking and management system',
          'Driver availability status',
          'Rating and review system',
          'Payment integration ready',
          'TypeScript for enhanced code quality'
        ],
        results: [
          'Built scalable architecture supporting multiple concurrent bookings',
          'Implemented secure authentication protecting user and driver data',
          'Created comprehensive API documentation for future development',
          'Successfully deployed with responsive design across all devices'
        ],
        challenges: [
          'Designed complex state management for real-time ride updates',
          'Implemented role-based protected routes with JWT',
          'Built scalable REST API architecture with proper error handling',
          'Ensured type safety across the application using TypeScript',
          'Optimized database queries for fast ride matching'
        ]
      }
    }
  ]

  const additionalProjects = [
    {
      id: 3,
      title: 'Airbnb Clone',
      description: 'A full-stack Airbnb clone with listings, booking logic, and user authentication using JWT. Frontend built with React.js using React Hooks and modular components. Backend powered by Node.js and Express.js with 15+ API endpoints.',
      image: '',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
      ],
      github: 'https://github.com/rohitkr963/AirBnb-project',
      live: 'https://airbnb-project-cma4.onrender.com'
    },
    {
      id: 4,
      title: 'TodoList Major Project',
      description: 'A comprehensive task management application with advanced features for organizing and tracking daily tasks. Built with modern web technologies and responsive design.',
      image: '',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      ],
      github: 'https://github.com/rohitkr963/TodoList-Major-Project',
      live: '#'
    },
    {
      id: 5,
      title: 'Video Calling App',
      description: 'A real-time video calling application with WebRTC integration. Features peer-to-peer video/audio communication, screen sharing, and chat functionality.',
      image: '',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      ],
      github: 'https://github.com/rohitkr963/Video-Calling-App-fronted',
      live: '#'
    },
    {
      id: 6,
      title: 'Hangman Game',
      description: 'An interactive word guessing game built with JavaScript. Features dynamic word selection, score tracking, and engaging UI with smooth animations.',
      image: '',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-blue-400' },
      ],
      github: 'https://github.com/rohitkr963/Hangman-Game',
      live: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-indigo-50/20 to-white dark:from-gray-900 dark:via-indigo-950/20 dark:to-gray-900 relative overflow-hidden">
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
            <span className="text-sm font-semibold gradient-text">🚀 Portfolio Showcase</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my journey through code - from ideas to implementation
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Featured <span className="gradient-text">Work</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Highlighting my best full-stack applications
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:to-pink-500/10 transition-all duration-500 z-10 pointer-events-none"></div>
                
                <div className="relative overflow-hidden h-64">
                  <div className="relative w-full h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                        style={{
                          filter: 'brightness(0.9) contrast(1.1)'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-7xl bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                          <FaDatabase />
                        </div>
                      </div>
                    )}
                    {/* Image glow overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-200 dark:border-purple-800">
                    <span className="text-xs font-bold gradient-text">Featured</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full shadow-lg"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-3 rounded-full shadow-lg"
                      >
                        <FaExternalLinkAlt size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 relative z-20">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 transition-all"
                      >
                        <tech.icon className={`${tech.color} text-base`} />
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-bold transition-all shadow-md"
                    >
                      <FaExternalLinkAlt className="text-base" />
                      <span>Live</span>
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openCaseStudy(project)}
                      className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold transition-all shadow-md"
                    >
                      <FaFileAlt className="text-base" />
                      <span>Case Study</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              More <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore my other interesting projects and experiments
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 z-10 pointer-events-none"></div>
                
                {/* Image Section */}
                <div className="relative overflow-hidden h-48">
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-100 via-purple-100 to-pink-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <FaDatabase />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Top badge */}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">Project</span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 relative z-20">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech.name}
                        className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                      >
                        <tech.icon className={`${tech.color} text-sm`} />
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md"
                    >
                      <FaGithub className="text-base" />
                      <span>Code</span>
                    </motion.a>
                    {project.live !== '#' && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-sm transition-colors shadow-md"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/rohitkr963"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <FaGithub className="mr-2" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isCaseStudyOpen}
        onClose={closeCaseStudy}
      />
    </section>
  )
}

export default Projects
