import { Theme } from 'styles/Theme'
import { device } from 'styles/Breakpoints'
import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: ${Theme.colors.bannerColor};

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
  }

  @media ${device.desktop} {
    gap: ${Theme.spacing[3]};
  }
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  width: 100%;
  padding: ${Theme.spacing[3]} 0;

  @media ${device.tablet} {
    align-items: start;
    max-width: 260px;
  }

  @media ${device.laptop} {
    max-width: 350px;
  }
`

export const BannerImage = styled.img`
  max-width: 350px;
  width: 90%;
  padding-top: ${Theme.spacing[3]};

  @media ${device.tablet} {
    padding-top: 0;
  }

  @media ${device.laptop} {
    max-width: 450px;
  }

  @media ${device.desktop} {
    max-width: 600px;
  }
`
export const BannerTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-family: Golos Text;
  width: 100%;
  line-height: 0.75;

  @media ${device.tablet} {
    text-align: left;
  }

  @media ${device.laptop} {
  }
`

export const BannerTitleText1 = styled.span`
  color: ${Theme.colors.standsOut};
  font-size: ${Theme.fonts.headerThree};
  display: block;

  @media ${device.laptop} {
    font-size: ${Theme.fonts.headerTwo};
  }
`

export const BannerTitleText2 = styled.span`
  color: ${Theme.colors.primary};
  font-size: ${Theme.fonts.headerOne};

  @media ${device.laptop} {
    font-size: ${Theme.fonts.headerPlus};
  }
`

export const BannerDescription = styled.div`
  line-height: ${Theme.fonts.normal};
  padding: ${Theme.spacing[3]} ${Theme.spacing[3]};
  text-align: left;

  @media ${device.tablet} {
    padding: ${Theme.spacing[3]} 0;
    max-width: 260px;
  }

  @media ${device.laptop} {
    font-size: ${Theme.fonts.headerFour};
    max-width: 350px;
  }
`

export const Button = styled.button`
  border: none;
  background: ${Theme.colors.standsOut};
  padding: ${Theme.spacing[2]};
  text-transform: uppercase;
  border-radius: ${Theme.spacing[1]};
  cursor: pointer;
  color: ${Theme.colors.darkBlue};
  font-weight: bold;

  &:hover {
    background: ${Theme.colors.primary};
    color: ${Theme.colors.darkBlue};
  }
`

export const BannerButton = styled(Button)`
  width: 90%;
  padding: ${Theme.spacing[3]};
  font-size: ${Theme.fonts.normal};

  @media ${device.tablet} {
    padding: ${Theme.spacing[2]};
    max-width: 260px;
  }

  @media ${device.laptop} {
    font-size: ${Theme.fonts.headerFour};
    max-width: 350px;
    width: 100%;
  }

  @media ${device.desktop} {
    padding: ${Theme.spacing[3]};
  }
`
