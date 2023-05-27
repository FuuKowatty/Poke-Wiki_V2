import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: ${(props) => props.theme.spacing[5]};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 10vh;
  max-width: 1440px;

  background: ${(props) => props.theme.colors.bannerColor};
  border-top-left-radius: ${(props) => props.theme.round['lg']};
  border-top-right-radius: ${(props) => props.theme.round['lg']};
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