import { useFetch } from 'hooks/useFetch'
import { useAppContext } from 'hooks/useAppContext'
import { usePagination } from 'hooks/usePagination'
import { PokemonBuildPage } from 'pages/BuildGridPage'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { useLocation } from 'react-router-dom'

interface Berry {
  name: string
  url: string
}

interface PokemonList {
  count: number
  next: null | string
  previous: null | string
  results: Berry[]
}

export function BerriesSearch() {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const query = searchParams.get('query')

  const fetchUrl = 'https://pokeapi.co/api/v2/berry/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonList>(fetchUrl)

  const { browserWidth } = useAppContext()
  const contentPerPage = browserWidth < 1440 && browserWidth >= 1024 ? 18 : 20
  const filteredData = data.results.filter((berry) =>
    berry.name.toLowerCase().startsWith(query?.toLowerCase() as string),
  )

  const isPaginationVisible = filteredData.length > 20

  const {
    paginationRange,
    currentPage,
    currentData,
    onPageChange,
    onNext,
    onPrevious,
    totalPageCount,
  } = usePagination({ data: filteredData || [], pageSize: contentPerPage })

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

  console.log(filteredData)

  return (
    <PokemonBuildPage
      state={state}
      pagination={pagination}
      isPaginationVisible={isPaginationVisible}
      isBerryPage={true}
    >
      {data && currentData.map((berry) => <BerryCard key={berry.name} url={berry.url} />)}
    </PokemonBuildPage>
  )
}
