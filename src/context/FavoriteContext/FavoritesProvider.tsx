import { FavoritesProps, useFavorites } from 'hooks/useFavorites'
import { createContext, useContext } from 'react'

interface ContextProps {
  favorites: FavoritesProps[]
  handleAddFavorite: (type: string, name: string) => void
  handleClearItems: () => void
  favoriteItemsLimit: number | null
}

export const FavoritesContext = createContext<ContextProps>({
  favorites: [],
  handleAddFavorite: () => {
    console.warn('handleAddFavorite is not implemented in FavoritesContext')
  },
  handleClearItems: () => {
    console.warn('handleClearItems is not implemented in FavoritesContext')
  },
  favoriteItemsLimit: null,
})

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const favoriteContext = useFavorites()

  return <FavoritesContext.Provider value={favoriteContext}>{children}</FavoritesContext.Provider>
}

export const useFavoriteContext = () => useContext(FavoritesContext)
