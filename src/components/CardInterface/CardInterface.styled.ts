import { theme } from 'styles/theme'
import styled from 'styled-components'



export const Options = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${theme.spacing['1']};

`

export const OptionsItem = styled.div`
  padding: 0.42em;
  color: ${theme.colors['primary']};
  font-size: ${theme.size['2xl']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors['bodyBg']};
  border-radius: ${theme.spacing[3]};
  margin-top: ${theme.spacing[1]};

`

export const Name = styled.div`
  position absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
  font-family: Golos text, sans-serif;
  font-size: ${theme.size['xl']};
  background: ${theme.colors['bodyBg']};
  padding: ${theme.spacing[1]};
`