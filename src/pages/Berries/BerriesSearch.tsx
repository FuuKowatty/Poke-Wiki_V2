import { useFetch } from 'hooks/useFetch'
import { PokemonBuildPage } from 'pages/BuildGridPage'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { usePagination } from 'hooks/usePagination'
import { PageContent } from 'pages/PageContent'
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
  const query = searchParams.get('query') as string

  const fetchUrl = 'https://pokeapi.co/api/v2/berry/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonList>(fetchUrl)

  const filteredData = data.results.filter((berry) =>
    berry.name.toLowerCase().startsWith(query?.toLowerCase() as string),
  )

  const { currentData, ...pagination } = usePagination(filteredData)
  const state = { currentData, error, isLoading }

  return (
    <PokemonBuildPage pagination={pagination} isBerryPage={true} query={query}>
      <PageContent state={state}>
        {data && currentData.map((berry) => <BerryCard key={berry.name} url={berry.url} />)}
      </PageContent>
    </PokemonBuildPage>
  )
}
