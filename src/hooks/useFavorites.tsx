import { favItem } from 'components/CardInterface/CardInterface'
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
    const favArr = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) as string) || []
    const favNames = favArr.map((fav: favItem) => fav.name)
    if (favNames.indexOf(name) === -1) {
      const newFav = {
        type: type,
        name: name,
      }
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify([...favArr, newFav]))
      setFavorites([...favArr, newFav])
    } else {
      const filteredFavArr = favArr.filter((fav: favItem) => fav.name !== name)
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filteredFavArr))
      setFavorites(filteredFavArr)
    }
  }

  return { favorites, handleAddFavorite, handleClearItems, favoriteItemsLimit }
}
