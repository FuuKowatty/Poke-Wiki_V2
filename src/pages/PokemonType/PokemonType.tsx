import { PokemonCard } from 'components/PokemonCard/PokemonCard'
import { useFetch } from 'hooks/useFetch'
import { useAppContext } from 'hooks/useAppContext'
import { usePagination } from 'hooks/usePagination'
import { PokemonBuildPage } from 'pages/PokemonBuildPage'
import { useNavigate, useParams } from 'react-router-dom'


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
  const navigate = useNavigate()

  if (typeName === 'all') {
    navigate('/pokemons')
  }

  const fetchUrl = `https://pokeapi.co/api/v2/type/${typeName}`
  const { data = { pokemon: [] }, error, isLoading } = useFetch<TypeList>(fetchUrl)

  const { browserWidth } = useAppContext()
  const contentPerPage = browserWidth < 1440 && browserWidth >= 1024 ? 18 : 20
  const { paginationRange, currentPage, currentData, onPageChange, onNext, onPrevious, totalPageCount } =
    usePagination({ data: data.pokemon, pageSize: contentPerPage })

    const state = { data, error, isLoading }
    const pagination = { currentData, currentPage, paginationRange, onPageChange, onNext, onPrevious, totalPageCount}

  return (
      <PokemonBuildPage state={state} pagination={pagination}>
          {data &&
            currentData.map((dataElement) => {
              return <PokemonCard key={dataElement.pokemon.name} name={dataElement.pokemon.name} />
            })}
      </PokemonBuildPage>
  )
}