import { PokemonBuildPage } from 'pages/BuildGridPage'
import { useFetch } from 'hooks/useFetch'
import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { usePagination } from 'hooks/usePagination'
import { PageContent } from 'pages/PageContent'


export function PokemonList() {
  const fetchUrl = 'https://pokeapi.co/api/v2/pokemon-species/?limit=20000'
  const { data = { results: [] }, error, isLoading } = useFetch<PokemonListProps>(fetchUrl)

  const { currentData, ...pagination } = usePagination(data.results)
  const state = { currentData, error, isLoading }

  return (
    <PokemonBuildPage pagination={pagination}>
      <PageContent state={state}>
        {data &&
          currentData.map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />)}
      </PageContent>
    </PokemonBuildPage>
  )
}
