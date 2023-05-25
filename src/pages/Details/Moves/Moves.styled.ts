import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const MovesContainer = styled.div`
  background: ${(props) => props.theme.colors['grayGradient']};
  padding: ${(props) => props.theme.spacing['3']};
  border-radius: 8px;
  color: ${(props) => props.theme.colors['darkerBlue']};

  @media ${device['desktop']} {
    grid-column: 5 / span 2;
    grid-row: 6 / span 3;
  }
`

export const DetailsHeader = styled.h2`
  font-size: ${(props) => props.theme.size['lg']};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacing['3']};
  color: ${(props) => props.theme.colors.standsOut};
`

export const MovesList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const MovesListItem = styled.li`
  font-size: ${(props) => props.theme.size['md']};
  margin-bottom: ${(props) => props.theme.spacing['1']};
`
