'use client'

import { useLoading } from '../(lib)/LoadingContext'
import { motion } from 'framer-motion'

export default function LoadingIndicator() {
  const { heroReady, eventsReady, isPageFullyLoaded } = useLoading()

  if (isPageFullyLoaded) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ width: "0%" }}
        animate={{ 
          width: heroReady ? "100%" : "50%"
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  )
}
