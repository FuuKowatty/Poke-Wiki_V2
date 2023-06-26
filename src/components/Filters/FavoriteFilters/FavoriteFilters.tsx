
import {
  ClearItemsButton,
  FavoriteItemsCount,
  FilterButton,
  FilterFavoriteContainer,
  TypeFiltersContainer,
} from 'components/Filters/FavoriteFilters/FavoriteFilters.styled'
import { FiltersButtonText } from 'data/data'




interface FavoriteFiltersProps {
  actualFilters: string
  favorites: FavItem[]
  handleActualFilters: (buttonValue: string) => void
  handleClearItems: () => void
  favoriteItemsLimit: number
}

export function FavoriteFilters({
  actualFilters,
  favorites,
  handleActualFilters,
  handleClearItems,
  favoriteItemsLimit,
}: FavoriteFiltersProps) {

  const handleFilter = (text : string) => {
    handleActualFilters(text)
  }



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
