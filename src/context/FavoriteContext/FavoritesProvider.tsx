import { useFavorites } from 'hooks/useFavorites'
import { createContext, useContext } from 'react'

interface ContextProps {
  favorites: Favorites[]
  handleAddFavorite: (type: string, name: string) => void
  handleClearItems: () => void
  favoriteItemsLimit: number
}

export const FavoritesContext = createContext<ContextProps | null>(null)

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const favoriteContext = useFavorites()

  return <FavoritesContext.Provider value={favoriteContext}>{children}</FavoritesContext.Provider>
}

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavoriteContext must be used within a FavoritesProvider')
  }

  return context
}
