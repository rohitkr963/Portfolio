'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAward, FaGraduationCap, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import Image from 'next/image'

// Lazy-load heavy/interactive components to improve initial load
const CertificateCarousel = dynamic(() => import('./CertificateCarousel'), {
  ssr: false,
  loading: () => <div className="w-full h-64 flex items-center justify-center">Loading carousel…</div>
})

const ImageModal = dynamic(() => import('./ImageModal'), {
  ssr: false,
  loading: () => null
})

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
      image: '/mongodb.png',
      verifyLink: 'https://learn.mongodb.com/c/8vcGb-QBS42AwRNtMxDcQA'
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
      image: '/full stack delta .png',
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
      image: '/web development job simulation.png',
      verifyLink: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2t4QruSmKkrN8jr7G/7q8DN5enMzSHqLwev_2t4QruSmKkrN8jr7G_zFT5wdSXkkSPut6id_1746604341989_completion_certificate.pdf'
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
      image: '/skyscanner frontend .png',
      verifyLink: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_zFT5wdSXkkSPut6id_1746695524447_completion_certificate.pdf'
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
      image: '/coursera online auction server.png',
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/QZENWP45BTDV'
    },
    {
      id: 6,
      title: 'Industrial Training',
      issuer: 'InternElite',
      date: '2024',
      description: 'Comprehensive industrial training program covering real-world industry practices and standards',
      icon: FaGraduationCap,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900',
      image: '/industrial tranning.png',
      verifyLink: ''
    },
    {
      id: 7,
      title: 'Web Development Internship',
      issuer: 'InternElite',
      date: '2024',
      description: 'Hands-on internship experience in full-stack web development with modern technologies',
      icon: FaCertificate,
      color: 'text-teal-500',
      bgColor: 'bg-teal-100 dark:bg-teal-900',
      image: '/internship internselite.png',
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
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 border border-indigo-200 dark:border-indigo-800 mb-4"
          >
            <span className="text-sm font-semibold gradient-text">🏆 My Achievements</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Certifications and achievements that showcase my expertise
          </p>
        </motion.div>

        {/* Certificate Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CertificateCarousel 
            certificates={certificates}
            openImageModal={openImageModal}
          />
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

