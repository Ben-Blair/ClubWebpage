'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import JoinButton from './JoinButton'

const navItems = [
  { name: 'Events', href: '#events' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false)
    
    // Scroll with extra padding at top
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 64 // Height of the sticky header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight - 30 // Add 30px extra padding
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 200) // Longer delay to ensure menu closes
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-xl font-bold font-space-grotesk cursor-pointer"
            >
              JesusClubCU.com
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <JoinButton size="sm" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-gray-800"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-white hover:text-accent transition-colors duration-200 font-medium text-left py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4">
                  <JoinButton size="md" className="w-full" />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
