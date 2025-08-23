'use client'

import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation } from '../(lib)/motion'

export default function Footer() {
  const isDesktop = useIsDesktop()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 pb-20 sm:pb-0">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <ConditionalMotion
          isDesktop={isDesktop}
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Logo */}
          <h3 className="text-2xl font-bold font-space-grotesk mb-4">
            Jesus Club
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 max-w-md mx-auto text-balance">
            Student-led community at CU Boulder where friendships grow through faith and service.
          </p>
          
          {/* Bible Verse */}
          <div className="border-t border-gray-200 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-2">
                Hebrews 13:16
              </p>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                "And don't forget to do good and to share with those in need. These are the sacrifices that please God."
              </p>
            </div>
          </div>
        </ConditionalMotion>
      </div>
    </footer>
  )
}
