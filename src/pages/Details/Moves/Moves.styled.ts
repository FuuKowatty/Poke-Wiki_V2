import { theme } from 'styles/theme'
import styled from 'styled-components'

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
