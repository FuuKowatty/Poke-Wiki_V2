import { SkeletonLoading, CardContainer, CardImage, ErrorMessageContainer } from '../Card.styled'
import { CardInterface } from '../CardInterface/CardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { checkImage, setAlternativeImg } from 'utils/imageUtils'
import { getPokemonCard } from 'services/getPokemonCard'
import { useState } from 'react'



export function PokemonCard({ name }: { name: string }) {
  const {data, isLoading, error, handleLoad} = getPokemonCard(name)
  const [isHovered, setIsHovered] = useState(false)

  
  const { handleAddFavorite } = useFavoriteContext()
  const handleAddFavoritePokemon = () => handleAddFavorite('pokemon', name)

  return (
    <CardContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isLoading && <SkeletonLoading />}
      {!error ? (
        <CardImage
          src={checkImage(data?.sprites.other.dream_world.front_default)}
          alt={name}
          onLoad={handleLoad}
          onError={setAlternativeImg}
          style={{ display: isLoading || !data ? 'none' : 'block' }}
        />
      ) : (
        <ErrorMessageContainer>
          <p>Sry We could not download data: </p>
        </ErrorMessageContainer>
      )}

      {data && !isLoading && (
        <CardInterface
          isHovered={isHovered}
          handleAddFavorite={handleAddFavoritePokemon}
          name={name}
        />
      )}
    </CardContainer>
  )
}
