import { SkeletonLoading, CardContainer, CardImage, ErrorMessageContainer } from '../Card.styled'
import { CardInterface } from '../CardInterface/CardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { checkImage, setAlternativeImg } from 'utils/imageUtils'
import { useEffect, useState } from 'react'


export function PokemonCard({ name }: { name: string }) {
  const [data, setData] = useState<null | PokemonSpecs>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchPokemonSpec = async () => {
      setIsLoading(true)
      try {
        const PokemonSpec = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const PokemonSpecJson = await PokemonSpec.json()
        setData(PokemonSpecJson)
      } catch (error) {
        console.log(name)
        setIsLoading(false)
        if (error instanceof Error) setError(error.message)
      }
    }

    fetchPokemonSpec()
  }, [])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const { handleAddFavorite } = useFavoriteContext()
  const handleAddFavoritePokemon = () => handleAddFavorite('pokemon', name)

  return (
    <CardContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isLoading && <SkeletonLoading />}
      {!error ? (
        <CardImage
          src={checkImage(data?.sprites.other.dream_world.front_default)}
          alt={name}
          onLoad={handleImageLoad}
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
