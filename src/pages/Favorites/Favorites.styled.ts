import { GridContainer } from 'styles/globalComponents'
import { device } from 'utils/breakpoints'
import { theme } from 'styles/theme'
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
