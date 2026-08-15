import { useState, useRef } from 'react'

export default function Card3D({ children, className = '', maxRotate = 10, glowColor = 'rgba(129, 140, 248, 0.15)' }) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [glowStyle, setGlowStyle] = useState({ opacity: 0, left: '0px', top: '0px' })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left //x position within the element.
    const y = e.clientY - rect.top  //y position within the element.

    const width = rect.width
    const height = rect.height

    const xVal = (x - width / 2) / (width / 2) // ranges from -1 to 1
    const yVal = (y - height / 2) / (height / 2) // ranges from -1 to 1

    // Calculate rotation: mouse X determines Y-rotation (horizontal tilt), mouse Y determines X-rotation (vertical tilt)
    setRotateX(-yVal * maxRotate)
    setRotateY(xVal * maxRotate)

    // Calculate hover glow position
    setGlowStyle({
      opacity: 1,
      left: `${x}px`,
      top: `${y}px`,
      background: `radial-gradient(circle 120px at center, ${glowColor}, transparent 80%)`
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
    setGlowStyle((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      className={`card-3d-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
        position: 'relative'
      }}
    >
      <div 
        className="card-3d-glow"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: 'inherit',
          opacity: glowStyle.opacity,
          left: 0,
          top: 0,
          transform: 'translateZ(1px)',
          transition: 'opacity 0.3s ease'
        }}
      >
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          transform: 'translateZ(1px)',
          pointerEvents: 'none',
          left: 0,
          top: 0,
          ...glowStyle
        }} />
      </div>
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d', width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  )
}
