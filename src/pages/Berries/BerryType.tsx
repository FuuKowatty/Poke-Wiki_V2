import { useFetch } from 'hooks/useFetch'
import { PokemonBuildPage } from 'pages/BuildGridPage'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { usePagination } from 'hooks/usePagination'
import { PageContent } from 'pages/PageContent'
import { useParams } from 'react-router-dom'

interface berry {
  name: string
  url: string
}

interface TypeList {
  berries: berry[]
}

export function BerryType() {
  const { typeName } = useParams()

  const fetchUrl = `https://pokeapi.co/api/v2/berry-firmness/${typeName}`
  const { data = { berries: [] }, error, isLoading } = useFetch<TypeList>(fetchUrl)

  const { currentData, ...pagination } = usePagination(data.berries)
  const state = { currentData, error, isLoading }

  return (
    <PokemonBuildPage pagination={pagination} isBerryPage={true} type={typeName}>
      <PageContent state={state}>
        {data &&
          currentData.map((dataElement) => {
            return <BerryCard key={dataElement.name} url={dataElement.url} />
          })}
      </PageContent>
    </PokemonBuildPage>
  )
}
