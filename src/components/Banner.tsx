import { BannerButton, BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle, BannerTitleText1, BannerTitleText2 } from 'styles/Banner';
import banner from 'assets/banner2.png';
import bannerMobile from 'assets/bannerMobile.png';
import { useAppContext } from 'hooks/useAppContext';

export function Banner() {

    const isMobile = useAppContext()

    return (
        <BannerContainer>
          <BannerImage src={isMobile ? bannerMobile : banner} alt="banner-image" />
          <BannerContent>
            <BannerTitle>
              <BannerTitleText1>THE WIKIPEDIA OF</BannerTitleText1>
              <BannerTitleText2>POKEMONS</BannerTitleText2>
            </BannerTitle>
            <BannerDescription>
              POKEWIKI is library of pokemons based on pokeAPI. It enable you access
              you to list of all pokemons, their specific info or some fun fact.
            </BannerDescription>
    
            <BannerButton>Get Started</BannerButton>
          </BannerContent>
        </BannerContainer>
      );
}
