'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaDownload, FaEye, FaFilePdf, FaFileWord, FaPrint } from 'react-icons/fa'
import { useState } from 'react'

const ResumeModal = ({ isOpen, onClose }) => {
  const [downloadFormat, setDownloadFormat] = useState('pdf')
  const [isViewing, setIsViewing] = useState(false)

  const handleDownload = (format) => {
    // Track download
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_download', {
        format: format,
        timestamp: new Date().toISOString()
      })
    }

    // Trigger download
    const link = document.createElement('a')
    link.href = format === 'pdf' ? '/resume.pdf' : '/resume.docx'
    link.download = `Rohit_Kumar_Resume.${format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Optional: Close modal after download
    setTimeout(() => onClose(), 500)
  }

  const handleView = () => {
    setIsViewing(true)
    // Track view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_view', {
        timestamp: new Date().toISOString()
      })
    }
  }

  const handlePrint = () => {
    // Open PDF in new window for printing
    window.open('/resume.pdf', '_blank')

    // Track print
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_print', {
        timestamp: new Date().toISOString()
      })
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-1">
                    Resume
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Rohit Kumar - Full Stack Developer
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <FaTimes className="text-xl text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {!isViewing ? (
                  /* Download Options */
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 mb-4"
                      >
                        <FaFilePdf className="text-4xl text-indigo-600 dark:text-indigo-400" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Get My Resume
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Choose your preferred format to download or view online
                      </p>
                    </div>

                    {/* Format Selection - Hidden until DOCX is available */}
                    {/* <div className="grid md:grid-cols-2 gap-4 mb-8">
                      ...
                    </div> */}

                    {/* Action Buttons */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleView}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <FaEye />
                        View Online
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload(downloadFormat)}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <FaDownload />
                        Download Resume
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrint}
                        className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <FaPrint />
                        Print
                      </motion.button>
                    </div>

                    {/* Info Box */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800"
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                        <span className="font-semibold">💡 Tip:</span> The PDF format is recommended for ATS (Applicant Tracking System) compatibility
                      </p>
                    </motion.div>
                  </div>
                ) : (
                  /* Resume Viewer */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <motion.button
                        whileHover={{ scale: 1.05, x: -5 }}
                        onClick={() => setIsViewing(false)}
                        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                      >
                        ← Back to Download Options
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDownload('pdf')}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        <FaDownload />
                        Download
                      </motion.button>
                    </div>

                    {/* PDF Viewer */}
                    <div className="w-full h-[600px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-inner">
                      <iframe
                        src="/resume.pdf#toolbar=0"
                        className="w-full h-full"
                        title="Resume Preview"
                      />
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      Having trouble viewing? Try downloading the PDF instead.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  Last Updated: October 2025 • Version 2.0
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal
