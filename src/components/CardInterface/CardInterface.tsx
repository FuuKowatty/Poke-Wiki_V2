import { Name, Options, OptionsItem } from 'components/CardInterface/CardInterface.styled'
import { useAppContext } from 'hooks/useAppContext'
import { animated, useSpring } from '@react-spring/web'
import { HiViewfinderCircle } from 'react-icons/hi2'
import { MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface CardItemsProps {
  handleAddFavorite: () => void
  isFav: boolean
  name: string
}

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

  // check if card is favorite
  const itemName = url || name
  const favNames = favorites.map((fav: favItem) => fav.name)
  const isFav = favNames.indexOf(itemName) === -1 ? false : true

  return (
    <>
      {isMobile ? (
        <CardItems handleAddFavorite={handleAddFavorite} isFav={isFav} name={name} />
      ) : (
        <animated.div style={props}>
          <CardItems handleAddFavorite={handleAddFavorite} isFav={isFav} name={name} />
        </animated.div>
      )}
      <Name>{name}</Name>
    </>
  )
}

function CardItems({ handleAddFavorite, isFav, name }: CardItemsProps) {
  const [active, setActive] = useState(isFav)
  const navigate = useNavigate()

  useEffect(() => {
    setActive(isFav)
  }, [isFav])

  const onAddFavorite = () => {
    handleAddFavorite()
    setActive(!active)
  }

  const onViewDetails = () => {
    navigate(`/pokemons/${name}/details`)
  }

  return (
    <Options>
      <OptionsItem onClick={onAddFavorite} isActive={active}>
        <MdFavoriteBorder />
      </OptionsItem>
      <OptionsItem onClick={onViewDetails}>
        <HiViewfinderCircle />
      </OptionsItem>
    </Options>
  )
}
