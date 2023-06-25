import { Options, OptionsItem } from 'components/Card/Card.styled'
import { HiViewfinderCircle } from 'react-icons/hi2'
import { MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface CardItemsProps {
  handleAddFavorite: () => void
  isFav: boolean
  name: string
}

export function PokemonCardUI({ handleAddFavorite, isFav, name }: CardItemsProps) {
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
