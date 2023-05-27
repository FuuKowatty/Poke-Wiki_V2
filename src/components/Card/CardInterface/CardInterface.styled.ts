import styled from 'styled-components'

export const Options = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${(props) => props.theme.spacing[1]};
`

export const OptionsItem = styled.div<{ isActive?: boolean }>`
  padding: 0.42em;
  color: ${(props) =>
    props.isActive ? props.theme.colors.darkBlue : props.theme.colors['primary']};
  font-size: ${(props) => props.theme.size['2xl']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.isActive ? props.theme.colors.standsOut : props.theme.colors.bodyBg};
  z-index: -1;
  border-radius: ${(props) => props.theme.round['lg']};
  margin-top: ${(props) => props.theme.spacing[1]};
`

export const CloseDetailsItem = styled(OptionsItem)`
  background: transparent;
`

export const Name = styled.div`
  position absolute;
  width: 80%;
  border-radius: ${(props) => props.theme.round['md']};
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  top: 80%;
  font-family: Golos text, sans-serif;
  font-size: ${(props) => props.theme.size['xl']};
  background: ${(props) => props.theme.colors.bodyBg};
  padding: ${(props) => props.theme.spacing[1]};
`

export const BerryDetailsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`

export const FlavorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.spacing[3]};
  height: 100%;
  gap: ${(props) => props.theme.spacing[1]};
`
