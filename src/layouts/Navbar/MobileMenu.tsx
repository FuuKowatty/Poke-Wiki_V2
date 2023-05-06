import { MobileMenuContainer, MobileMenuIconContainer, StyledLink } from './Navbar.styled'
import { useAppContext } from 'hooks/useAppContext'
import { AiFillHome } from 'react-icons/ai'
import { MdCatchingPokemon, MdFavorite } from 'react-icons/md'
import { GiStrawberry } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'

export function MobileMenu() {
  const pathname = useLocation().pathname
  const isPokemonActive = pathname.startsWith('/pokemons')
  const isBerryActive = pathname.startsWith('/berries')
  const { browserWidth } = useAppContext()
  const isMobileMenu = browserWidth >= 1024

  return (
    <MobileMenuContainer>
      <StyledLink to='/'>
        <MobileMenuIconContainer isActive={pathname === '/'}>
          <AiFillHome /> {isMobileMenu && 'HOME'}
        </MobileMenuIconContainer>
      </StyledLink>
      <StyledLink to='/pokemons/all'>
        <MobileMenuIconContainer isActive={isPokemonActive}>
          <MdCatchingPokemon /> {isMobileMenu && 'POKEMONS'}
        </MobileMenuIconContainer>
      </StyledLink>
      <StyledLink to='/berries/all'>
        <MobileMenuIconContainer isActive={isBerryActive}>
          <GiStrawberry /> {isMobileMenu && 'BERRIES'}
        </MobileMenuIconContainer>
      </StyledLink>
      <StyledLink to='/favorites'>
        <MobileMenuIconContainer isActive={pathname === '/favorites'}>
          <MdFavorite /> {isMobileMenu && 'FAVORITES'}
        </MobileMenuIconContainer>
      </StyledLink>
    </MobileMenuContainer>
  )
}
