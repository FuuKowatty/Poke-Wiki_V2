import { useViewport } from 'hooks/useViewport'
import { createContext, useContext } from 'react'

interface ContextProps {
  browserWidth: number
  isMobile: boolean 
  isTablet: boolean
}

export const ViewportContext = createContext<ContextProps | null>(null)

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const viewportContextValue = useViewport()

  return (
    <ViewportContext.Provider value={viewportContextValue}>{children}</ViewportContext.Provider>
  )
}

export const useViewportContext = () => {
  const context = useContext(ViewportContext)
  
  if(!context) {
    throw new Error('useViewportContext must be used within a ViewportProvider')
  }

  return context
}


