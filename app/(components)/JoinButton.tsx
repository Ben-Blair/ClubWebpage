'use client'

import { motion } from 'framer-motion'

interface JoinButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

export default function JoinButton({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children = 'Join GroupMe'
}: JoinButtonProps) {
  const GROUPME_URL = 'https://groupme.com/join_group/109226922/6oOParg2'
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }
  
  const baseClasses = `font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses[size]} ${className}`
  
  const variantClasses = variant === 'primary' 
    ? 'bg-accent hover:bg-accent-dark text-white focus:ring-accent'
    : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 focus:ring-gray-300'
  
  const MotionButton = motion.button
  
  const handleClick = () => {
    // Non-blocking click handler
    try {
      window.open(GROUPME_URL, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.log('Button click handled')
    }
  }
  
  return (
    <MotionButton
      className={`${baseClasses} ${variantClasses}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      aria-label="Join Jesus Club GroupMe"
    >
      {children}
    </MotionButton>
  )
}
