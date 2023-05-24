import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import styled from 'styled-components'
import { RiArrowDownSFill } from 'react-icons/ri'

export const SelectInputContainer = styled.div`
  position: relative;
  width: 100%;

  @media ${device['tablet']} {
    width: 280px;
  };

  @media ${device['laptop']} {
    width: 350px;
  };
`

export const SelectInputStyled = styled.select`
  appearance: none;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 8px;
  box-sizing: border-box;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  padding: 0 ${theme.spacing[2]};
  width: 100%;
  height: 40px;

  &:hover {
    cursor: pointer;
  }

  


  @media ${device['desktop']} {
    height: 45px;
  }
`

export const ArrowIcon = styled(RiArrowDownSFill)`
  position: absolute;
  color: ${theme.colors['darkerBlue']};
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`
