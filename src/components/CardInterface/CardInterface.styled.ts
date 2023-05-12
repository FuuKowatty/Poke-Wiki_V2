import { theme } from 'styles/theme'
import styled from 'styled-components'

export const Options = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${theme.spacing['1']};
`

export const OptionsItem = styled.div<{isActive?: boolean}>`
  padding: 0.42em;
  color: ${props => props.isActive ? theme.colors['darkBlue'] : theme.colors['primary']};
  font-size: ${theme.size['2xl']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isActive ? theme.colors['standsOut'] : theme.colors['bodyBg']};

  border-radius: ${theme.spacing[3]};
  margin-top: ${theme.spacing[1]};

  &:hover {
    background: ${theme.colors['standsOut']};
    color: ${theme.colors['darkBlue']};
  }
`

export const Name = styled.div`
  position absolute;
  width: 80%;
  border-radius: ${theme.spacing[1]};
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
  font-family: Golos text, sans-serif;
  font-size: ${theme.size['xl']};
  background: ${theme.colors['bodyBg']};
  padding: ${theme.spacing[1]};
`
