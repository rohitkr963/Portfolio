'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTerminal, FaTimes } from 'react-icons/fa'

const SYSTEM_INFO = `RohitOS v2.0.4 (x86_64)
Login: ${new Date().toUTCString()}
Type 'help' to see available commands.`

const COMMANDS = {
  help: `Available commands:
  about      - View developer profile
  skills     - List technical skills
  projects   - Show featured work
  contact    - Get contact information
  clear      - Clear terminal output
  exit       - Close terminal`,
  
  about: `ROHIT KUMAR
Full Stack Developer & Software Engineer
Location: Haryana, India
Currently: Building enterprise web apps at Mobiloitte & Fraylon.
"Code is poetry — every function tells a story."`,

  skills: `> FRONTEND: React, Next.js, Tailwind, TypeScript
> BACKEND: Node.js, Express, REST APIs, Socket.io
> DATABASE: MongoDB, MySQL, PostgreSQL
> TOOLS: Git, Docker, Postman, Vercel`,

  projects: `1. Doctor-Connect: WebRTC Telemedicine Platform
2. Rider-Go: Full-stack ride booking platform
3. Airbnb Clone: Complete listing & booking system`,

  contact: `Email: rohit737heye@gmail.com
Phone: +91 9631584849
GitHub: github.com/rohitkr963
LinkedIn: linkedin.com/in/rohit-kumar-577572292`,
}

export default function TerminalEaster() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([{ type: 'system', text: SYSTEM_INFO }])
  const inputRef = useRef(null)
  const scrollRef = useRef(null)

  // Secret code trigger ("rohit")
  useEffect(() => {
    let keyBuffer = ''
    const secret = 'rohit'

    const handleKeyDown = (e) => {
      // Don't trigger if typing in an input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      keyBuffer += e.key.toLowerCase()
      if (keyBuffer.length > secret.length) {
        keyBuffer = keyBuffer.slice(1)
      }

      if (keyBuffer === secret) {
        setIsOpen(true)
        keyBuffer = ''
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, isOpen])

  // Focus input when clicked anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase()
      
      // Add command to history
      const newHistory = [...history, { type: 'command', text: `user@portfolio:~$ ${input}` }]
      
      if (cmd === 'clear') {
        setHistory([])
      } else if (cmd === 'exit') {
        setIsOpen(false)
        setHistory([{ type: 'system', text: SYSTEM_INFO }])
      } else if (cmd === '') {
        setHistory(newHistory)
      } else if (COMMANDS[cmd]) {
        setHistory([...newHistory, { type: 'output', text: COMMANDS[cmd] }])
      } else {
        setHistory([...newHistory, { type: 'error', text: `command not found: ${cmd}` }])
      }
      
      setInput('')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-lg shadow-2xl"
        >
          <div className="bg-[#1c1e26] rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[400px]">
            {/* Terminal Header */}
            <div className="bg-[#2a2d38] px-4 py-2 flex items-center justify-between cursor-move">
              <div className="flex items-center gap-2">
                <FaTerminal className="text-white/40" size={12} />
                <span className="text-xs font-mono text-white/50">rohit@portfolio ~ zsh</span>
              </div>
              <div className="flex gap-1.5">
                <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center group transition-colors">
                  <FaTimes className="text-red-900 opacity-0 group-hover:opacity-100" size={8} />
                </button>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              onClick={handleTerminalClick}
              className="flex-1 p-4 overflow-y-auto font-mono text-sm"
            >
              {history.map((line, i) => (
                <div key={i} className="mb-2 whitespace-pre-wrap">
                  {line.type === 'system' && <span className="text-cyan-400">{line.text}</span>}
                  {line.type === 'command' && <span className="text-white">{line.text}</span>}
                  {line.type === 'output' && <span className="text-green-400">{line.text}</span>}
                  {line.type === 'error' && <span className="text-red-400">{line.text}</span>}
                </div>
              ))}
              
              {/* Input Line */}
              <div className="flex items-center text-white">
                <span className="text-green-400 mr-2">user@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
