'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarCheck, FaPaperPlane } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { VARIANTS } from '@/lib/design-tokens'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle') // idle | success | error

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing credentials')
      }

      await emailjs.send(
        serviceId, templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Rohit Kumar',
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope,     title: 'Email',    value: 'rohit737heye@gmail.com', link: 'mailto:rohit737heye@gmail.com' },
    { icon: FaPhone,        title: 'Phone',    value: '+91 9631584849',          link: 'tel:+919631584849' },
    { icon: FaMapMarkerAlt, title: 'Location', value: 'Haryana, India',          link: null },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #050810, #0a0514, #050810)' }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#EC4899]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={VARIANTS.fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 border border-white/10 mb-6">
            <HiSparkles className="text-[#00F5FF]" />
            <span className="text-sm font-semibold gradient-text tracking-wide">Let's Collaborate</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)' }}
          >
            <span className="text-white/90">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto font-body">
            Have a project in mind or looking for a developer? I'm currently open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Left Column — Info */}
          <motion.div
            variants={VARIANTS.slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-3xl p-8 border border-white/8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white/90 mb-6 font-display">Contact Details</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 text-[#00F5FF]">
                        <info.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-white/40 font-body mb-1">{info.title}</p>
                        {info.link ? (
                          <a href={info.link} className="text-base font-semibold text-white/80 hover:text-[#00F5FF] transition-colors font-body">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base font-semibold text-white/80 font-body">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-white/40 font-body mb-4">Want to discuss a project quickly?</p>
                <a
                  href="https://calendly.com/rohitkr963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-semibold glass border border-white/10 hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 text-white transition-all duration-300 group"
                >
                  <FaCalendarCheck className="text-[#7C3AED] group-hover:scale-110 transition-transform" size={16} />
                  Book a 30-min Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            variants={VARIANTS.fadeUp}
            custom={0.2}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 border border-white/8">
              <h3 className="text-2xl font-bold text-white/90 mb-6 font-display">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/50 font-body px-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/10 transition-all font-body"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-white/50 font-body px-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/10 transition-all font-body"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/50 font-body px-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/10 transition-all font-body"
                    placeholder="Freelance Project / Job Opportunity"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/50 font-body px-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/10 transition-all font-body resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden rounded-xl p-[1px]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] to-[#7C3AED] rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2 bg-[#050810] px-8 py-4 rounded-xl transition-all duration-300 group-hover:bg-opacity-0">
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="font-semibold text-white group-hover:text-[#050810] transition-colors font-body">Send Message</span>
                        <FaPaperPlane className="text-[#00F5FF] group-hover:text-[#050810] transition-colors" size={14} />
                      </>
                    )}
                  </div>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center text-sm font-body">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center text-sm font-body">
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
