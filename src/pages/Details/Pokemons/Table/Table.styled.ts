import { theme } from 'styles/theme'
import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  height: 50px;
`

export const TableHeaderCell = styled.th`
  border: 1px solid ${theme.colors['primary']};
  text-align: center;
`

export const TableCell = styled.td`
  border: 1px solid ${theme.colors['primary']};
  text-align: center;
`
export const DetailsTypeImage = styled.img`
  width: 35px;
  height: 35px;
`