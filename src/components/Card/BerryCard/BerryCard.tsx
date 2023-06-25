import { CardWrapper } from '../CardWrapper'
import { BerryCardUI } from 'components/Card/BerryCard/BarryCardUI'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { getBerryCard } from 'services/getBerryCard'
import { useViewportContext } from 'context/ViewportContext/ViewportProvider'
import { useHover } from 'hooks/useHover'
import { animated, useSpring } from '@react-spring/web'

export function BerryCard({ url }: { url: string }) {
  const { data, error, isLoading, handleLoad } = getBerryCard(url)
  const { isHovered, handleHover } = useHover()
  const { isMobile, isTablet } = useViewportContext()
  const { favorites, handleAddFavorite } = useFavoriteContext()
  // check if card is favorite
  const favNames = favorites.map((fav) => fav.name)
  const isFav = favNames.includes(url)

  const handleAddFavoriteBerry = () => handleAddFavorite('berry', url)
  const springProps = useSpring({
    opacity: isHovered ? 1 : 0,
  })

  const CardWrapperProps = {
    data,
    error,
    isLoading,
    handleLoad,
    handleHover,
    img: data?.sprites.default,
  }

  return (
    <CardWrapper {...CardWrapperProps}>
      {data &&
        !isLoading &&
        (() => {
          const cardItemsProps = {
            handleAddFavorite: handleAddFavoriteBerry,
            isFav,
            cardItems: {
              flavors: data?.flavors,
              firmness: data?.firmness,
              growthTime: data?.growth_time,
              category: data?.category,
              cost: data?.cost,
            },
            name: data?.name,
          }

          return isTablet || isMobile ? (
            <BerryCardUI {...cardItemsProps} />
          ) : (
            <animated.div style={springProps}>
              <BerryCardUI {...cardItemsProps} />
            </animated.div>
          )
        })()}
    </CardWrapper>
  )
}
