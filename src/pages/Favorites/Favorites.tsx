import {
  ClearItemsButton,
  FavoriteItemsCount,
  FilterButton,
  FilterFavoriteContainer,
  TypeFiltersContainer,
} from './Favorites.styled'
import { favItem } from 'components/CardInterface/CardInterface'
import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { GridContainer } from 'styles/globalComponents'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { useState } from 'react'

const filtersButtonText = ['all', 'pokemons', 'berries']

export function Favorites() {
  const { favorites, handleClearItems, favoriteItemsLimit } = useFavoriteContext()
  const [acutallFilters, setAcutallFilters] = useState('all')

  const filteredFavorites =
    acutallFilters === 'all'
      ? favorites
      : favorites.filter((fav: favItem) => acutallFilters.startsWith(fav.type))

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement
    const value = target.getAttribute('data-value') as string
    setAcutallFilters(value)
  }

  return (
    <>
      <FilterFavoriteContainer>
        <TypeFiltersContainer>
          {filtersButtonText.map((text) => (
            <FilterButton
              key={text}
              data-value={text}
              onClick={handleFilter}
              isActive={text === acutallFilters}
            >
              {text}
            </FilterButton>
          ))}
        </TypeFiltersContainer>
        <ClearItemsButton onClick={handleClearItems}>Clear all</ClearItemsButton>
        <FavoriteItemsCount>
          {filteredFavorites.length} / {favoriteItemsLimit}
        </FavoriteItemsCount>
      </FilterFavoriteContainer>
      <GridContainer>
        {filteredFavorites.map((fav: favItem) => {
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
