import alternativeImg from 'assets/default_image.svg'
import { CardContainer, ErrorMessageContainer, PokemonCardImage, SkeletonLoading } from 'components/Card/Card.styled'
import { BerryCardInterface } from 'components/CardInterface/BarryCardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { useEffect, useState } from 'react'

export interface flavor {
  flavor: {
    name: string
  }
  potency: number
}

export interface firmness {
  name: string
}

interface BerryProps {
  firmness: firmness
  flavors: flavor[]
  growth_time: number
  item: {
    url: string
  }
}

export interface category {
  name: string
}

interface sprites {
  default: string
}

interface BerryItemSpec {
  category: category
  cost: number
  name: string
  sprites: sprites
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
      } catch(error) {
        setIsLoading(false)
        if(error instanceof Error) setError(error.message)
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
        } catch(error) {
          setIsLoading(false)
          if(error instanceof Error) setError(error.message)
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
        <PokemonCardImage
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
