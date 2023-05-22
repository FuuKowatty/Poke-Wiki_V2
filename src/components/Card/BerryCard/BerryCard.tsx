import alternativeImg from 'assets/default_image.svg'
import { CardContainer, PokemonCardImage, SkeletonLoading } from 'components/Card/Card.styled'
import { BerryCardInterface } from 'components/CardInterface/BarryCardInterface'
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider'
import { useEffect, useState } from 'react'

export interface flavor {
  flavor: {
    name: string
    url: string
  }
  potency: number
}

export interface firmness {
  name: string
  url: string
}

interface BerryProps {
  firmness: firmness
  flavors: flavor[]
  growth_time: number
  id: number
  item: {
    name: string
    url: string
  }
  max_harvest: number
  name: string
  natural_gift_power: number
  natural_gift_type: {
    name: string
    url: string
  }
  size: number
  smoothness: number
  soil_dryness: number
}

export interface category {
  name: string
}

interface language {
  short_effect: string
}

interface effect_entries {
  language: language
}

interface sprites {
  default: string
}

interface BerryItemSpec {
  category: category
  cost: number
  effect_entries: effect_entries[]
  id: number
  name: string
  sprites: sprites
}

export function BerryCard({ url }: { url: string }) {
  const [dataSpec, setDataSpec] = useState<null | BerryProps>(null)
  const [dataItemSpec, setDataItemSpec] = useState<null | BerryItemSpec>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchBerrySpec = async () => {
      setIsLoading(true)
      try {
        const BerriesSpecs = await fetch(url)
        const BerriesSpecsJson = await BerriesSpecs.json()
        setDataSpec(BerriesSpecsJson)
      } catch {
        console.log('blad BerrySpec')
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
        } catch {
          console.log('blad pokemonSpec')
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
      <PokemonCardImage
        src={checkImage()}
        alt={dataItemSpec?.name}
        onLoad={handleImageLoad}
        onError={setAlternativeImg}
        style={{ display: isLoading || !dataItemSpec ? 'none' : 'block' }}
      />
      {dataItemSpec && dataSpec && !isLoading && (
        <BerryCardInterface
          isHovered={isHovered}
          handleAddFavorite={handleAddFavoriteBerry}
          name={dataItemSpec?.name}
          url={url}
          flavors={dataSpec.flavors}
          firmness={dataSpec.firmness}
          growthTime={dataSpec.growth_time}
          size={dataSpec.size}
          smoothness={dataSpec.smoothness}
          category={dataItemSpec.category}
          cost={dataItemSpec.cost}
        />
      )}
    </CardContainer>
  )
}
