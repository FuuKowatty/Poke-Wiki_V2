import { MobileMenuContainer, MobileMenuIconContainer, StyledLink } from './Navbar.styled'
import { useAppContext } from 'hooks/useAppContext'
import { AiFillHome } from 'react-icons/ai'
import { MdCatchingPokemon, MdFavorite } from 'react-icons/md'
import { GiStrawberry } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'

const MenuItems = [
  {
    title: 'home',
    path: '/',
    icon: <AiFillHome />,
  },
  {
    title: 'pokemons',
    path: '/pokemons/all',
    icon: <MdCatchingPokemon />,
  },
  {
    title: 'berries',
    path: '/berries/all',
    icon: <GiStrawberry />,
  },
  {
    title: 'favorites',
    path: '/favorites',
    icon: <MdFavorite />,
  },
]

export function MobileMenu() {
  const pathname = useLocation().pathname
  const { browserWidth } = useAppContext()
  const isDesktopMenu = browserWidth >= 1024

  const checkIsActive = (path: string) => {
    // It returns for example /pokemons/all => /pokemons
    const baseUrl = path.split('/').slice(0, -1).join('/')

    // !baseUrl return for home page
    if (!baseUrl) {
      return pathname === path
    } else {
      return pathname.startsWith(baseUrl)
    }
  }

  return (
    <MobileMenuContainer>
      {MenuItems.map((item) => (
        <StyledLink to={item.path} key={item.title}>
          <MobileMenuIconContainer isActive={checkIsActive(item.path)}>
            {isDesktopMenu ? item.title.toUpperCase() : item.icon}
          </MobileMenuIconContainer>
        </StyledLink>
      ))}
    </MobileMenuContainer>
  )
}
