import { Desktop } from './Desktop';
import { Mobile } from './Mobile';
import { StyledNavbar } from 'styles/StyledNavbar';
import { useViewport } from 'hooks/useViewport';

function Navbar() {

  const isMobile = useViewport()

  return (
    
    <StyledNavbar>
      {isMobile ? <Mobile /> : <Desktop />}
    </StyledNavbar>
  )
}

export {Navbar}