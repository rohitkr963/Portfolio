'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('magnetic-target')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseEnter)
    // window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseEnter)
      // window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: isHovering ? 2.5 : 1,
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-indigo-400 dark:border-indigo-300 rounded-full pointer-events-none z-[9998] opacity-50"
        style={{
          translateX: cursorX,
          translateY: cursorY,
          x: -8, // Offset to center around the dot (16px radius difference? No, dot is 16px (w-4), ring is 32px (w-8). Center diff is 8px)
          y: -8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.8
        }}
      />
    </>
  )
}

export default CustomCursor
