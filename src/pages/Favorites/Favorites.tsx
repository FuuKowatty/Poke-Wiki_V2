import { FilterButton, FilterFavoriteContainer } from './Favorites.styled'
import { favItem } from 'components/CardInterface/CardInterface'
import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { GridContainer } from 'styles/globalComponents'
import { useFavorites } from 'hooks/useFavorites'
import { useEffect, useState } from 'react'

export function Favorites() {
  const { favorites } = useFavorites()
  const [acutallFilters, setacutallFilters] = useState('all')
  const [arr, setArr] = useState([])

  const filtersButtonText = ['all', 'pokemons', 'berries']

  useEffect(() => {
    if (acutallFilters === 'all') {
      setArr(favorites)
    } else if (acutallFilters === 'pokemons') {
      setArr(favorites.filter((fav: favItem) => fav.type === 'pokemon'))
    } else if (acutallFilters === 'berries') {
      setArr(favorites.filter((fav: favItem) => fav.type === 'berry'))
    }
  }, [favorites, acutallFilters])

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement
    const value = target.getAttribute('data-value') as string
    setacutallFilters(value)
  }

  return (
    <>
      <FilterFavoriteContainer>
        {filtersButtonText.map((text) => (
          <FilterButton key={text} data-value={text} onClick={(e) => handleFilter(e)}>
            {text}
          </FilterButton>
        ))}
      </FilterFavoriteContainer>
      <GridContainer>
        {arr.map((fav: favItem) => {
          const { name, type } = fav
          if (type === 'pokemon') {
            return <PokemonCard key={name} name={name} />
          } else if (type === 'berry') {
            return <BerryCard key={name} url={name} />
          }
        })}
      </GridContainer>
    </>
  )
}
