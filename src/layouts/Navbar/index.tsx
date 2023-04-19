import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import { StyledNavbar } from 'styles/Navbar/StyledNavbar'
import { useAppContext } from 'hooks/useAppContext'

export function Navbar() {
  const { isMobile } = useAppContext()

  return <StyledNavbar>{isMobile ? <Mobile /> : <Desktop />}</StyledNavbar>
}
