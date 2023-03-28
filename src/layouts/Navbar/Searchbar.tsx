import { StyledInput, StyledSearch } from 'styles/Navbar/StyledNavbar';
import { IconButton } from 'styles/StyledContainer';
import { Theme } from 'styles/Theme';
import {AiOutlineSearch} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'

export function Searchbar() {
  return (
    <StyledSearch>
    <IconButton type='submit'>
      <AiOutlineSearch color={Theme.colors.secondary} />
    </IconButton>
    <StyledInput placeholder='Search...' />
    <IconButton type='reset'>
    <GrFormClose color={Theme.colors.secondary} />
    </IconButton>
  </StyledSearch>
  )
}
