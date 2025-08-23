'use client'

import { motion } from 'framer-motion'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation } from '../(lib)/motion'

const values = []



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


      </div>
    </section>
  )
}
