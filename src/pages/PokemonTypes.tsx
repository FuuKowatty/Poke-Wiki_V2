import { PokemonGrid } from 'components/PokemonGrid'
import { useState } from 'react'

export function PokemonTypes() {
  const [currentPage, setCurrentPage] = useState(1)
  const [limit] = useState(20)
  const changePage = (numb: number) => {
    setCurrentPage(numb)
  }
  const fetchPokemonUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${
    (currentPage - 1) * limit
  }`

  return (
    <>
      <PokemonGrid
        contentPerPage={limit}
        currentPage={currentPage}
        onPageChange={changePage}
        fetchPokemon={fetchPokemonUrl}
      />
    </>
  )
}

/* types img made by https://www.deviantart.com/falke2009/art//////Pokemon-Type-Symbols-Downloadable-403610684 */
// https://pokeapi.co/api/v2/pokemon/?limit=60&offset=50
// const { data, isLoading } = useFetch(fetchTypes)
// const fetchTypes = () => (s
//   fetch('http://localhost:3000/results').then((res) => res.json() a
