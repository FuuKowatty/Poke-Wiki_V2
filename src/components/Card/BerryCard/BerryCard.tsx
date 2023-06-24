import alternativeImg from 'assets/default_image.svg'
import {
  CardContainer,
  ErrorMessageContainer,
  CardImage,
  SkeletonLoading,
} from 'components/Card/Card.styled'
import { BerryCardInterface } from 'components/Card/CardInterface/BarryCardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { useEffect, useState } from 'react'


interface BerryProps {
  firmness: Firmness
  flavors: Flavor[]
  growth_time: number
  item: {
    url: string
  }
}

interface Sprites {
  default: string
}

interface BerryItemSpec {
  category: Category
  cost: number
  name: string
  sprites: Sprites
}

export function BerryCard({ url }: { url: string }) {
  const [dataSpec, setDataSpec] = useState<null | BerryProps>(null)
  const [dataItemSpec, setDataItemSpec] = useState<null | BerryItemSpec>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchBerrySpec = async () => {
      setIsLoading(true)
      try {
        const BerriesSpecs = await fetch(url)
        const BerriesSpecsJson = await BerriesSpecs.json()
        setDataSpec(BerriesSpecsJson)
      } catch (error) {
        setIsLoading(false)
        if (error instanceof Error) setError(error.message)
      }
    }

    fetchBerrySpec()
  }, [])

  useEffect(() => {
    if (dataSpec) {
      const fetchBarryItemSpec = async () => {
        try {
          const BerriesSpecs = await fetch(dataSpec.item.url)
          const BerriesSpecsJson = await BerriesSpecs.json()
          setDataItemSpec(BerriesSpecsJson)
        } catch (error) {
          setIsLoading(false)
          if (error instanceof Error) setError(error.message)
        }
      }

      fetchBarryItemSpec()
    }
  }, [dataSpec])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const setAlternativeImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget
    img.src = alternativeImg
  }

  const checkImage = () => {
    if (dataItemSpec?.sprites.default === null) {
      return alternativeImg
    } else {
      return dataItemSpec?.sprites.default
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
          alt={dataItemSpec?.name}
          onLoad={handleImageLoad}
          onError={setAlternativeImg}
          style={{ display: isLoading || !dataItemSpec ? 'none' : 'block' }}
        />
      ) : (
        <ErrorMessageContainer>
          <p>Sry We could not download data: </p>
        </ErrorMessageContainer>
      )}

      {dataItemSpec && dataSpec && !isLoading && (
        <BerryCardInterface
          isHovered={isHovered}
          handleAddFavorite={handleAddFavoriteBerry}
          name={dataItemSpec?.name}
          url={url}
          flavors={dataSpec.flavors}
          firmness={dataSpec.firmness}
          growthTime={dataSpec.growth_time}
          category={dataItemSpec.category}
          cost={dataItemSpec.cost}
        />
      )}
    </CardContainer>
  )
}
