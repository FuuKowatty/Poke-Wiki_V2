import { Pagination } from 'components/Pagination'
import { PokemonCard } from 'components/PokemonCard'
import { LoadingState } from 'components/LoadingState'
import { useFetch } from 'hooks/useFetch'
import { StyledPokemonTypes } from 'styles/PokemonTypes'
import { usePageNavigation } from 'hooks/usePageNavigation'
import { useState, useEffect } from 'react'

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

export function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 65
  const contentPerPage = 20

  // Manage a url
  usePageNavigation({ totalPages })
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const page = searchParams.get('page')

    if (page) {
      const numberOfPage = parseInt(page)
      setCurrentPage(numberOfPage)
    } else {
      setCurrentPage(1)
    }
  }, [location.search])

  const fetchPokemonUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${contentPerPage}&offset=${
    (currentPage - 1) * contentPerPage
  }`

  const { data, error, isLoading } = useFetch<PokemonList>(fetchPokemonUrl)

  return (
    <>
      <StyledPokemonTypes>
        <LoadingState isLoading={isLoading} error={error}>
          {data &&
            data.results.map((pokemon) => <PokemonCard key={pokemon.name} url={pokemon.url} />)}
        </LoadingState>
      </StyledPokemonTypes>
      {data && !isLoading && (
        <Pagination contentPerPage={contentPerPage} count={data.count} currentPage={currentPage} />
      )}
    </>
  )
}
