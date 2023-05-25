import { theme } from 'styles/theme'
import { device } from 'utils/breakpoints'
import { Button } from 'styles/globalComponents'
import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: ${theme.colors['bannerColor']};
  min-height: 565px;

  @media ${device['laptop']} {
    flex-direction: row;
    justify-content: center;
    min-height: 350px;
  }

  @media ${device['desktop']} {
    gap: ${theme.spacing[3]};
  }
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  width: 100%;
  padding: ${theme.spacing[3]} 0;

  @media ${device['tablet']} {
    align-items: start;
    max-width: 450px;
  }

  @media ${device['laptop']} {
    max-width: 350px;
  }
`

export const BannerImage = styled.img`
  max-width: 350px;
  width: 90%;
  padding-top: ${theme.spacing[3]};

  @media ${device['tablet']} {
    max-width: 450px;
  }

  @media ${device['laptop']} {
    padding-top: 0;
    max-width: 550px;
  }

  @media ${device['desktop']} {
    max-width: 600px;
  }
`
export const BannerTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-family: Golos Text;
  width: 100%;
  line-height: 0.75;

  @media ${device['tablet']} {
    text-align: center;
  }

  @media ${device['laptop']} {
    text-align: left;
  }
`

export const BannerTitleTextYellow = styled.span`
  color: ${theme.colors['standsOut']};
  display: block;
  font-size: ${theme.size['xl']};

  @media ${device['tablet']} {
    font-size: ${theme.size['2xl']};
  }

  @media ${device['laptop']} {
    font-size: ${theme.size['2xl']};
  }
`

export const BannerTitleTextWhite = styled.span`
  color: ${theme.colors['primary']};
  font-size: ${theme.size['3xl']};

  @media ${device['tablet']} {
    font-size: ${theme.size['4xl']};
  }

  @media ${device['laptop']} {
    font-size: ${theme.size['4xl']};
  }
`

export const BannerDescription = styled.div`
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  text-align: left;

  @media ${device['tablet']} {
    padding: ${theme.spacing[3]} 0;
    font-size: ${theme.size['lg']};
  }

  @media ${device['laptop']} {
    font-size: ${theme.size['lg']};
    max-width: 350px;
  }
`

export const BannerButton = styled(Button)`
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  margin: auto;
  @media ${device['tablet']} {
    font-size: ${theme.size['xl']};
  }

  @media ${device['laptop']} {
    font-size: ${theme.size['lg']};
    max-width: 350px;
    width: 100%;
  }

  @media ${device['desktop']} {
    padding: ${theme.spacing[3]};
  }
`
