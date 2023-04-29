import { FiltersContainer } from './Filters.styled'
import { SelectInput } from './SelectInput/SelectInput'
import { Searchbar } from 'components/Filters/Searchbar/Searchbar'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export interface pokemonType {
  name: string
  url: string
}

interface PokemonType {
  results: Array<pokemonType>
}

export function FiltersBerry() {
  const [query, setQuery] = useState('')
  const [types, setTypes] = useState<null | PokemonType>(null)
  const [selectedType] = useState('')
  const url = 'https://pokeapi.co/api/v2/berry-firmness/'
  const navigate = useNavigate()

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const onQuerySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/berries/search?query=${query}`);
  }

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'all') {
      navigate('/berries/all')
    } else {
      navigate(`/berries/type/${value}`)
    }
  }

  useEffect(() => {
    const fetchBerryTypes = async () => {
      try {
        const barryTypes = await fetch(url)
        const berryTypesJson = await barryTypes.json()
        setTypes(berryTypesJson)
      } catch {
        console.log('blad pokemonSpec')
      }
    }

    fetchBerryTypes()
  }, [])

  return (
    <>
      <FiltersContainer>
        <Searchbar value={query} onChange={onQueryChange} onSubmit={onQuerySubmit} />
        {types && (
          <SelectInput
            handleChange={handleTypeChange}
            options={types?.results}
            selectedValue={selectedType}
          />
        )}
      </FiltersContainer>
    </>
  )
}
