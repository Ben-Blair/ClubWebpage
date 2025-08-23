'use client'

import { useState } from 'react'
import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation } from '../(lib)/motion'

const faqs = [
  {
    question: 'Do I have to be religious to join?',
    answer: 'Nah just bring good vibes'
  },
  {
    question: 'Are there any dues?',
    answer: 'Nope but if an event requires money we will ask for donations'
  },
  {
    question: 'What other things do you do?',
    answer: 'Put your ideas in the GroupMe and we\'ll make sure to do them'
  }
]

export default function FAQ() {
  const isDesktop = useIsDesktop()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <ConditionalMotion
          isDesktop={isDesktop}
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-h2 font-bold font-space-grotesk mb-6 text-center text-balance">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ConditionalMotion
                key={index}
                isDesktop={isDesktop}
                variants={scrollAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="card"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset rounded-xl"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold font-space-grotesk text-gray-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  id={`faq-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-3">
                    <p className="text-gray-600 text-balance">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ConditionalMotion>
            ))}
          </div>
        </ConditionalMotion>
      </div>
    </section>
  )
}
