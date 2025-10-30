'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import Image from 'next/image'

const CertificateCarousel = ({ certificates, openImageModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isPaused, nextSlide])

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }, [certificates.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }, [certificates.length])

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8
    })
  }

  const currentCert = certificates[currentIndex]

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel Container */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-indigo-900/30 dark:to-purple-900/30 shadow-2xl">
        
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8">
              
              {/* Certificate Image */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative group">
                {currentCert.image ? (
                  <div 
                    onClick={() => openImageModal(currentCert.image, currentCert.title)}
                    className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl shadow-xl"
                  >
                    <Image
                      src={currentCert.image}
                      alt={currentCert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                        <FaEye className="text-white text-2xl" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-2xl shadow-xl flex items-center justify-center">
                    <currentCert.icon className={`${currentCert.color} text-8xl opacity-50`} />
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`w-20 h-20 ${currentCert.bgColor} rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-lg`}
                >
                  <currentCert.icon className={`${currentCert.color} text-3xl`} />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                >
                  {currentCert.title}
                </motion.h3>

                {/* Issuer */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-semibold gradient-text"
                >
                  {currentCert.issuer}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                >
                  {currentCert.description}
                </motion.p>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between pt-4 border-t border-gray-300 dark:border-gray-700"
                >
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {currentCert.date}
                  </span>
                  {currentCert.verifyLink ? (
                    <a
                      href={currentCert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:underline transition-all"
                    >
                      Verify <FaExternalLinkAlt className="text-sm" />
                    </a>
                  ) : (
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      ✓ Verified
                    </span>
                  )}
                </motion.div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all group z-10"
          aria-label="Previous certificate"
        >
          <FaChevronLeft className="text-gray-800 dark:text-white group-hover:scale-125 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-all group z-10"
          aria-label="Next certificate"
        >
          <FaChevronRight className="text-gray-800 dark:text-white group-hover:scale-125 transition-transform" />
        </button>

        {/* Pause Indicator */}
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-10"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Paused
            </span>
          </motion.div>
        )}
      </div>

      {/* Indicators/Dots */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-indigo-500 to-purple-500'
                : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to certificate ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        <span className="text-gray-600 dark:text-gray-400 font-medium">
          {currentIndex + 1} / {certificates.length}
        </span>
      </div>
    </div>
  )
}

export default CertificateCarousel
