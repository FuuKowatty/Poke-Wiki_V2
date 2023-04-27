import { PokemonBuildPage } from 'pages/PokemonBuildPage'
import { useFetch } from 'hooks/useFetch'
import { usePagination } from 'hooks/usePagination'

import { useAppContext } from 'hooks/useAppContext'
import { BerriesCard } from 'components/BerriesCard/BerriesCard'

interface Pokemon {
  name: string
  url: string
}

interface PokemonBerriesProps {
  count: number
  next: null | string
  previous: null | string
  results: Array<Pokemon>
}

export function PokemonBerries() {
  const fetchUrl = 'https://pokeapi.co/api/v2/berry/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonBerriesProps>(fetchUrl)

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
      {data && currentData.map((berry) => <BerriesCard key={berry.name} url={berry.url} />)}
    </PokemonBuildPage>
  )
}
