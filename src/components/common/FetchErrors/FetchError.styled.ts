import { theme } from 'styles/theme'
import { MdErrorOutline } from 'react-icons/md'
import styled from 'styled-components'

export const ErrorIcon = styled(MdErrorOutline)`
  color: ${theme.colors['standsOut']};
  font-size: ${theme.size['2xl']};
`
