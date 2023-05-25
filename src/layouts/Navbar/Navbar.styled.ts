import { device } from 'utils/breakpoints'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing[2]} ${(props) => props.theme.spacing[4]};
  border-bottom: 1px solid ${(props) => props.theme.colors.darkBlue};

  @media ${device['tablet']} {
    padding: ${(props) => props.theme.spacing[4]};
  }

  @media ${device['laptop']} {
    justify-content: space-between;
  }

  @media ${device['desktop']} {
    padding: ${(props) => props.theme.spacing[4]};
  }
`

export const LogoTypography = styled.div`
  font-weight: 900;
  font-family: 'Golos Text', sans-serif;
  font-size: ${(props) => props.theme.size['2xl']};
`

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;
`

export const MenuContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.darkBlue};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${(props) => props.theme.spacing[5]};
  background-color: ${(props) => props.theme.colors.bodyBg};
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

export const MenuIconContainer = styled.span<{ isActive: boolean }>`
  display: flex;
  font-family: 'Golos Text', sans-serif;
  ${(props) => props.theme.size['xl']};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.standsOut : props.theme.colors.bodyBg};
  color: ${(props) => (props.isActive ? props.theme.colors.primary : props.theme.colors.primary)};

  @media ${device['laptop']} {
    font-size: ${(props) => props.theme.size['lg']};
    background-color: ${(props) => props.theme.colors.bodyBg};
    color: ${(props) => props.theme.colors.primary};
    border-bottom: 3px solid
      ${(props) => (props.isActive ? props.theme.colors.standsOut : props.theme.colors.bodyBg)};

    &:hover {
      background: ${(props) => props.theme.colors.darkerBlue};
    }
  }
`

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  pointer-events: ${(props) => (props.isActive ? 'none' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
