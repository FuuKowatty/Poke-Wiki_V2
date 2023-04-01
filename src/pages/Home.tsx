import { Banner } from 'components/Banner'
import { Slider } from 'components/Slider'
import { StyledPromotion } from 'styles/Promotions'

export function Home() {
  return (
    <>
      <Banner />
      <StyledPromotion>
        <Slider />
      </StyledPromotion>
    </>
  )
}
