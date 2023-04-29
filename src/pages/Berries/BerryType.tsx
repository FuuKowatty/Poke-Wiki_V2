import { useFetch } from 'hooks/useFetch'
import { useAppContext } from 'hooks/useAppContext'
import { usePagination } from 'hooks/usePagination'
import { PokemonBuildPage } from 'pages/PokemonBuildPage'
import { BerryCard } from 'components/BerryCard/BerryCard'
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
  } = usePagination({ data: data.berries , pageSize: contentPerPage })

  const isPaginationVisible = data.berries.length > 20
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
    <PokemonBuildPage
    state={state}
    pagination={pagination}
    isPaginationVisible={isPaginationVisible}
    isBerryPage={true}
  >
      {data &&
        currentData.map((dataElement) => {
          return <BerryCard key={dataElement.name} url={dataElement.url} />
        })}
    </PokemonBuildPage>
  )
}
