import { Searchbar } from './Searchbar'
import { Logo } from 'components/Logo'
import { IconButton } from 'styles/StyledContainer'
import { useAppContext } from 'hooks/useAppContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineSearch } from 'react-icons/ai'
import {BiArrowBack} from 'react-icons/bi'


export function Mobile() {
  const { toggleMobileSearchbar, isMobileSearchbarToggled } = useAppContext()

  return (
    <>
      {isMobileSearchbarToggled ? (
        <>
        <IconButton onClick={() => toggleMobileSearchbar()}>
          <BiArrowBack />
        </IconButton>
        <Searchbar />
        </>
      ) : (
        <>
          <IconButton>
            <GiHamburgerMenu />
          </IconButton>
          <Logo />
          <IconButton onClick={() => toggleMobileSearchbar()}>
            <AiOutlineSearch />
          </IconButton>
        </>
      )}
    </>
  )
}
