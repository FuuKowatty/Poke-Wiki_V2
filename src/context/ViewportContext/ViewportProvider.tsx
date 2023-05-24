import { useViewport } from 'hooks/useViewport'
import { createContext, useContext } from 'react'

interface ContextProps {
  browserWidth: number | null
  isMobile: boolean | null
  isTablet: boolean | null
}

export const ViewportContext = createContext<ContextProps>({
  browserWidth: null,
  isMobile: null,
  isTablet: null,
})

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const viewportContextValue = useViewport()

  return (
    <ViewportContext.Provider value={viewportContextValue}>{children}</ViewportContext.Provider>
  )
}

export const useViewportContext = () => useContext(ViewportContext)
