import { MobileMenuContainer, MobileMenuIconContainer, StyledLink } from './Navbar.styled'
import { AiFillHome } from 'react-icons/ai'
import { MdCatchingPokemon, MdFavorite } from 'react-icons/md'
import { GiStrawberry } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'

export function MobileMenu() {
  const pathname = useLocation().pathname
  const isPokemonActive = pathname.startsWith('/pokemons')
  const isBerryActive = pathname.startsWith('/berries')

  return (
    <MobileMenuContainer>
      <StyledLink to="/">
        <MobileMenuIconContainer isActive={pathname === '/'}>
          <AiFillHome />
        </MobileMenuIconContainer>
      </StyledLink>
      <StyledLink
        to="/pokemons/all"
      >
        <MobileMenuIconContainer isActive={isPokemonActive}>
          <MdCatchingPokemon />
        </MobileMenuIconContainer>
      </StyledLink>
      <StyledLink to="/berries/all">
        <MobileMenuIconContainer isActive={isBerryActive}>
          <GiStrawberry />
        </MobileMenuIconContainer>
      </StyledLink>
      <StyledLink to="/favorites">
        <MobileMenuIconContainer isActive={pathname === '/favorites'}>
          <MdFavorite />
        </MobileMenuIconContainer>
      </StyledLink>
    </MobileMenuContainer>
  )
}


