'use client'

import { motion } from 'framer-motion'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import { useLoading } from '../(lib)/LoadingContext'
import JoinButton from './JoinButton'
import RainbowWaveText from './RainbowWaveText'
import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const isDesktop = useIsDesktop()
  const { setHeroReady } = useLoading()
  const [videoError, setVideoError] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const [buttonsReady, setButtonsReady] = useState(true) // Buttons are ready immediately
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  const scrollToEvents = () => {
    const element = document.querySelector('#events')
    if (element) {
      const headerHeight = 64 // Height of the sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight - 5 // Reduced to 5px padding
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  // Ensure buttons are immediately functional - this runs first
  useEffect(() => {
    // Buttons are ready immediately - no waiting for videos or other content
    setButtonsReady(true)
  }, [])

  // Signal that hero is ready when rainbow text animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroReady(true)
    }, 2000) // Allow time for rainbow text animation to complete and settle

    return () => clearTimeout(timer)
  }, [setHeroReady])

  // Check for slow connection (non-blocking)
  useEffect(() => {
    const checkConnection = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const isSlow = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' || 
        connection.effectiveType === '3g' ||
        connection.downlink < 1.5
      )

      if (isSlow) {
        setIsSlowConnection(true)
      }
    }

    // Check connection asynchronously - don't block button functionality
    setTimeout(checkConnection, 100)
  }, [])

  // Scroll-based bubble animation (non-blocking)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const timeDiff = currentTime - lastScrollTime.current
      const scrollDiff = currentScrollY - lastScrollY.current
      
      // Calculate scroll speed (pixels per millisecond)
      const speed = timeDiff > 0 ? Math.abs(scrollDiff) / timeDiff : 0
      setScrollSpeed(speed)
      
      // Calculate scroll progress through the section
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ))
      setScrollProgress(progress)
      
      lastScrollY.current = currentScrollY
      lastScrollTime.current = currentTime
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const MotionDiv = isDesktop ? motion.div : 'div'

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg opacity-50"></div>
      
      {/* Fallback Image Background - shown when video fails to load */}
      {videoError && (
        <div 
          className="absolute inset-0 w-full h-full object-cover opacity-70 bg-cover bg-center"
          style={{ backgroundImage: 'url(/og-image.png)' }}
        ></div>
      )}
      
      {/* Hero Video Background - Loads asynchronously */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay={!isSlowConnection}
        loop
        muted
        playsInline
        preload="metadata"
        onError={handleVideoError}
        onLoadStart={() => console.log('Hero video loading started')}
        onCanPlay={() => console.log('Hero video can play')}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Content - Always visible and functional */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <MotionDiv
          initial={isDesktop ? { opacity: 0, y: 30 } : {}}
          animate={isDesktop ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <h1 className="text-7xl sm:text-8xl font-black font-space-grotesk mb-6 text-balance">
            Jesus Club
          </h1>
          
          {/* Subheadline */}
          <div className="mb-32">
            <RainbowWaveText 
              text="Very Chill & Ultra Vibeyy"
              className="text-body text-[1.75rem] sm:text-[1.8rem] text-balance"
            />
          </div>
          
          {/* CTAs - Always functional */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <JoinButton size="lg" className="w-full sm:w-auto">
              Join GroupMe
            </JoinButton>
            <button
              onClick={scrollToEvents}
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 text-lg rounded-lg border border-gray-300 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 w-full sm:w-auto"
            >
              What We Do
            </button>
          </div>
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToEvents}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
          aria-label="Scroll to events section"
        >
          <svg 
            className="w-8 h-8 text-white opacity-70 drop-shadow-[0_0_2px_rgba(0,0,0,1)]" 
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
        </button>
      </MotionDiv>
    </section>
  )
}

