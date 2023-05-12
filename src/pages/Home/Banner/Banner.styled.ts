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

  @media ${device['tablet']} {
    flex-direction: row;
    justify-content: center;
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
    max-width: 260px;
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
    padding-top: 0;
  }

  @media ${device['laptop']} {
    max-width: 450px;
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
    text-align: left;
  }

  @media ${device['laptop']} {
  }
`

export const BannerTitleTextYellow = styled.span`
  color: ${theme.colors['standsOut']};
  font-size: ${theme.size['xl']};
  display: block;

  @media ${device['laptop']} {
    font-size: ${theme.size['2xl']};
  }
`

export const BannerTitleTextWhite = styled.span`
  color: ${theme.colors['primary']};
  font-size: ${theme.size['3xl']};

  @media ${device['laptop']} {
    font-size: ${theme.size['4xl']};
  }
`

export const BannerDescription = styled.div`
  line-height: ${theme.size['md']};
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  text-align: left;

  @media ${device['tablet']} {
    padding: ${theme.spacing[3]} 0;
    max-width: 260px;
  }

  @media ${device['laptop']} {
    font-size: ${theme.size['lg']};
    max-width: 350px;
  }
`

export const BannerButton = styled(Button)`
  padding: ${theme.spacing[3]} ${theme.spacing[5]};
  font-size: ${theme.size['md']};

  @media ${device['tablet']} {
    padding: ${theme.spacing[2]};
    max-width: 260px;
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
