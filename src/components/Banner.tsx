import { BannerButton, BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from 'styles/Banner';

export function Banner() {
    return (
        <BannerContainer>
          <BannerImage alt="banner-image" />
          <BannerContent>
            <BannerTitle>POKEMONS</BannerTitle>
            <BannerDescription>
              POKEWIKI is library of pokemons based on pokeAPI. It enable you acces
              you to list of all pokemons, their specific info or some curio.
            </BannerDescription>
    
            <BannerButton>Get Started</BannerButton>
          </BannerContent>
        </BannerContainer>
      );
}
