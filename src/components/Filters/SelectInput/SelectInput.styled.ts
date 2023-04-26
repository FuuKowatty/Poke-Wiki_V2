import { theme } from 'styles/theme'
import styled from 'styled-components'
import { RiArrowDownSFill } from 'react-icons/ri'

export const SelectInputContainer = styled.div`
  position: relative;
`

export const SelectInputStyled = styled.select`
  appearance: none;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-sizing: border-box;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  width: 280px;

  &:hover {
    cursor: pointer;
  }
`

export const ArrowIcon = styled(RiArrowDownSFill)`
  position: absolute;
  color: ${theme.colors['darkerBlue']};
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`
