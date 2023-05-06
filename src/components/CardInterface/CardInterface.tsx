import { Name, Options, OptionsItem } from 'components/CardInterface/CardInterface.styled'
import { useAppContext } from 'hooks/useAppContext';
import { animated, useSpring } from '@react-spring/web';
import { HiViewfinderCircle } from 'react-icons/hi2';
import { MdFavoriteBorder } from 'react-icons/md';

export function CardInterface({isHovered, name} : {isHovered : boolean, name: string | undefined}) {

  const { browserWidth } = useAppContext()
  const isMobile = browserWidth < 1024

  const props = useSpring({
    opacity: isHovered ? 1 : 0,
  })

  return (
    <>
      {
        isMobile 
        ? <CardItems />
        : 
        <animated.div style={props}>
          <CardItems  />
        </animated.div>
        }
        <Name>{name}</Name>
    </>
  )
}


function CardItems() {
  return(
    <Options>
    <OptionsItem>
      <MdFavoriteBorder />
    </OptionsItem>
    <OptionsItem>
      <HiViewfinderCircle />
    </OptionsItem>
  </Options>
  )
}