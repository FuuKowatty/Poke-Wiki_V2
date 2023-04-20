import { Theme } from 'styles/Theme'
import { device } from 'styles/Breakpoints'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const StyledPromotion = styled.div`
  width: 100%;
  background: -webkit-linear-gradient(45deg, #003367, #123049); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #003367, #123049);

  padding: ${Theme.spacing[4]} 0;
  margin-top: ${Theme.spacing[3]};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: default;

  @media ${device.desktop} {
    padding: ${Theme.spacing[5]} 0;
  }
`

export const SliderItem = styled(animated.div)`
  position: absolute;

  font-size: ${Theme.fonts.headerFour};
  font-family: Golos text;

  @media ${device.tablet} {
    transition-duration: 100ms;
    font-size: ${Theme.fonts.headerThree};
  }

  @media ${device.desktop} {
    font-size: ${Theme.fonts.headerTwo};
  }
`
