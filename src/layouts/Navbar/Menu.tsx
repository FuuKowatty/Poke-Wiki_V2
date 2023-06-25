import { MenuContainer, MenuIconContainer, StyledLink } from './Navbar.styled'
import { MenuItems } from 'data/data'
import { useViewport } from 'hooks/useViewport'
import { useLocation } from 'react-router-dom'



export function Menu() {
  const pathname = useLocation().pathname
  const { isTablet, isMobile } = useViewport()

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
    <MenuContainer>
      {MenuItems.map((item) => (
        <StyledLink to={item.path} key={item.title}>
          <MenuIconContainer isActive={checkIsActive(item.path)} aria-label={`${item.title} navigation`}>
            {isTablet || isMobile ? item.icon : item.title.toUpperCase()}
          </MenuIconContainer>
        </StyledLink>
      ))}
    </MenuContainer>
  )
}
