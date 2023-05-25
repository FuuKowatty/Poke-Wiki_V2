import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'


export const MovesContainer = styled.div`
  background: ${theme.colors['grayGradient']};
  padding: ${theme.spacing['3']};
  border-radius: 8px;
  color: ${theme.colors['darkerBlue']};

  @media ${device['desktop']} {
    grid-column: 5 / span 2;
    grid-row: 6 / span 3;
  }
`

export const DetailsHeader = styled.h2`
  font-size: ${theme.size['lg']};
  font-weight: bold;
  margin-bottom: ${theme.spacing['3']};
  color: ${theme.colors.standsOut};
`

export const MovesList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const MovesListItem = styled.li`
  font-size: ${theme.size.md};
  margin-bottom: ${theme.spacing['1']};
`
