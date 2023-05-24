import { favItem } from 'components/CardInterface/CardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import {
  ClearItemsButton,
  FavoriteItemsCount,
  FilterButton,
  FilterFavoriteContainer,
  TypeFiltersContainer,
} from 'components/Filters/FavoriteFilters/FavoriteFilters.styled'
import { useEffect } from 'react'

const filtersButtonText = ['all', 'pokemons', 'berries']

interface FavoriteFiltersProps {
  actualFilters: string
  handleActualFilters: (buttonValue: string) => void
  handleSelectFilters: (filteredType: favItem[]) => void
}

export function FavoriteFilters({
  actualFilters,
  handleActualFilters,
  handleSelectFilters,
}: FavoriteFiltersProps) {
  const { favorites, handleClearItems, favoriteItemsLimit } = useFavoriteContext()

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement
    const value = target.getAttribute('data-value') as string
    handleActualFilters(value)
  }

  useEffect(() => {
    const filteredFavorites =
      actualFilters === 'all'
        ? favorites
        : favorites.filter((fav: favItem) => {
            return actualFilters === 'berries' ? fav.type === 'berry' : fav.type === 'pokemon'
          })

    handleSelectFilters(filteredFavorites)
  }, [actualFilters, favorites])

  return (
    <FilterFavoriteContainer>
      <TypeFiltersContainer>
        {filtersButtonText.map((text) => (
          <FilterButton
            key={text}
            data-value={text}
            onClick={handleFilter}
            isActive={text === actualFilters}
          >
            {text}
          </FilterButton>
        ))}
      </TypeFiltersContainer>
      <ClearItemsButton onClick={handleClearItems}>Clear all</ClearItemsButton>
      <FavoriteItemsCount>
        {favorites.length} / {favoriteItemsLimit}
      </FavoriteItemsCount>
    </FilterFavoriteContainer>
  )
}
