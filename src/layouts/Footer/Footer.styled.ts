import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 15vh;
  max-width: 1440px;
  margin: auto;
  background: ${(props) => props.theme.colors.bannerColor};
  border-top-left-radius: ${(props) => props.theme.round['md']};
  border-top-right-radius: ${(props) => props.theme.round['md']};
  text-align: center;
  display: grid;
  align-content: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-size: ${(props) => props.theme.size['md']};
  color: ${(props) => props.theme.colors.primary};
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.standsOut};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;