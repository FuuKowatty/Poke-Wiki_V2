import { useViewport } from 'hooks/useViewport'
import { useState, createContext, ReactNode } from 'react'

interface ContextProps {
  browserWidth: number
  isMobile: boolean
  favorites: any
  setFavorites: React.Dispatch<React.SetStateAction<{ type: string; name: string }[]>>
  favoriteItemsLimit: number
}

interface FavoritesProps {
  type: string
  name: string
}

export const Context = createContext<ContextProps>({
  browserWidth: 0,
  isMobile: false,
  favorites: [],
  setFavorites: () => {
    console.log('milego')
  },
  favoriteItemsLimit: 20,
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoritesProps[] | []>([])
  const favoriteItemsLimit = 20
  const browserWidth = useViewport()
  const isMobile = browserWidth < 620

  return (
    <Context.Provider
      value={{
        browserWidth,
        isMobile,
        favorites,
        setFavorites,
        favoriteItemsLimit,
      }}
    >
      {children}
    </Context.Provider>
  )
}
