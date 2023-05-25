import { BsFillInfoCircleFill } from 'react-icons/bs'
import styled from 'styled-components'

export const InfoIcon = styled(BsFillInfoCircleFill)`
  font-size: ${(props) => props.theme.size['2xl']};
  color: ${(props) => props.theme.colors.standsOut};
`
