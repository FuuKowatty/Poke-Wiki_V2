import { Name, Options, OptionsItem } from 'components/Card/CardInterface/CardInterface.styled'
import { useViewportContext } from 'context/ViewportContext/ViewportProvider'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
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
}: {
  isHovered: boolean
  handleAddFavorite: () => void
  name: string
}) {
  const { isTablet, isMobile } = useViewportContext()
  const { favorites } = useFavoriteContext()

  const props = useSpring({
    opacity: isHovered ? 1 : 0,
  })

  // check if card is favorite
  // const itemName = url || name
  const favNames = favorites.map((fav: favItem) => fav.name)
  const isFav = favNames.indexOf(name) === -1 ? false : true

  return (
    <>
      {isTablet || isMobile ? (
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
  const [isFavActive, setisFavActive] = useState(isFav)
  const navigate = useNavigate()

  useEffect(() => {
    setisFavActive(isFav)
  }, [isFav])

  const onAddFavorite = () => {
    handleAddFavorite()
    setisFavActive(!isFavActive)
  }

  const onViewDetails = () => {
    navigate(`/pokemons/${name}/details`)
  }

  return (
    <Options>
      <OptionsItem onClick={onAddFavorite} isActive={isFavActive}>
        <MdFavoriteBorder />
      </OptionsItem>
      <OptionsItem onClick={onViewDetails}>
        <HiViewfinderCircle />
      </OptionsItem>
    </Options>
  )
}