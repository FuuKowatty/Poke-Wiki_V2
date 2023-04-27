import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  background: -webkit-linear-gradient(45deg, #003367, #123049); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #003367, #123049);

  padding: ${theme.spacing[4]} 0;
  margin-top: ${theme.spacing[3]};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: default;

  @media ${device['desktop']} {
    padding: ${theme.spacing[5]} 0;
  }
`

export const SliderItem = styled(animated.div)`
  position: absolute;
  font-size: ${theme.size['lg']};
  font-family: 'Golos text';

  @media ${device['tablet']} {
    transition-duration: 100ms;
    font-size: ${theme.size['xl']};
  }

  @media ${device['desktop']} {
    font-size: ${theme.size['2xl']};
  }
`