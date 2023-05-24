import { SearchIcon, SearchbarInput, SearchbarForm } from './Searchbar.styled'
import { RiSearchLine } from 'react-icons/ri'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Searchbar({ queryRoute }: { queryRoute: string }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const onQuerySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`${queryRoute}${query}`)
  }

  return (
    <SearchbarForm onSubmit={onQuerySubmit}>
      <SearchbarInput
        placeholder='Search...'
        type='search'
        value={query}
        onChange={onQueryChange}
      />
      <SearchIcon type='submit'>
        <RiSearchLine />
      </SearchIcon>
    </SearchbarForm>
  )
}
