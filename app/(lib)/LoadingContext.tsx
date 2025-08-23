'use client'

import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

interface LoadingState {
  heroReady: boolean
  eventsReady: boolean
  setHeroReady: (ready: boolean) => void
  setEventsReady: (ready: boolean) => void
  isPageFullyLoaded: boolean
}

const LoadingContext = createContext<LoadingState | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [heroReady, setHeroReady] = useState(false)
  const [eventsReady, setEventsReady] = useState(false)

  const isPageFullyLoaded = heroReady && eventsReady

  const handleSetHeroReady = useCallback((ready: boolean) => {
    setHeroReady(ready)
  }, [])

  const handleSetEventsReady = useCallback((ready: boolean) => {
    setEventsReady(ready)
  }, [])

  return (
    <LoadingContext.Provider value={{
      heroReady,
      eventsReady,
      setHeroReady: handleSetHeroReady,
      setEventsReady: handleSetEventsReady,
      isPageFullyLoaded
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
