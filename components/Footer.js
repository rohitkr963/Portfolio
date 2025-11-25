'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-4 gradient-text"
            >
              Rohit Kumar
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 mb-4 leading-relaxed"
            >
              Full Stack Developer passionate about creating amazing digital experiences
              and solving complex problems with elegant solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com/rohitkr963"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-577572292/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold mb-4"
            >
              Get In Touch
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 text-gray-400"
            >
              <p>rohit737heye@gmail.com</p>
              <p>+91 9631584849</p>
              <p>Ambala, Haryana</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Rohit Kumar. Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

