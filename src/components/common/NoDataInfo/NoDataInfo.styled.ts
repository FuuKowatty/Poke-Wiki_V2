import { theme } from 'styles/theme'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

export const InfoIcon = styled(BsFillInfoCircleFill)`
  font-size: ${theme.size['2xl']};
  color: ${theme.colors['standsOut']};
`
