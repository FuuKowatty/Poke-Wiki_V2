import { FooterContainer, FooterLink, FooterText } from './Footer.styled';

export function Footer() {
    return (
      <FooterContainer>
        <FooterText>
          © {new Date().getFullYear()} POKEWIKI. All rights reserved.
        </FooterText>
        <FooterText>
          Created with{' '}
          <span role="img" aria-label="Heart">
            ❤️
          </span>{' '}
          by{' '}
          <FooterLink href="https://github.com/FuuKowatty"  target='_blank'>FuuKowatty</FooterLink>
        </FooterText>
      </FooterContainer>
    );
  };