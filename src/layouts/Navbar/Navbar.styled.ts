import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  background: ${theme.colors['bodyBg']};
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-bottom: 1px solid ${theme.colors['darkBlue']};

  @media ${device['tablet']} {
    padding: ${theme.spacing[4]};
  }

  @media ${device['laptop']} { 
    justify-content: space-between;
    position: sticky;
    z-index: 99;
    top: 0;
    left: 0;
  }

  @media ${device['desktop']} {
    padding: ${theme.spacing[4]};
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
  border-top: 1px solid ${theme.colors['darkBlue']};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${theme.spacing['5']};
  background-color: ${theme.colors['bodyBg']};
  justify-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  @media ${device['laptop']} {
    position: static;
    max-width: 700px;
    border-top: none;
  }
`

export const MobileMenuIconContainer = styled.span<{ isActive: boolean }>`
  display: flex;
  font-size: ${theme.size['xl']};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? theme.colors['standsOut'] : theme.colors['bodyBg']};
  color: ${(props) =>
    props.isActive ? theme.colors['darkBlue'] : theme.colors['primary']};

    @media ${device['laptop']} {
      font-size: ${theme.size['lg']};
      border-right: 1px solid ${theme.colors['darkBlue']};

      &:first-child {
        border-left: 1px solid ${theme.colors['darkBlue']};
      }
    }
`



export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`