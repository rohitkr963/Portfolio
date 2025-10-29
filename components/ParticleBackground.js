'use client'

import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const particlesRef = useRef()
  const count = 1000
  
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    
    // Gradient colors (indigo to purple to pink)
    const colorIndex = Math.random()
    if (colorIndex < 0.33) {
      colors[i * 3] = 0.4      // R
      colors[i * 3 + 1] = 0.36 // G
      colors[i * 3 + 2] = 0.94 // B (indigo)
    } else if (colorIndex < 0.66) {
      colors[i * 3] = 0.63     // R
      colors[i * 3 + 1] = 0.33 // G
      colors[i * 3 + 2] = 0.94 // B (purple)
    } else {
      colors[i * 3] = 0.93     // R
      colors[i * 3 + 1] = 0.26 // G
      colors[i * 3 + 2] = 0.58 // B (pink)
    }
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function FloatingShape({ position, color, scale = 1 }) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Floating 3D Shapes */}
        <FloatingShape position={[-3, 2, -2]} color="#6366f1" scale={0.8} />
        <FloatingShape position={[3, -2, -3]} color="#a855f7" scale={1} />
        <FloatingShape position={[0, 0, -4]} color="#ec4899" scale={0.6} />
        
        {/* Particle System */}
        <Particles />
      </Canvas>
    </div>
  )
}
