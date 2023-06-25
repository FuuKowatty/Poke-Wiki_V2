import alternativeImg from 'assets/default_image.svg'
import {
  CardContainer,
  ErrorMessageContainer,
  CardImage,
  SkeletonLoading,
} from 'components/Card/Card.styled'
import { BerryCardInterface } from 'components/Card/CardInterface/BarryCardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { getBerryCard } from 'services/getBerryCard'
import { useState } from 'react'

export function BerryCard({ url }: { url: string }) {
  const {data, error, isLoading, handleLoad} = getBerryCard(url)
  const [isHovered, setIsHovered] = useState(false)

  const setAlternativeImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    img.src = alternativeImg
  }

  const checkImage = () => {
    if (data?.sprites.default === null) {
      return alternativeImg
    } else {
      return data?.sprites.default
    }
  }

  const { handleAddFavorite } = useFavoriteContext()
  const handleAddFavoriteBerry = () => handleAddFavorite('berry', url)

  return (
    <CardContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isLoading && <SkeletonLoading />}
      {!error ? (
        <CardImage
          src={checkImage()}
          alt={data?.name}
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
        <BerryCardInterface
          isHovered={isHovered}
          handleAddFavorite={handleAddFavoriteBerry}
          name={data?.name}
          url={url}
          flavors={data.flavors}
          firmness={data.firmness}
          growthTime={data.growth_time}
          category={data.category}
          cost={data.cost}
        />
      )}
    </CardContainer>
  )
}
