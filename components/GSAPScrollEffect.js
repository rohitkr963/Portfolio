'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function GSAPScrollEffect({ children, animation = 'fadeIn', className = '' }) {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    let animationProps = {}

    switch (animation) {
      case 'fadeIn':
        animationProps = {
          opacity: 0,
          y: 50,
        }
        break
      case 'slideLeft':
        animationProps = {
          opacity: 0,
          x: -100,
        }
        break
      case 'slideRight':
        animationProps = {
          opacity: 0,
          x: 100,
        }
        break
      case 'scale':
        animationProps = {
          opacity: 0,
          scale: 0.8,
        }
        break
      case 'rotate':
        animationProps = {
          opacity: 0,
          rotation: 10,
        }
        break
      case 'flip':
        animationProps = {
          opacity: 0,
          rotationY: 90,
        }
        break
      default:
        animationProps = {
          opacity: 0,
          y: 50,
        }
    }

    gsap.from(element, {
      ...animationProps,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animation])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
