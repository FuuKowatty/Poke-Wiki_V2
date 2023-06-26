import { useEffect, useState } from 'react'

export interface Favorites {
  type: string
  name: string
}

const LOCALSTORAGE_KEY = 'favorites'

const getFavorites = () => {
  const stringifiedFavorites = localStorage.getItem(LOCALSTORAGE_KEY)

  if(!stringifiedFavorites) {
    return []
  }

  const favorites = JSON.parse(stringifiedFavorites)
  return favorites

}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Favorites[]>([])
  const favoriteItemsLimit = 20

  useEffect(() => {
    setFavorites(getFavorites())
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
        type,
        name,
      }

      const updatedFavorites = [...favorites, newFav]
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites)
      return;
    }
    const updatedFavorites = [...favorites]
    updatedFavorites.splice(favIndex, 1)

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites)
  }

  return { favorites, handleAddFavorite, handleClearItems, favoriteItemsLimit }
}
