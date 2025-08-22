'use client'

import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation, staggerContainer } from '../(lib)/motion'
import { useEffect, useRef } from 'react'

const events = [
  {
    title: 'Hangouts',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    image: '/images/hygiene-kit.jpg',
    videoSrc: '/videos/hangouts.mp4',
    placeholder: false
  },
  {
    title: 'Cross Summit',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop',
    videoSrc: '/videos/CrossMount.mp4',
    placeholder: false
  },
  {
    title: 'Volunteer Work',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 8.974l-1.902-1.902a3.75 3.75 0 00-5.304 0L12 9.75l-1.412-1.678a3.75 3.75 0 00-5.304 0L3.382 8.974a3.75 3.75 0 00-.75 2.69V18a3 3 0 003 3h15a3 3 0 003-3v-6.336c0-.96-.27-1.9-.75-2.69z" />
      </svg>
    ),
    image: '/images/helping.jpg',
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
      <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
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
    <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        controls={false}
        onLoadedMetadata={(e) => {
          console.log('Event video loaded, duration:', e.currentTarget.duration);
        }}
        onPlay={(e) => {
          console.log('Event video started playing');
        }}
        onEnded={(e) => {
          console.log('Event video ended, should loop');
        }}
      >
        <source src={src!} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default function Events() {
  const isDesktop = useIsDesktop()

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <ConditionalMotion
          isDesktop={isDesktop}
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold font-space-grotesk mb-6 text-balance">
            Our Events
          </h2>
          <p className="text-body text-gray-700 max-w-3xl mx-auto text-balance">
            Join us for weekly hangouts and monthly service events that make a real difference in our community.
          </p>
        </ConditionalMotion>

        <ConditionalMotion
          isDesktop={isDesktop}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <ConditionalMotion
              key={event.title}
              isDesktop={isDesktop}
              variants={scrollAnimation}
              className="card overflow-hidden group"
            >
              {event.videoSrc ? (
                <VideoPlayer 
                  src={event.videoSrc} 
                  placeholder={event.placeholder} 
                  title={event.title}
                />
              ) : (
                <div className="relative h-80 bg-gray-200 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold font-space-grotesk text-center">
                  {event.title}
                </h3>
              </div>
            </ConditionalMotion>
          ))}
        </ConditionalMotion>
      </div>
    </section>
  )
}
