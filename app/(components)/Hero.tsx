'use client'

import { motion } from 'framer-motion'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import JoinButton from './JoinButton'
import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const isDesktop = useIsDesktop()
  const [videoError, setVideoError] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  // Check for slow connection and handle video end
  useEffect(() => {
    // Check if connection is slow (3G or slower)
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    const isSlow = connection && (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' || 
      connection.effectiveType === '3g' ||
      connection.downlink < 1.5 // Less than 1.5 Mbps
    )

    if (isSlow) {
      setIsSlowConnection(true)
    }

    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      // Pause at the last frame instead of looping
      video.pause()
    }

    const handleVideoLoaded = () => {
      if (isSlowConnection) {
        // For slow connections, pause at first frame
        video.pause()
        video.currentTime = 0
      }
    }

    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('loadeddata', handleVideoLoaded)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('loadeddata', handleVideoLoaded)
    }
  }, [isSlowConnection])

  // Scroll-based bubble animation
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
      
      {/* Hero Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay={!isSlowConnection}
        muted
        playsInline
        onError={handleVideoError}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback to og-image if video can't play */}
      </video>

      {/* Scroll-Responsive Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bubble 1 */}
        <div 
          className="absolute w-4 h-4 bg-white rounded-full opacity-30"
          style={{
            left: '10%',
            bottom: '-100px',
            transform: `translateY(${scrollProgress * -100}vh) scale(${1 + scrollSpeed * 0.1})`,
            opacity: 0.3 * Math.min(1, scrollSpeed * 10),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 2 */}
        <div 
          className="absolute w-6 h-6 bg-white rounded-full opacity-25"
          style={{
            left: '25%',
            bottom: '-150px',
            transform: `translateY(${scrollProgress * -120}vh) scale(${1 + scrollSpeed * 0.15})`,
            opacity: 0.25 * Math.min(1, scrollSpeed * 8),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 3 */}
        <div 
          className="absolute w-3 h-3 bg-white rounded-full opacity-35"
          style={{
            left: '40%',
            bottom: '-80px',
            transform: `translateY(${scrollProgress * -80}vh) scale(${1 + scrollSpeed * 0.08})`,
            opacity: 0.35 * Math.min(1, scrollSpeed * 12),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 4 */}
        <div 
          className="absolute w-5 h-5 bg-white rounded-full opacity-20"
          style={{
            left: '60%',
            bottom: '-200px',
            transform: `translateY(${scrollProgress * -140}vh) scale(${1 + scrollSpeed * 0.12})`,
            opacity: 0.2 * Math.min(1, scrollSpeed * 6),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 5 */}
        <div 
          className="absolute w-4 h-4 bg-white rounded-full opacity-30"
          style={{
            left: '80%',
            bottom: '-120px',
            transform: `translateY(${scrollProgress * -90}vh) scale(${1 + scrollSpeed * 0.09})`,
            opacity: 0.3 * Math.min(1, scrollSpeed * 9),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 6 */}
        <div 
          className="absolute w-7 h-7 bg-white rounded-full opacity-15"
          style={{
            left: '15%',
            bottom: '-250px',
            transform: `translateY(${scrollProgress * -160}vh) scale(${1 + scrollSpeed * 0.18})`,
            opacity: 0.15 * Math.min(1, scrollSpeed * 4),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 7 */}
        <div 
          className="absolute w-3 h-3 bg-white rounded-full opacity-40"
          style={{
            left: '70%',
            bottom: '-90px',
            transform: `translateY(${scrollProgress * -70}vh) scale(${1 + scrollSpeed * 0.07})`,
            opacity: 0.4 * Math.min(1, scrollSpeed * 15),
            transition: 'all 0.1s ease-out',
          }}
        />
        
        {/* Bubble 8 */}
        <div 
          className="absolute w-5 h-5 bg-white rounded-full opacity-25"
          style={{
            left: '90%',
            bottom: '-180px',
            transform: `translateY(${scrollProgress * -110}vh) scale(${1 + scrollSpeed * 0.11})`,
            opacity: 0.25 * Math.min(1, scrollSpeed * 7),
            transition: 'all 0.1s ease-out',
          }}
        />
      </div>

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

