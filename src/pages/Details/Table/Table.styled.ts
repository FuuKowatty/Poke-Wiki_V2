import { theme } from 'styles/theme'
import styled from 'styled-components'

export const DetailsHeader = styled.h3`
  color: ${theme.colors.standsOut};
  margin: ${theme.spacing['2']} 0;
  font-size: ${theme.size['2xl']};
  font-weight: bold;
  text-transform: uppercase;
`

export const DetailsTypeImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${theme.colors['primary']};
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  height: 50px;
  border-bottom: 1px solid ${theme.colors['primary']};

  &:last-child {
    border-bottom: none;
  }
`

const BaseTableCell = styled.td`
  text-align: center;
  padding: ${theme.spacing['1']} ${theme.spacing['2']};
`

export const TableHeaderCell = styled(BaseTableCell).attrs({ as: 'th' })``
export const TableCell = styled(BaseTableCell)``
