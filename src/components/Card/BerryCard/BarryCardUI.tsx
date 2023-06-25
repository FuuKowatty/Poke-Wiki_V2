import { BerryDetails } from './BerryDetails'
import {
  Name,
  Options,
  OptionsItem,
} from 'components/Card/Card.styled'
import { HiViewfinderCircle } from 'react-icons/hi2'
import { MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'


interface CardItemsProps {
  handleAddFavorite: () => void
  isFav: boolean
  cardItems: {
    flavors: Flavor[]
    firmness: Firmness
    growthTime: number
    category: Category
    cost: number
  }
  name: string
}

export function BerryCardUI({ handleAddFavorite, isFav, cardItems, name }: CardItemsProps) {
  const [isFavActive, setIsFavActive] = useState(isFav)
  const [isDetailsActive, setIsDetailsActive] = useState(false)

  useEffect(() => {
    setIsFavActive(isFav)
  }, [isFav])

  const onAddFavorite = () => {
    handleAddFavorite()
    setIsFavActive(!isFavActive)
  }

  const onViewDetails = () => {
    setIsDetailsActive(true)
  }

  const onCloseDetails = () => {
    setIsDetailsActive(false)
  }

  return (
    <>
      {isDetailsActive ? (
        <BerryDetails 
          {...cardItems}
          onCloseDetails={onCloseDetails}
        />
      ) : (
        <>
          <Options>
            <OptionsItem onClick={onAddFavorite} isActive={isFavActive}>
              <MdFavoriteBorder />
            </OptionsItem>
            <OptionsItem onClick={onViewDetails}>
              <HiViewfinderCircle />
            </OptionsItem>
          </Options>
          <Name>{name}</Name>
        </>
      )}
    </>
  )
}
