import { Logo } from 'components/Logo';
import { IconButton } from 'styles/StyledContainer';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineSearch} from 'react-icons/ai'

export function Mobile() {

  return (
    <>
      <IconButton>
        <GiHamburgerMenu />
      </IconButton>
      <Logo />
      <IconButton>
        <AiOutlineSearch />
      </IconButton>
    </>
  )
}
