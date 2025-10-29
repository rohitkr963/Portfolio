'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAward, FaGraduationCap, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import Image from 'next/image'
import ImageModal from './ImageModal'

const Certificates = () => {
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

  const certificates = [
    {
      id: 1,
      title: 'MongoDB Certificate',
      issuer: 'MongoDB University',
      date: '2024',
      description: 'Certification in MongoDB database design, development, and management',
      icon: FaCertificate,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900',
      image: '', // Add your certificate image path here: '/certificates/mongodb.jpg'
      verifyLink: '' // Add verification URL here if available
    },
    {
      id: 2,
      title: 'Delta Full Stack Developer Program',
      issuer: 'Apna College',
      date: '2024',
      description: 'Comprehensive full-stack development program covering modern web technologies',
      icon: FaAward,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      image: '', // Add your certificate image path here
      verifyLink: ''
    },
    { 
      id: 3,
      title: 'Web Development Job Simulation',
      issuer: 'Forage',
      date: '2024',
      description: 'Practical web development simulation program with real-world scenarios',
      icon: FaGraduationCap,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900',
      image: '',
      verifyLink: ''
    },
    {
      id: 4,
      title: 'Frontend Engineering',
      issuer: 'Syscanner (Forage)',
      date: '2024',
      description: 'Advanced frontend engineering certification focusing on modern frameworks',
      icon: FaCertificate,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      image: '',
      verifyLink: ''
    },
    {
      id: 5,
      title: 'Auction Server with Express.js',
      issuer: 'Coursera',
      date: '2024',
      description: 'Building scalable auction server applications using Express.js and Node.js',
      icon: FaAward,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      image: '',
      verifyLink: ''
    }
  ]

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Certificate Image (if available) */}
              {cert.image && (
                <div 
                  onClick={() => openImageModal(cert.image, cert.title)}
                  className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 cursor-pointer group overflow-hidden"
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                      <FaEye className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 ${cert.bgColor} rounded-full flex items-center justify-center mb-6`}>
                  <cert.icon className={`${cert.color} text-2xl`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.date}
                  </span>
                  {cert.verifyLink ? (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 dark:text-primary-400 font-medium flex items-center gap-1 hover:underline"
                    >
                      Verify <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  ) : (
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Online Courses Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years of Continuous Learning
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Certification Success Rate
              </div>
            </div>
          </div>
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

export default Certificates
