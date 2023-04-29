import { FiltersContainer } from './Filters.styled'
import { SelectInput } from './SelectInput/SelectInput'
import { Searchbar } from 'components/Filters/Searchbar/Searchbar'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface FiltersProps {
  queryRoute: string
  typeRoute: string
  apiEndpoint: string
}

interface PokemonType {
  name: string
  url: string
}

interface typesProps {
  results: PokemonType[]
}

export function Filters({ queryRoute, typeRoute, apiEndpoint }: FiltersProps) {
  const [query, setQuery] = useState('')
  const [types, setTypes] = useState<typesProps | null>(null)
  const [selectedType, setSelectedType] = useState('')
  const navigate = useNavigate()

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const onQuerySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`${queryRoute}${query}`)
  }

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    if (value === 'all') {
      navigate(`${typeRoute}/all`)
    } else {
      navigate(`${typeRoute}/type/${value}`)
    }
    setSelectedType(value)
  }

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const typesResponse = await fetch(apiEndpoint)
        const typesJson = await typesResponse.json()
        setTypes(typesJson)
      } catch {
        console.log('Error fetching types')
      }
    }
    fetchTypes()
  }, [apiEndpoint])

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
