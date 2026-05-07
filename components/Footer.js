'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  const navLinks = [
    { name: 'About',      href: '#about' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education',  href: '#education' },
    { name: 'Contact',    href: '#contact' },
  ]

  const socialLinks = [
    { href: 'https://github.com/rohitkr963',                       icon: FaGithub,   label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/rohit-kumar-577572292/', icon: FaLinkedin, label: 'LinkedIn' },
  ]

  return (
    <footer
      className="relative overflow-hidden border-t border-white/6"
      style={{ background: '#030508' }}
    >
      {/* Top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00F5FF]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#7C3AED]/8 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="font-display text-2xl font-extrabold gradient-text mb-4 inline-block"
              style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
            >
              Rohit Kumar
            </a>
            <p className="text-sm text-white/40 leading-relaxed font-body mb-5 max-w-xs">
              Full Stack Developer building scalable web applications with clean code, modern design, and a focus on performance.
            </p>

            {/* Open to work badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/8 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-green-400">Open to Opportunities</span>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 glass rounded-xl border border-white/8 hover:border-[#00F5FF]/40 flex items-center justify-center text-white/40 hover:text-[#00F5FF] transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-sm font-bold text-white/70 uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#00F5FF] transition-colors duration-200 font-body flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#00F5FF] group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-sm font-bold text-white/70 uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              {[
                { icon: FaEnvelope,      text: 'rohit737heye@gmail.com', href: 'mailto:rohit737heye@gmail.com' },
                { icon: FaPhone,         text: '+91 9631584849',          href: 'tel:+919631584849' },
                { icon: FaMapMarkerAlt,  text: 'Haryana, India',          href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 glass rounded-lg flex items-center justify-center flex-shrink-0 border border-white/8">
                    <Icon size={11} className="text-[#00F5FF]" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-white/40 hover:text-white/70 transition-colors font-body">{text}</a>
                  ) : (
                    <span className="text-sm text-white/40 font-body">{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Hire me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[#050810] transition-all"
              style={{ background: 'linear-gradient(135deg, #00F5FF, #7C3AED)', boxShadow: '0 0 20px rgba(0,245,255,0.15)' }}
            >
              <HiSparkles />
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-white/30 font-body">
            <span>© {year} Rohit Kumar · Built with</span>
            <FaHeart className="text-[#EC4899] animate-pulse" size={12} />
            <span>using Next.js & Framer Motion</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="w-9 h-9 glass rounded-xl border border-white/8 hover:border-[#00F5FF]/40 flex items-center justify-center text-white/40 hover:text-[#00F5FF] transition-all duration-200"
          >
            <FaArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
