import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { useFetch } from 'hooks/useFetch'
import { useAppContext } from 'hooks/useAppContext'
import { usePagination } from 'hooks/usePagination'
import { PokemonBuildPage } from 'pages/BuildGridPage'
import { useLocation } from 'react-router-dom'

interface Pokemon {
  name: string
  url: string
}

interface PokemonList {
  count: number
  next: null | string
  previous: null | string
  results: Pokemon[]
}

export function PokemonSearch() {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const query = searchParams.get('query')

  const fetchUrl = 'https://pokeapi.co/api/v2/pokemon-species/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonList>(fetchUrl)

  const { browserWidth } = useAppContext()
  const contentPerPage = browserWidth < 1440 && browserWidth >= 1024 ? 18 : 20
  const filteredData = data.results.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(query?.toLowerCase() as string),
  )

  const {
    paginationRange,
    currentPage,
    currentData,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
  } = usePagination({ data: filteredData || [], pageSize: contentPerPage })

  const isPaginationVisible = filteredData.length > 20

  const state = { data, error, isLoading }
  const pagination = {
    currentData,
    currentPage,
    paginationRange,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
  }

  return (
    <PokemonBuildPage
      state={state}
      pagination={pagination}
      isPaginationVisible={isPaginationVisible}
    >
      {data && currentData.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />)}
    </PokemonBuildPage>
  )
}
