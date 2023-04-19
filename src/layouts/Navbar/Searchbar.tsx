import { SearchIcon, StyledInput, StyledSearch } from 'styles/Navbar/StyledNavbar'
import { RiSearchLine } from 'react-icons/ri'

export function Searchbar() {
  return (
    <StyledSearch>
      <StyledInput placeholder='Search...' type='search' />
      <SearchIcon type='submit'>
        <RiSearchLine />
      </SearchIcon>
    </StyledSearch>
  )
}
