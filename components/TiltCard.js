'use client'

import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

export default function TiltCard({ children, options = {} }) {
  const tiltRef = useRef(null)

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.02,
        perspective: 1000,
        transition: true,
        ...options,
      })
    }

    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy()
      }
    }
  }, [options])

  return (
    <div ref={tiltRef} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  )
}
