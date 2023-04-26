import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import { NavbarContainer } from './Navbar.styled'
import { useAppContext } from 'hooks/useAppContext'

export function Navbar() {
  const { isMobile } = useAppContext()

  return <NavbarContainer>{isMobile ? <Mobile /> : <Desktop />}</NavbarContainer>
}
