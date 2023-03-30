import { useViewport } from 'hooks/useViewport'
import { createContext, ReactNode, useState } from 'react'

export const Context = createContext({
  isMobile: false,
  isMobileSearchbarToggled: false,
  toggleMobileSearchbar: () => {
    console.log('siema')
  },
})

export function AppProvider({ children }: { children: ReactNode }) {
  const isMobile = useViewport()
  const [isMobileSearchbarToggled, setIsMobileSearchbarToggled] = useState(false)

  const toggleMobileSearchbar = () => {
    console.log(isMobileSearchbarToggled)
    setIsMobileSearchbarToggled((prev) => !prev)
  }

  return (
    <Context.Provider value={{ isMobile, isMobileSearchbarToggled, toggleMobileSearchbar }}>
      {children}
    </Context.Provider>
  )
}
