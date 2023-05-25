import { MdErrorOutline } from 'react-icons/md'
import styled from 'styled-components'

export const ErrorIcon = styled(MdErrorOutline)`
  color: ${(props) => props.theme.colors.standsOut};
  font-size: ${(props) => props.theme.size['2xl']};
`
