import { theme } from 'styles/theme'
import styled from 'styled-components'



export const Options = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${theme.spacing[1]};
  background: black;

`

export const OptionsItem = styled.div`
  padding: 0.42em;
  color: ${theme.colors['primary']};
  font-size: ${theme.size['xl']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;


  &:first-child {
    border-bottom: 1px solid ${theme.colors['bodyBg']};
  }
`

export const Name = styled.div`
  position absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
  font-family: Golos text, sans-serif;
  font-size: ${theme.size['xl']};
  background: black;
  padding: ${theme.spacing[1]};
`