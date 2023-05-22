import { DetailsHeader, TableContainer } from '../PokemonDetail.styled'
import {
  DetailsTypeImage,
  Table,
  TableHeaderCell,
  TableRow,
  TableCell,
} from 'pages/Details/Table/Table.styled'
import { PokemonSpecs } from 'components/Card/PokemonCard/PokemonCard'
import { iconTypesProps } from 'pages/Details/PokemonDetail'
import { calculateHeight, calculateWeight } from 'utils/calculateMeasures'
import React from 'react'

interface PokemonTableProps {
  data: PokemonSpecs
  icons: iconTypesProps[]
  habitat: string
}

export function PokemonTable({ data, icons, habitat }: PokemonTableProps) {
  const { weight, height, types } = data
  const typeNames = types.map((type) => type.type.name)
  const filteredIconComponents = icons
    .filter((iconType) => typeNames.includes(iconType.name))
    .map((icon) => <DetailsTypeImage src={icon.url} alt={icon.name} key={icon.name} />)

  const dataTable = [
    { id: 1, header: 'Types', data: filteredIconComponents },
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
