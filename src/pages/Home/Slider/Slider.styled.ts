import { device } from 'utils/breakpoints'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.bannerColor};
  padding: ${(props) => props.theme.spacing[4]} 0;
  margin-top: ${(props) => props.theme.spacing[3]};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: default;

  @media ${device['laptop']} {
    padding: ${(props) => props.theme.spacing[5]} 0;
  }
`

export const SliderItem = styled(animated.div)`
  position: absolute;
  font-size: ${(props) => props.theme.size['lg']};
  font-family: 'Golos text';

  @media ${device['tablet']} {
    transition-duration: 100ms;
    font-size: ${(props) => props.theme.size['xl']};
  }

  @media ${device['desktop']} {
    font-size: ${(props) => props.theme.size['2xl']};
  }
`
