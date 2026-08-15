import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars(props) {
  const ref = useRef()
  
  const positions = useMemo(() => {
    const count = 1200
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Distribute points in a spherical shell around the camera
      const r = 8 + Math.random() * 25
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos;
  }, [])

  useFrame((state) => {
    if (ref.current) {
      // Constant slow rotation
      ref.current.rotation.x += 0.0003
      ref.current.rotation.y += 0.0004
      
      // Dynamic sway based on mouse position
      const targetX = state.pointer.x * 0.15
      const targetY = state.pointer.y * 0.15
      
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, ref.current.rotation.x + targetY * 0.05, 0.1)
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, ref.current.rotation.y + targetX * 0.05, 0.1)
    }
  })

  return (
    <points ref={ref} {...props}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#c084fc"
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ThreeBg() {
  return (
    <div className="three-bg-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -2,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 50%, #0c0828 0%, #030014 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
        <Stars />
      </Canvas>
      <div className="gradient-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(3,0,20,0) 0%, rgba(3,0,20,0.4) 50%, rgba(3,0,20,0.95) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  )
}
