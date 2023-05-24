import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { useFetch } from 'hooks/useFetch'
import { PokemonBuildPage } from 'pages/BuildGridPage'
import { usePagination } from 'hooks/usePagination'
import { PageContent } from 'pages/PageContent'
import { useParams } from 'react-router-dom'

interface Pokemon {
  name: string
  url: string
}

interface TypeElement {
  pokemon: Pokemon
}

interface TypeList {
  pokemon: Array<TypeElement>
}

export function PokemonType() {
  const { typeName } = useParams()
  const fetchUrl = `https://pokeapi.co/api/v2/type/${typeName}`
  const { data = { pokemon: [] }, error, isLoading } = useFetch<TypeList>(fetchUrl)

  const { currentData, ...pagination } = usePagination(data.pokemon)
  const state = { currentData, error, isLoading }

  return (
    <PokemonBuildPage pagination={pagination}>
      <PageContent state={state}>
        {data &&
          currentData.map((dataElement) => {
            return <PokemonCard key={dataElement.pokemon.name} name={dataElement.pokemon.name} />
          })}
      </PageContent>
    </PokemonBuildPage>
  )
}
