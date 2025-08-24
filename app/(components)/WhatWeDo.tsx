'use client'

import { useIsDesktop } from '../(lib)/useIsDesktop'
import { useLoading } from '../(lib)/LoadingContext'
import { ConditionalMotion, scrollAnimation, staggerContainer } from '../(lib)/motion'

const activities = [
  {
    title: 'Homeless Kits',
    image: '/images/hygiene-kit.jpg'
  },
  {
    title: 'Fundraising',
    image: '/images/fundraising.png'
  }
]

export default function WhatWeDo() {
  const isDesktop = useIsDesktop()
  const { heroReady, setEventsReady } = useLoading()

  return (
    <section id="what-we-do" className="py-20 bg-gray-50">
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
            How We Serve
          </h2>
        </ConditionalMotion>

        <ConditionalMotion
          isDesktop={isDesktop}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {activities.map((activity) => (
            <ConditionalMotion
              key={activity.title}
              isDesktop={isDesktop}
              variants={scrollAnimation}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-space-grotesk text-center">
                  {activity.title}
                </h3>
              </div>
            </ConditionalMotion>
          ))}
        </ConditionalMotion>
      </div>
    </section>
  )
}
