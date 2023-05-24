import { PokemonBuildPage } from 'pages/BuildGridPage'
import { useFetch } from 'hooks/useFetch'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { usePagination } from 'hooks/usePagination'
import { PageContent } from 'pages/PageContent'

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

  const { currentData, ...pagination } = usePagination(data.results)
  const state = { currentData, error, isLoading }

  return (
    <PokemonBuildPage pagination={pagination} isBerryPage={true}>
      <PageContent state={state}>
        {data && currentData.map((berry) => <BerryCard key={berry.name} url={berry.url} />)}
      </PageContent>
    </PokemonBuildPage>
  )
}
