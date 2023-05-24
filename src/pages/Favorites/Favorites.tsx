import { favItem } from 'components/CardInterface/CardInterface'
import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { GridContainer } from 'styles/globalComponents'
import { FavoriteFilters } from 'components/Filters/FavoriteFilters/FavoriteFilters'
import { useState } from 'react'

export function Favorites() {
  const [actualFilters, setActualFilters] = useState('all')
  const [filteredFavorites, setfilteredFavorites] = useState<favItem[]>([])

  const handleActualFilters = (buttonValue: string) => {
    setActualFilters(buttonValue)
  }

  const handleSelectFilters = (filteredType: favItem[]) => {
    setfilteredFavorites(filteredType)
  }

  return (
    <>
      <FavoriteFilters
        actualFilters={actualFilters}
        handleActualFilters={handleActualFilters}
        handleSelectFilters={handleSelectFilters}
      />
      <GridContainer>
        {filteredFavorites.map((fav: favItem) => {
          const { name, type } = fav
          if (type === 'pokemon') {
            return <PokemonCard key={name} name={name} />
          } else if (type === 'berry') {
            return <BerryCard key={name} url={name} />
          }
        })}
      </GridContainer>
    </>
  )
}
