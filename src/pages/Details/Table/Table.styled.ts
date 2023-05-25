import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bannerColor};
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.spacing[3]};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device['laptop']} {
  }

  @media ${device['desktop']} {
    grid-column: 2 / span 3;
    grid-row: 6 / span 3;
  }
`

export const DetailsHeader = styled.h3`
  color: ${(props) => props.theme.colors.standsOut};
  margin: ${(props) => props.theme.spacing[2]} 0;
  font-size: ${(props) => props.theme.size['2xl']};
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
  color: ${(props) => props.theme.colors.primary};
`

export const TableRow = styled.tr<{ isSmaller?: boolean }>`
  height: ${(props) => (props.isSmaller ? '30px' : '50px')};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  &:last-child {
    border-bottom: none;
  }
`

const BaseTableCell = styled.td`
  text-align: center;
  padding: ${(props) => props.theme.spacing[1]} ${(props) => props.theme.spacing[2]};
`

export const TableHeaderCell = styled(BaseTableCell).attrs({ as: 'th' })``
export const TableCell = styled(BaseTableCell)``
