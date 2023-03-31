import { Theme } from 'styles/Theme'
import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const StyledDrawer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  background: ${Theme.colors.bodyBg};
  position: fixed;
  top: 0;
  left: 0;
`
