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

export function FiltersPokemon() {
  const [query, setQuery] = useState('')
  const [types, setTypes] = useState<null | PokemonType>(null)
  const [selectedType] = useState('')
  const url = 'https://pokeapi.co/api/v2/type/'
  const navigate = useNavigate()

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const onQuerySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/pokemons/search?query=${query}`)
  }

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'all') {
      navigate('/pokemons/all')
    } else {
      navigate(`/pokemons/type/${value}`)
    }
  }

  useEffect(() => {
    const fetchPokemonSpec = async () => {
      try {
        const pokemonTypes = await fetch(url)
        const pokemonTypesJson = await pokemonTypes.json()
        setTypes(pokemonTypesJson)
      } catch {
        console.log('blad pokemonSpec')
      }
    }

    fetchPokemonSpec()
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
