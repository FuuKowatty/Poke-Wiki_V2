import { theme } from './theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  max-width: 100%;
`
export const GridContainer = styled.div`
  padding: 0 ${theme.spacing[3]};
  display: grid;
  grid-template-columns: minmax(250px, 350px);
  width: 100%;
  justify-content: center;
  gap: ${theme.spacing[3]};
  position: relative;

  @media ${device['tablet']} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${theme.spacing[4]};
  }

  @media ${device['laptop']} {
    grid-template-columns: repeat(3, minmax(300px, 380px));
  }

  @media ${device['desktop']} {
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1440px;
  }
`

export const CenteredContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

export const IconButton = styled.button`
  color: ${theme.colors['primary']};
  cursor: pointer;
  border: none;
  background: none;
  font-size: ${theme.size['xl']};
`

export const InfoParagraph = styled.p`
  margin: 10px 0;
  font-size: ${theme.size['lg']};
`

export const Button = styled.button`
  border: none;
  background: ${theme.colors['standsOut']};
  padding: ${theme.spacing['2']} ${theme.spacing['4']};
  text-transform: uppercase;
  border-radius: ${theme.spacing[1]};
  cursor: pointer;
  color: ${theme.colors['darkBlue']};
  font-weight: bold;

  &:hover {
    background: ${theme.colors['primary']};
    color: ${theme.colors['darkBlue']};
  }
`
