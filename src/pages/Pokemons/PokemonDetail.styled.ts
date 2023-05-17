import { PokemonCardImage } from 'components/Card/Card.styled'
import { theme } from 'styles/theme'
import styled from 'styled-components'

export const PokemonDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`
export const PokemonDetailImage = styled(PokemonCardImage)`
  height: 300px;
`

export const PokemonStatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing['2']};
  margin-bottom: 100px;
`

export const BarContainer = styled.div`
  display: flex;
  gap: ${theme.spacing['1']};
  font-size: ${theme.size['xl']};
`

export const BarStats = styled.div`
    position relative;
    display: flex;
    align-items: center;
    width: 250px;
    padding: ${theme.spacing['1']} 0;
    border: 1px solid ${theme.colors['primary']};
    color: ${theme.colors['primary']};
`

export const ProgressBar = styled.span<{ width: string; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ color }) => color};
  width: ${({ width }) => width};
  height: 100%;
  z-index: -1;
`
export const DetailsHeader = styled.h1``

export const DetailsHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DetailsTypeImage = styled.img`
  width: 35px;
  height: 35px;
`

export const TableContainer = styled.div`
  width: 100%;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`

export const TableHeaderCell = styled.th`
  padding: 8px;
`

export const TableCell = styled.td`
  padding: 8px;
`
