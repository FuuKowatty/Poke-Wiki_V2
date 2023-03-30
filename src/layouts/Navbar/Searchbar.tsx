import { StyledInput, StyledSearch } from 'styles/Navbar/StyledNavbar';
import { SearchIcon } from 'styles/StyledContainer';
import { Theme } from 'styles/Theme';
import {AiOutlineSearch} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'

export function Searchbar() {
  return (
    <StyledSearch>
    <SearchIcon type='submit' >
      <AiOutlineSearch color={Theme.colors.secondary} />
    </SearchIcon>
    <StyledInput placeholder='Search...' type='search'/>
    <SearchIcon type='reset'>
    <GrFormClose color={Theme.colors.secondary} />
    </SearchIcon>
  </StyledSearch>
  )
}
