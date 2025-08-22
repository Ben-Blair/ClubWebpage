'use client'

import { motion } from 'framer-motion'

interface RainbowWaveTextProps {
  text: string
  className?: string
}

const rainbowColors = [
  '#FF0000', // Red
  '#FF7F00', // Orange
  '#FFFF00', // Yellow
  '#00FF00', // Green
  '#0000FF', // Blue
  '#4B0082', // Indigo
  '#9400D3', // Violet
]

export default function RainbowWaveText({ text, className = '' }: RainbowWaveTextProps) {
  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {text.split('').map((char, index) => {
        const initialColor = rainbowColors[index % rainbowColors.length]
        return (
          <motion.span
            key={index}
            className="inline-block"
            initial={{
              y: 0,
              opacity: 0,
              color: initialColor,
            }}
            animate={{
              y: [0, -15, 0, 15, 0],
              opacity: 1,
              color: rainbowColors,
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              },
              opacity: {
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              },
              color: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              },
            }}
            style={{
              display: 'inline-block',
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2), 0 0 50px rgba(255,255,255,0.1)',
              whiteSpace: 'nowrap',
              filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.4))',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </div>
  )
}
