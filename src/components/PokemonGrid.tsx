import { PokeCard } from './PokeCard'
import { Pagination } from './Pagination'
import { useFetch } from 'hooks/useFetch'
import { StyledPokemonTypes } from 'styles/PokemonTypes'

interface Pokemon {
  name: string
  url: string
}

interface PokemonList {
  count: number
  next: null | string
  previous: null | string
  results: Array<Pokemon>
}

interface PokemonGrid {
  contentPerPage: number
  currentPage: number
  onPageChange: (numb: number) => void
  fetchPokemon: string
}

export function PokemonGrid({
  contentPerPage,
  currentPage,
  onPageChange,
  fetchPokemon,
}: PokemonGrid) {
  const { data, isLoading } = useFetch<PokemonList>(fetchPokemon)

  if (isLoading || !data) {
    return <p>Loading...</p>
  }

  return (
    <>
      <StyledPokemonTypes>
        {data.results.map((pokemon) => (
          <PokeCard key={pokemon.name} url={pokemon.url} />
        ))}
      </StyledPokemonTypes>
      <Pagination
        contentPerPage={contentPerPage}
        count={data.count}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  )
}
