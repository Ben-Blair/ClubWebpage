'use client'

import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation, staggerContainer } from '../(lib)/motion'
import JoinButton from './JoinButton'

const events = [
  {
    title: 'Hygiene Kit Outreach',
    description: 'Assemble kits and share them with people experiencing homelessness across Boulder.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 8.974l-1.902-1.902a3.75 3.75 0 00-5.304 0L12 9.75l-1.412-1.678a3.75 3.75 0 00-5.304 0L3.382 8.974a3.75 3.75 0 00-.75 2.69V18a3 3 0 003 3h15a3 3 0 003-3v-6.336c0-.96-.27-1.9-.75-2.69z" />
      </svg>
    ),
    image: '/images/hygiene-kit.jpg'
  },
  {
    title: 'Cross Summit',
    description: 'Hike a local peak together and place a cross at the summit as a sign of hope.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop'
  },
  {
    title: 'Hangouts',
    description: 'Coffee runs, study sessions, game nights, and spontaneous fun.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop'
  }
]

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
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 text-balance">
                  {event.description}
                </p>
                <JoinButton size="sm" className="w-full">
                  Join GroupMe
                </JoinButton>
              </div>
            </ConditionalMotion>
          ))}
        </ConditionalMotion>
      </div>
    </section>
  )
}
