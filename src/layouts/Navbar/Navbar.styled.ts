import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

export const MobileMenuContainer = styled.div`
  border-top: 1px solid ${theme.colors['darkerBlue']};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${theme.spacing['4']};
  background-color: ${theme.colors['bodyBg']};
  justify-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: ${theme.size['xl']};
  z-index: 999;
`

export const MobileMenuIconContainer = styled.span<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? theme.colors['standsOut'] : theme.colors['bodyBg']};
  color: ${(props) =>
    props.isActive ? theme.colors['darkBlue'] : theme.colors['primary']};
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`