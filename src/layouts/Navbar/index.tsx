import { Menu } from './Menu'
import { NavbarContainer, LogoTypography } from './Navbar.styled'

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoTypography>POKEWIKI</LogoTypography>
      <Menu />
    </NavbarContainer>
  )
}
