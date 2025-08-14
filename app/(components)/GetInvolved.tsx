'use client'

import { useIsDesktop } from '../(lib)/useIsDesktop'
import { ConditionalMotion, scrollAnimation } from '../(lib)/motion'
import JoinButton from './JoinButton'

const steps = [
  {
    number: '1',
    title: 'Tap Join',
    description: 'Click the Join GroupMe button to get connected'
  },
  {
    number: '2',
    title: 'Say Hi',
    description: 'Introduce yourself in the group chat'
  },
  {
    number: '3',
    title: 'Come to the next meetup',
    description: 'Join us for our next event or hangout'
  }
]

export default function GetInvolved() {
  const isDesktop = useIsDesktop()

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <ConditionalMotion
          isDesktop={isDesktop}
          variants={scrollAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-h2 font-bold font-space-grotesk mb-6 text-balance">
            Get Involved
          </h2>
          <p className="text-body text-gray-700 mb-12 text-balance">
            It's that simple. No complicated process, no pressure.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-balance">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <JoinButton size="lg" className="w-full sm:w-auto">
              Join GroupMe
            </JoinButton>
            <p className="text-sm text-gray-500">
              No dues. All students welcome.
            </p>
          </div>
        </ConditionalMotion>
      </div>
    </section>
  )
}
