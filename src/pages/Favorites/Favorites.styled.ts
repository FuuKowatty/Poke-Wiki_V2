import { GridContainer } from 'styles/globalComponents'
import { device } from 'utils/breakpoints'
import { theme } from 'styles/theme'
import { FiltersContainer } from 'components/Filters/Filters.styled'
import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['5']};
`

export const FlexContainer = styled(GridContainer)`
  @media ${device['desktop']} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 720px;
  }
`

export const FilterFavoriteContainer = styled(FiltersContainer)`
  justify-content: start;
  gap: ${theme.spacing['3']}
`

export const FilterButton = styled.button`
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  border-radius: 10px;
  background: ${theme.colors['bannerColor']};
  border: 1px solid ${theme.colors['primary']};
  color: ${theme.colors['primary']};
  font-weight: 900;
`