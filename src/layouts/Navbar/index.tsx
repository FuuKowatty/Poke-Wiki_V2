import { MobileMenu } from './MobileMenu'
import { NavbarContainer, LogoTypography } from './Navbar.styled'

export function Navbar() {

  return (
    <NavbarContainer>
     <LogoTypography>POKEWIKI</LogoTypography>
     <MobileMenu />
    </NavbarContainer>
    )
}
