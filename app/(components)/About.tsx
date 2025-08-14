'use client'

import { motion } from 'framer-motion'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation, staggerContainer } from '../(lib)/motion'

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Friendship',
    description: 'Build genuine relationships with fellow students who share your values.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Faith in Action',
    description: 'Put your faith into practice through meaningful service and community engagement.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Real Impact',
    description: 'Make a difference in Boulder through hands-on service projects and outreach.'
  }
]

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
            Jesus Club is a student-led community at CU Boulder where friendships grow through faith and service. 
            We keep it simple: show up, serve together, and hang out.
          </p>
        </ConditionalMotion>

        {/* Value Cards */}
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
              className="card p-8 text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent/20 transition-colors duration-200">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold font-space-grotesk mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 text-balance">
                {value.description}
              </p>
            </ConditionalMotion>
          ))}
        </ConditionalMotion>
      </div>
    </section>
  )
}
