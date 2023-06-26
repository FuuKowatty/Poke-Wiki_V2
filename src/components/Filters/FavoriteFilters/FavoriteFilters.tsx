import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import {
  ClearItemsButton,
  FavoriteItemsCount,
  FilterButton,
  FilterFavoriteContainer,
  TypeFiltersContainer,
} from 'components/Filters/FavoriteFilters/FavoriteFilters.styled'
import { FiltersButtonText } from 'data/data'
import { useEffect } from 'react'




interface FavoriteFiltersProps {
  actualFilters: string
  handleActualFilters: (buttonValue: string) => void
  handleSelectFilters: (filteredType: FavItem[]) => void
}

export function FavoriteFilters({
  actualFilters,
  handleActualFilters,
  handleSelectFilters,
}: FavoriteFiltersProps) {
  const { favorites, handleClearItems, favoriteItemsLimit } = useFavoriteContext()

  const handleFilter = (text : string) => {
    handleActualFilters(text)
  }

  useEffect(() => {
    const filteredFavorites =
      actualFilters === 'all'
        ? favorites
        : favorites.filter((fav) => {
            return actualFilters === 'berries' ? fav.type === 'berry' : fav.type === 'pokemon'
          })

    handleSelectFilters(filteredFavorites)
  }, [actualFilters, favorites])

  return (
    <FilterFavoriteContainer>
      <TypeFiltersContainer>
        {FiltersButtonText.map((text) => (
          <FilterButton
            key={text}
            onClick={()  => handleFilter(text)}
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
