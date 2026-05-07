'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GalaxyBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // ── Scene + Camera ──
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 2000)
    camera.position.set(0, 0, 4)

    // ── Galaxy Particles ──
    const COUNT = 8000
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const sizes = new Float32Array(COUNT)

    const cyanColor = new THREE.Color('#00F5FF')
    const violetColor = new THREE.Color('#7C3AED')
    const pinkColor = new THREE.Color('#EC4899')
    const whiteColor = new THREE.Color('#ffffff')
    const palette = [cyanColor, violetColor, pinkColor, whiteColor, whiteColor, whiteColor]

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3

      // Spiral galaxy distribution
      const radius = Math.random() * 8 + 0.5
      const spinAngle = radius * 2.5
      const branchAngle = ((i % 3) / 3) * Math.PI * 2
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.4

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY * 0.5
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      // Color: inner = white/cyan, outer = violet/pink
      const mixColor = palette[Math.floor(Math.random() * palette.length)]
      colors[i3]     = mixColor.r
      colors[i3 + 1] = mixColor.g
      colors[i3 + 2] = mixColor.b

      sizes[i] = Math.random() * 2.5 + 0.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const galaxy = new THREE.Points(geometry, material)
    scene.add(galaxy)

    // ── Nebula Fog ──
    scene.fog = new THREE.FogExp2(0x050810, 0.06)

    // ── Mouse Parallax ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 0.4
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 0.3
    }
    window.addEventListener('mousemove', handleMouseMove)

    // ── Resize ──
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // ── Animation Loop ──
    let frame = 0
    const animate = () => {
      const animId = requestAnimationFrame(animate)
      frame++

      // Slow galaxy rotation
      galaxy.rotation.y += 0.0008
      galaxy.rotation.x += 0.0002

      // Mouse parallax — smooth lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04
      mouse.y += (mouse.targetY - mouse.y) * 0.04
      camera.position.x = mouse.x * 0.8
      camera.position.y = -mouse.y * 0.5 + 0.2

      camera.lookAt(scene.position)
      renderer.render(scene, camera)

      return animId
    }
    const animId = animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}

export default GalaxyBackground
