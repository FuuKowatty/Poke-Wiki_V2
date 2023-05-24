import { Button } from 'styles/globalComponents'
import { theme } from 'styles/theme'
import { FiltersContainer } from 'components/Filters/Filters.styled'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const TypeFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing['2']};
`

export const FavoriteItemsCount = styled.p`
  font-size: ${theme.size['md']};
  font-weight: bold;
`

export const ClearItemsButton = styled(Button)`
  border-radius: 8px;
  min-width: 120px;
  padding: ${theme.spacing['2']} ${theme.spacing['3']};
  border: 1px solid ${theme.colors['standsOut']};

  @media ${device['tablet']} {
    margin-left: auto;
  }
`

export const FilterFavoriteContainer = styled(FiltersContainer)`
  gap: ${theme.spacing['3']};
  padding: ${theme.spacing[3]};
`

export const FilterButton = styled(Button)<{ isActive: boolean }>`
min-width: 100px;
  padding: ${theme.spacing['2']} ${theme.spacing['3']};
  border-radius: 8px;
  background: ${({ isActive }) =>
    isActive ? theme.colors['standsOut'] : theme.colors['bannerColor']};
  border: 1px solid
    ${({ isActive }) => (isActive ? theme.colors['darkBlue'] : theme.colors['primary'])};
  color: ${({ isActive }) => (isActive ? theme.colors['darkBlue'] : theme.colors['primary'])};


  @media ${device['laptop']} {
    min-width: 120px;
  }
`
