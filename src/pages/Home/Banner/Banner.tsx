import {
  BannerButton,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  BannerTitleTextYellow,
  BannerTitleTextWhite,
} from './Banner.styled'
import banner from 'assets/banner.png'
import bannerMobile from 'assets/bannermobile.png'
import { useViewport } from 'hooks/useViewport'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Banner() {
  const { isMobile, isTablet } = useViewport()
  const navigate = useNavigate()

  useEffect(() => {
    // Preload the appropriate banner image based on viewport
    const preloadImage = new Image()
    preloadImage.src = isMobile || isTablet ? bannerMobile : banner
  }, [isMobile, isTablet])

  return (
    <BannerContainer>
      <BannerImage src={isMobile || isTablet ? bannerMobile : banner} alt='banner-image' />
      <BannerContent>
        <BannerTitle>
          <BannerTitleTextYellow>THE WIKIPEDIA OF</BannerTitleTextYellow>
          <BannerTitleTextWhite>POKEMONS</BannerTitleTextWhite>
        </BannerTitle>
        <BannerDescription>
          POKEWIKI is a library of pokemons based on pokeAPI. It enables you to access a list of all
          pokemons, their specific info, or some fun facts.
        </BannerDescription>
        <BannerButton onClick={() => navigate('/pokemons/all')}>Get Started</BannerButton>
      </BannerContent>
    </BannerContainer>
  )
}
