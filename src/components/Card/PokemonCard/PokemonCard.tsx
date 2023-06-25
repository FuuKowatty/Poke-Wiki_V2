import { PokemonCardUI } from './CardInterface'
import { CardWrapper } from '../CardWrapper'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { getPokemonCard } from 'services/getPokemonCard'
import { useHover } from 'hooks/useHover'
import { useViewportContext } from 'context/ViewportContext/ViewportProvider'
import { useSpring, animated } from '@react-spring/web'

export function PokemonCard({ name }: { name: string }) {
  const { data, isLoading, error, handleLoad } = getPokemonCard(name)
  const { isHovered, handleHover } = useHover()
  const handleAddFavoritePokemon = () => handleAddFavorite('pokemon', name)
  const { isMobile, isTablet } = useViewportContext()
  const { favorites, handleAddFavorite } = useFavoriteContext()
  // check if card is favorite
  const favNames = favorites.map((fav) => fav.name)
  const isFav = favNames.includes(name)

  const springProps = useSpring({
    opacity: isHovered ? 1 : 0,
  })

  const CardWrapperProps = {
    data,
    error,
    isLoading,
    isHovered,
    handleLoad,
    handleHover,
    img: data?.sprites.other.dream_world.front_default,
  }

  return (
    <CardWrapper {...CardWrapperProps}>
      {data &&
        !isLoading &&
        (() => {
          const cardItemsProps = {
            handleAddFavorite: handleAddFavoritePokemon,
            isFav,
            name: data?.name,
          }

          return isTablet || isMobile ? (
            <PokemonCardUI {...cardItemsProps} />
          ) : (
            <animated.div style={springProps}>
              <PokemonCardUI {...cardItemsProps} />
            </animated.div>
          )
        })()}
    </CardWrapper>
  )
}
