import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { useFetch } from 'hooks/useFetch'
import { PokemonBuildPage } from 'pages/BuildGridPage'
import { usePagination } from 'hooks/usePagination'
import { PageContent } from 'pages/PageContent'
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
  const query = searchParams.get('query') as string

  const fetchUrl = 'https://pokeapi.co/api/v2/pokemon-species/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonList>(fetchUrl)

  const filteredData = data.results.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(query?.toLowerCase() as string),
  )

  const { currentData, ...pagination } = usePagination(filteredData)
  const state = { currentData, error, isLoading }

  return (
    <PokemonBuildPage pagination={pagination} query={query}>
      <PageContent state={state}>
        {data &&
          currentData.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />)}
      </PageContent>
    </PokemonBuildPage>
  )
}
