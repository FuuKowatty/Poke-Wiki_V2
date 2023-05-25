import { IconButton } from 'styles/globalComponents'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'

export const SearchbarForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  gap: ${(props) => props.theme.spacing[1]};
  height: 40px;

  @media ${device['tablet']} {
    width: 280px;
  }

  @media ${device['laptop']} {
    width: 350px;
    height: 45px;
  }
`

export const SearchbarInput = styled.input`
  padding: ${(props) => props.theme.spacing[2]};
  color: ${(props) => props.theme.colors['secondary']};
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  background: ${(props) => props.theme.colors['primary']};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const SearchIcon = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.size['lg']};
  padding: 0 ${(props) => props.theme.spacing[2]};
  background: ${(props) => props.theme.colors['standsOut']};
  height: 100%;
  color: ${(props) => props.theme.colors['darkerBlue']};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
