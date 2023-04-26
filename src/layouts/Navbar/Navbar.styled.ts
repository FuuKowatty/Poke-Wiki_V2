import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const NavbarContainer = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};

  @media ${device['tablet']} {
    padding: ${theme.spacing[4]};
    justify-content: space-between;z
  }

  @media ${device['desktop']} {
    padding: ${theme.spacing[4]} 0;
  }
`

export const LogoTypography = styled.div`
  font-weight: 900;
  font-family: 'Golos Text', sans-serif;
  font-size: ${theme.size['2xl']};
`

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`
