import { Button } from 'styles/globalComponents'
import { FiltersContainer } from 'components/Filters/Filters.styled'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const TypeFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${(props) => props.theme.spacing['2']};
`

export const FavoriteItemsCount = styled.p`
  font-size: ${(props) => props.theme.size['md']};
  font-weight: bold;
`

export const ClearItemsButton = styled(Button)`
  border-radius: 8px;
  min-width: 120px;
  padding: ${(props) => props.theme.spacing['2']} ${(props) => props.theme.spacing['3']};
  border: 1px solid ${(props) => props.theme.colors['standsOut']};

  @media ${device['tablet']} {
    margin-left: auto;
  }
`

export const FilterFavoriteContainer = styled(FiltersContainer)`
  gap: ${(props) => props.theme.spacing['3']};
  padding: ${(props) => props.theme.spacing[3]};

  @media ${device['desktop']} {
    padding: ${(props) => props.theme.spacing[3]} 0;
  }
`

export const FilterButton = styled(Button)<{ isActive: boolean }>`
  min-width: 100px;
  padding: ${(props) => props.theme.spacing['2']} ${(props) => props.theme.spacing['3']};
  border-radius: 8px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors['standsOut'] : theme.colors['bannerColor']};
  border: 1px solid
    ${({ isActive, theme }) => (isActive ? theme.colors['darkBlue'] : theme.colors['primary'])};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors['darkBlue'] : theme.colors['primary']};

  @media ${device['laptop']} {
    min-width: 120px;
  }
`
