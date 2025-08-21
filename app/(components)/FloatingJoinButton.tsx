'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import JoinButton from './JoinButton'

export default function FloatingJoinButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    const handleScroll = () => {
      // Only show on mobile and after scrolling down 200px
      const scrollY = window.scrollY
      setIsVisible(isMobile && scrollY > 200)
    }

    // Check screen size on mount and resize
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    // Handle scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('resize', checkScreenSize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 lg:hidden"
        >
          <JoinButton 
            size="md" 
            className="shadow-lg hover:shadow-xl"
          >
            Join GroupMe
          </JoinButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
