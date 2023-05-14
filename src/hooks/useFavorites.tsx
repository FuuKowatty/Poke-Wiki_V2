import { useAppContext } from './useAppContext'
import { favItem } from 'components/CardInterface/CardInterface'
import { useEffect } from 'react'

export const useFavorites = () => {
  const { favorites, setFavorites } = useAppContext()

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') as string) || []
    setFavorites(storedFavorites)
  }, [])

  function handleAddFavorite(type: string, name: string) {
    if(favorites.length === 20) return
    const favArr = JSON.parse(localStorage.getItem('favorites') as string) || []
    const favNames = favArr.map((fav: favItem) => fav.name)
    if (favNames.indexOf(name) === -1) {
      const newFav = {
        type: type,
        name: name,
      }
      localStorage.setItem('favorites', JSON.stringify([...favArr, newFav]))
      setFavorites([...favArr, newFav])
    } else {
      const filteredFavArr = favArr.filter((fav: favItem) => fav.name !== name)
      localStorage.setItem('favorites', JSON.stringify(filteredFavArr))
      setFavorites(filteredFavArr)
    }
  }

  return { favorites, handleAddFavorite }
}
