import { Name, Options, OptionsItem } from 'components/CardInterface/CardInterface.styled'
import { useAppContext } from 'hooks/useAppContext'
import { animated, useSpring } from '@react-spring/web'
import { HiViewfinderCircle } from 'react-icons/hi2'
import { MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'

export interface favItem {
  name: string
  type: string
}

export function CardInterface({
  isHovered,
  handleAddFavorite,
  name,
  url,
}: {
  isHovered: boolean
  handleAddFavorite: () => void
  name: string
  url?: string
}) {
  const { browserWidth } = useAppContext()
  const isMobile = browserWidth < 1024
  const { favorites } = useAppContext()

  const props = useSpring({
    opacity: isHovered ? 1 : 0,
  })

  const itemName = url || name
  const favNames = favorites.map((fav: favItem) => fav.name)
  const isFav = favNames.indexOf(itemName) === -1 ? false : true

  return (
    <>
      {isMobile ? (
        <CardItems handleAddFavorite={handleAddFavorite} isFav={isFav} />
      ) : (
        <animated.div style={props}>
          <CardItems handleAddFavorite={handleAddFavorite} isFav={isFav} />
        </animated.div>
      )}
      <Name>{name}</Name>
    </>
  )
}

function CardItems({
  handleAddFavorite,
  isFav,
}: {
  handleAddFavorite: () => void
  isFav: boolean
}) {
  const [active, setActive] = useState(isFav)
  useEffect(() => {
    setActive(isFav)
  }, [isFav])

  const handleClick = () => {
    handleAddFavorite()
    setActive(!active)
  }

  return (
    <Options>
      <OptionsItem onClick={handleClick} isActive={active}>
        <MdFavoriteBorder />
      </OptionsItem>
      <OptionsItem>
        <HiViewfinderCircle />
      </OptionsItem>
    </Options>
  )
}
