import { TableHeaderCell } from 'pages/Pokemons/PokemonDetail.styled'
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

export function MyTable() {
  const data = [
    { id: 1, header: 'Header 1', data: 'Data 1' },
    { id: 2, header: 'Header 2', data: 'Data 2' },
    { id: 3, header: 'Header 3', data: 'Data 3' },
  ]

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <TableRow>
                <TableHeaderCell>{item.header}</TableHeaderCell>
                <TableCell>{item.data}</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell></TableHeaderCell>
                <TableCell></TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
