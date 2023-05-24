import { TableContainer } from '../PokemonDetail.styled'
import { Table, TableHeaderCell, TableRow, TableCell } from 'pages/Details/Table/Table.styled'
import { PokemonSpecs, PokemonType } from 'components/Card/PokemonCard/PokemonCard'
import { calculateHeight, calculateWeight } from 'utils/calculateMeasures'
import React from 'react'

interface PokemonTableProps {
  data: PokemonSpecs
  habitat: string
  types: PokemonType[]
}

export function PokemonTable({ data, habitat, types }: PokemonTableProps) {
  const { weight, height } = data
  const typeNames = types.map((type) => type.type.name).join(' / ')
  const dataTable = [
    { id: 1, header: 'Types', data: typeNames },
    { id: 2, header: 'Height', data: calculateHeight(height) },
    { id: 3, header: 'Weight', data: calculateWeight(weight) },
    { id: 4, header: 'Habitat', data: habitat },
  ]

  return (
    <TableContainer>
      <Table>
        <tbody>
          {dataTable.map((item) => (
            <React.Fragment key={item.id}>
              <TableRow>
                <TableHeaderCell>{item.header}</TableHeaderCell>
                <TableCell>{item.data}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}
