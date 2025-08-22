'use client'

import { motion } from 'framer-motion'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation, staggerContainer } from '../(lib)/motion'
import { useEffect, useRef } from 'react'

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Friendship',
    videoSrc: null,
    placeholder: true
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Faith in Action',
    videoSrc: null,
    placeholder: true
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Real Impact',
    videoSrc: null,
    placeholder: true
  }
]

// Video Component
function VideoPlayer({ src, placeholder, title }: { src: string | null, placeholder: boolean, title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && !placeholder) {
      const video = videoRef.current;
      
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video autoplay successful');
        } catch (error) {
          console.log('Autoplay failed:', error);
        }
      };

      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo);
        return () => video.removeEventListener('loadeddata', playVideo);
      }
    }
  }, [placeholder]);

  if (placeholder) {
    return (
      <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 font-medium">{title} Video</p>
          <p className="text-xs text-gray-400 mt-1">Coming Soon</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        onLoadedMetadata={(e) => {
          console.log('Video loaded, duration:', e.currentTarget.duration);
        }}
        onPlay={(e) => {
          console.log('Video started playing');
        }}
        onEnded={(e) => {
          console.log('Video ended, should loop');
        }}
      >
        <source src={src!} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default function About() {
  const isDesktop = useIsDesktop()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <ConditionalMotion
          isDesktop={isDesktop}
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-h2 font-bold font-space-grotesk mb-6 text-balance">
            About Jesus Club
          </h2>
          <p className="text-body text-gray-700 max-w-3xl mx-auto text-balance">
            Just a club where you can meet new people, do cool stuff, and do some good.
            <br />
            <span className="font-semibold">STUDENT RUN — FREE TO JOIN</span>
          </p>
        </ConditionalMotion>

        {/* Value Cards with Videos */}
        <ConditionalMotion
          isDesktop={isDesktop}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <ConditionalMotion
              key={value.title}
              isDesktop={isDesktop}
              variants={scrollAnimation}
              className="card p-6 text-center group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold font-space-grotesk mb-3">
                {value.title}
              </h3>
              <VideoPlayer 
                src={value.videoSrc} 
                placeholder={value.placeholder} 
                title={value.title}
              />
            </ConditionalMotion>
          ))}
        </ConditionalMotion>
      </div>
    </section>
  )
}
