'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef()
  const materialRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Rotate the sphere
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2
      meshRef.current.rotation.y = time * 0.3
    }

    // Animate material color
    if (materialRef.current) {
      materialRef.current.color = new THREE.Color(
        Math.sin(time * 0.5) * 0.5 + 0.5,
        Math.sin(time * 0.3) * 0.5 + 0.5,
        Math.sin(time * 0.7) * 0.5 + 0.5
      )
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function ParticleRing() {
  const particlesRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1
      particlesRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
    }
  })

  const particleCount = 100
  const particles = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2
    const radius = 3.5
    particles[i * 3] = Math.cos(angle) * radius
    particles[i * 3 + 1] = (Math.random() - 0.5) * 0.5
    particles[i * 3 + 2] = Math.sin(angle) * radius
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a855f7"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#6366f1" />
        
        <AnimatedSphere />
        <ParticleRing />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
