import { Button } from 'styles/globalComponents'
import { theme } from 'styles/theme'
import { FiltersContainer } from 'components/Filters/Filters.styled'
import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`

export const TypeFiltersContainer = styled.div`
  display: flex;
  gap: ${theme.spacing['3']};
`

export const FavoriteItemsCount = styled.p`
  font-size: ${theme.size['md']};
  font-weight: bold;
`

export const ClearItemsButton = styled(Button)`
  margin-left: auto;
`

export const FilterFavoriteContainer = styled(FiltersContainer)`
  gap: ${theme.spacing['3']};
`

export const FilterButton = styled(Button)<{ isActive: boolean }>`
  border-radius: 10px;
  background: ${({ isActive }) =>
    isActive ? theme.colors['standsOut'] : theme.colors['bannerColor']};
  border: 1px solid
    ${({ isActive }) => (isActive ? theme.colors['darkBlue'] : theme.colors['primary'])};
  color: ${({ isActive }) => (isActive ? theme.colors['darkBlue'] : theme.colors['primary'])};
`
