import { Searchbar } from './Searchbar'
import { StyledLogoImage } from 'styles/Navbar/StyledNavbar'

export function Mobile() {
  return (
    <>
      <StyledLogoImage src='https://svgshare.com/i/s5w.svg' alt='logo' />
      <Searchbar />
    </>
  )
}
