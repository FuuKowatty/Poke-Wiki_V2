import { SearchIcon, SearchbarInput, SearchbarForm } from './Searchbar.styled'
import { RiSearchLine } from 'react-icons/ri'

interface SearchbarProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function Searchbar({ value, onChange, onSubmit }: SearchbarProps) {
  return (
    <SearchbarForm onSubmit={onSubmit}>
      <SearchbarInput placeholder='Search...' type='search' value={value} onChange={onChange} />
      <SearchIcon type='submit'>
        <RiSearchLine />
      </SearchIcon>
    </SearchbarForm>
  )
}
