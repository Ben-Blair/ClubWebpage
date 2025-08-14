'use client'

import { motion } from 'framer-motion'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import JoinButton from './JoinButton'
import { useState, useRef } from 'react'

export default function Hero() {
  const isDesktop = useIsDesktop()
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  const MotionDiv = isDesktop ? motion.div : 'div'

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      
      {/* Fallback Image Background - shown when video fails to load */}
      {videoError && (
        <div 
          className="absolute inset-0 w-full h-full object-cover opacity-70 bg-cover bg-center"
          style={{ backgroundImage: 'url(/og-image.png)' }}
        ></div>
      )}
      
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback to og-image if video can't play */}
      </video>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <MotionDiv
          initial={isDesktop ? { opacity: 0, y: 30 } : {}}
          animate={isDesktop ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="text-hero font-bold font-space-grotesk mb-6 text-balance">
            Jesus Club
          </h1>
          
          {/* Subheadline */}
          <p className="text-body text-xl sm:text-2xl mb-8 text-balance opacity-95">
            Student Run. No Dues. Join our Club!
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <JoinButton size="lg" className="w-full sm:w-auto">
              Join GroupMe
            </JoinButton>
            <button
              onClick={scrollToAbout}
              className="btn-secondary w-full sm:w-auto"
            >
              What is Jesus Club?
            </button>
          </div>
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={isDesktop ? { opacity: 0 } : {}}
        animate={isDesktop ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white opacity-70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </MotionDiv>
    </section>
  )
}
