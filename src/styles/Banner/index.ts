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

export const BannerButton = styled.button`
  width: 90%;
  cursor: pointer;
  background: ${Theme.colors.standsOut};
  border: none;
  padding: ${Theme.spacing[3]};
  color: ${Theme.colors.darkBlue};
  font-weight: bold;
  font-size: ${Theme.fonts.normal};
  text-transform: uppercase;
  border-radius: ${Theme.spacing[1]};

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

  &:hover {
    background: ${Theme.colors.primary};
    color: ${Theme.colors.darkBlue};
  }
`

// export const BannerContainer = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'center',
//     width: '100%',
//     background: Colors.darker_blue,
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   }));

//   export const BannerContent = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'left',
//     maxWidth: 420,
//     padding: '0 30px',
//     gap: '20px',
//     [theme.breakpoints.down('md')]: {
//       padding: '15px 0',
//       alignItems: 'center',
//     },
//     [theme.breakpoints.down('sm')]: {
//       padding: '15px 0',
//       maxWidth: 250,
//       alignItems: 'center',
//       gap: '10px',
//     },
//   }));

//   export const BannerImage = styled('img')(({ src, theme }) => ({
//     src: `url(${src})`,
//     width: '600px',
//     [theme.breakpoints.down('lg')]: {
//       width: '450px',
//     },
//     [theme.breakpoints.down('md')]: {
//       width: '350px',
//     },
//     [theme.breakpoints.down('sm')]: {
//       padding: '10px',
//     },
//   }));

//   export const BannerTitle = styled(Typography)(({ theme }) => ({
//     '&::before': {
//       content: '"THE WIKIPEDIA OF"',
//       fontSize: 24,
//       color: Colors.standsOut,
//       fontWeight: 'bold',
//       display: 'block',
//       postion: 'absolute',
//       height: '.5rem',
//       [theme.breakpoints.down('lg')]: {
//         fontSize: '16px',
//       },
//     },
//     textAlign: 'left',
//     fontWeight: 'bold',
//     lineHeight: 1.25,
//     fontFamily: 'Golos Text',
//     [theme.breakpoints.down('lg')]: {
//       fontSize: 56,
//     },
//     [theme.breakpoints.down('md')]: {
//       fontSize: 42,
//     },
//   }));

//   export const BannerDescription = styled(Typography)(({ theme }) => ({
//     lineHeight: 1.25,
//     letterSpacing: 1.25,
//     [theme.breakpoints.down('md')]: {
//       lineHeight: 1.15,
//       letterSpacing: 1.15,
//       padding: '0 20px',
//       textAlign: 'left',
//     },
//     [theme.breakpoints.down('sm')]: {
//       padding: '15px 0',
//     },
//   }));

//   export const BannerShopButton = styled(Button)(({ theme }) => ({
//     background: Colors.body_bg,
//     '&:hover': {
//       background: Colors.primary,
//       color: darken(0.1, Colors.dark_blue),
//     },
//     width: '100%',
//     padding: '20px 0px',
//     color: Colors.primary,
//     fontWeight: 'bold',
//     fontSize: 16,
//     [theme.breakpoints.down('md')]: {
//       maxWidth: '250px',
//       padding: '15px 0px',
//       fontSize: 14,
//     },
//   }));
