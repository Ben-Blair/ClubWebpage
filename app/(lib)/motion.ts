'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Desktop-only scroll animations
export const scrollAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

// Card hover animations
export const cardAnimation = {
  hover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

// Stagger children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Hero text animation
export const heroAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Conditional motion component that respects reduced motion
export const ConditionalMotion = ({ 
  children, 
  isDesktop, 
  ...props 
}: {
  children: React.ReactNode
  isDesktop: boolean
  [key: string]: any
}) => {
  if (!isDesktop) {
    return <div {...props}>{children}</div>
  }
  
  return <motion.div {...props}>{children}</motion.div>
}
