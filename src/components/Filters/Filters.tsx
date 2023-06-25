import { FiltersContainer } from './Filters.styled'
import { SelectInput } from './SelectInput/SelectInput'
import { Searchbar } from './Searchbar/Searchbar'
import { getTypeFilter } from 'services/getTypeFilter'

interface FiltersProps {
  isBerryPage: boolean
  onPageChange: (pageNumber: number) => void
}



export function Filters({ isBerryPage, onPageChange }: FiltersProps) {


  const queryRoute = isBerryPage ? '/berries/search?query=' : '/pokemons/search?query='
  const typeRoute = isBerryPage ? '/berries' : '/pokemons'
  const apiEndpoint = isBerryPage
    ? 'https://pokeapi.co/api/v2/berry-firmness/'
    : 'https://pokeapi.co/api/v2/type/'

  const types = getTypeFilter(apiEndpoint)

  return (
    <FiltersContainer>
      <Searchbar queryRoute={queryRoute} />
      {types.length > 0 && (
        <SelectInput
          options={[{ name: 'all', url: '' }, ...types]}
          typeRoute={typeRoute}
          onPageChange={onPageChange}
        />
      )}
    </FiltersContainer>
  )
}
