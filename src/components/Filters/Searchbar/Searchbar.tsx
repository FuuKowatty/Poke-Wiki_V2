import { SearchIcon, SearchbarInput, SearchbarForm } from './Searchbar.styled'
import { Tooltip } from 'components/Tooltip/Tooltip'
import { RiSearchLine } from 'react-icons/ri'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export function Searchbar({ queryRoute }: { queryRoute: string }) {
  const [query, setQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const timeoutRef = useRef<number | null>(null)

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setErrorMessage('')
  }

  const onQuerySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (query.trim() === '') {
      setErrorMessage('Please fill the input')
      timeoutRef.current ? clearTimeout(timeoutRef.current) : ''
      timeoutRef.current = window.setTimeout(() => {
        setErrorMessage('')
      }, 2000)
    } else {
      navigate(`${queryRoute}${query}`)
    }
  }

  return (
    <SearchbarForm onSubmit={onQuerySubmit}>
      {errorMessage && <Tooltip position='bottom'>{errorMessage}</Tooltip>}
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
