'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import JoinButton from './JoinButton'

export default function FloatingJoinButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 200px
      const scrollY = window.scrollY
      setIsVisible(scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
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
