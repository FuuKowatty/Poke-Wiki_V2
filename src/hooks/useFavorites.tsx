import { useEffect, useState } from 'react'

export interface FavoritesProps {
  type: string
  name: string
}

const LOCALSTORAGE_KEY = 'favorites'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoritesProps[]>([])
  const favoriteItemsLimit = 20

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string) || []
    setFavorites(storedFavorites)
  }, [])

  function handleClearItems() {
    setFavorites([])
    localStorage.removeItem(LOCALSTORAGE_KEY)
  }

  function handleAddFavorite(type: string, name: string) {
    if (favorites.length === favoriteItemsLimit) return

    const favNames = favorites.map((fav: FavItem) => fav.name)
    const favIndex = favNames.indexOf(name)

    if (favIndex === -1) {
      const newFav = {
        type: type,
        name: name,
      }

      const updatedFavorites = [...favorites, newFav]
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    } else {
      const updatedFavorites = [...favorites]
      updatedFavorites.splice(favIndex, 1)

      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
    }
  }

  return { favorites, handleAddFavorite, handleClearItems, favoriteItemsLimit }
}
