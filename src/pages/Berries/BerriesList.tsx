import { PokemonBuildPage } from 'pages/BuildGridPage'
import { useFetch } from 'hooks/useFetch'
import { usePagination } from 'hooks/usePagination'
import { useAppContext } from 'hooks/useAppContext'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'

interface Pokemon {
  name: string
  url: string
}

interface BerriesListProps {
  count: number
  next: null | string
  previous: null | string
  results: Array<Pokemon>
}

export function BerriesList() {
  const fetchUrl = 'https://pokeapi.co/api/v2/berry/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<BerriesListProps>(fetchUrl)

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
    <PokemonBuildPage state={state} pagination={pagination} isBerryPage={true}>
      {data && currentData.map((berry) => <BerryCard key={berry.name} url={berry.url} />)}
    </PokemonBuildPage>
  )
}
