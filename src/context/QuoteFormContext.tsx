'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface QuoteFormContextType {
  mobileFormExpanded: boolean
  setMobileFormExpanded: (expanded: boolean) => void
  desktopFormExpanded: boolean
  setDesktopFormExpanded: (expanded: boolean) => void
}

const QuoteFormContext = createContext<QuoteFormContextType | undefined>(undefined)

export function QuoteFormProvider({ children }: { children: ReactNode }) {
  const [mobileFormExpanded, setMobileFormExpanded] = useState(false)
  const [desktopFormExpanded, setDesktopFormExpanded] = useState(false)

  return (
    <QuoteFormContext.Provider value={{ mobileFormExpanded, setMobileFormExpanded, desktopFormExpanded, setDesktopFormExpanded }}>
      {children}
    </QuoteFormContext.Provider>
  )
}

export function useQuoteForm() {
  const context = useContext(QuoteFormContext)
  if (context === undefined) {
    throw new Error('useQuoteForm must be used within a QuoteFormProvider')
  }
  return context
}
