import { useViewport } from 'hooks/useViewport'
import { createContext, ReactNode } from 'react'

export const Context = createContext({
  browserWidth: 0,
  isMobile: false,
})

export function AppProvider({ children }: { children: ReactNode }) {
  const browserWidth = useViewport()
  const isMobile = browserWidth < 620

  return (
    <Context.Provider
      value={{
        browserWidth,
        isMobile,
      }}
    >
      {children}
    </Context.Provider>
  )
}
