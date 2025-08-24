import { Suspense, lazy } from 'react'
import { LoadingProvider } from './(lib)/LoadingContext'
import Header from './(components)/Header'
import Hero from './(components)/Hero'
import FloatingJoinButton from './(components)/FloatingJoinButton'
import LoadingIndicator from './(components)/LoadingIndicator'

// Lazy load non-critical components
const Events = lazy(() => import('./(components)/Events'))
const About = lazy(() => import('./(components)/About'))
const WhatWeDo = lazy(() => import('./(components)/WhatWeDo'))
const GetInvolved = lazy(() => import('./(components)/GetInvolved'))
const FAQ = lazy(() => import('./(components)/FAQ'))
const Footer = lazy(() => import('./(components)/Footer'))

// Loading fallback component
const ContentLoader = () => (
  <div className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  </div>
)

export default function Home() {
  return (
    <LoadingProvider>
      <LoadingIndicator />
      <main className="bg-white">
        {/* Priority 1: Navigation and Core Functionality - Loads Immediately */}
        <Header />
        
        {/* Priority 2: Hero with Buttons - Loads Immediately */}
        <Hero />
        
        {/* Priority 3: Floating Button for Mobile - Loads Immediately */}
        <FloatingJoinButton />
        
        {/* Priority 4: Content Sections - Loaded Progressively */}
        <Suspense fallback={<ContentLoader />}>
          <Events />
        </Suspense>
        
        <Suspense fallback={<ContentLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<ContentLoader />}>
          <WhatWeDo />
        </Suspense>
        
        <Suspense fallback={<ContentLoader />}>
          <GetInvolved />
        </Suspense>
        
        <Suspense fallback={<ContentLoader />}>
          <FAQ />
        </Suspense>
        
        <Suspense fallback={<ContentLoader />}>
          <Footer />
        </Suspense>
      </main>
    </LoadingProvider>
  )
}
