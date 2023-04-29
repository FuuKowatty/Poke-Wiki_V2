import { PokemonBuildPage } from 'pages/BuildGridPage'
import { useFetch } from 'hooks/useFetch'
import { usePagination } from 'hooks/usePagination'
import { PokemonCard } from 'components/PokemonCard/PokemonCard'
import { useAppContext } from 'hooks/useAppContext'

interface Pokemon {
  name: string
  url: string
}

interface PokemonListProps {
  count: number
  next: null | string
  previous: null | string
  results: Array<Pokemon>
}

export function PokemonList() {
  const fetchUrl = 'https://pokeapi.co/api/v2/pokemon-species/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonListProps>(fetchUrl)

  const { browserWidth } = useAppContext()
  const contentPerPage = browserWidth < 1440 && browserWidth >= 1024 ? 18 : 20
  const {
    paginationRange,
    currentPage,
    currentData,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
  } = usePagination({ data: data.results || [], pageSize: contentPerPage })

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
    <PokemonBuildPage state={state} pagination={pagination}>
      {data && currentData.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />)}
    </PokemonBuildPage>
  )
}
