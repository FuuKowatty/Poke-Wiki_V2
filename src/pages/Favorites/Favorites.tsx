import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { GridContainer } from 'styles/globalComponents'
import { FavoriteFilters } from 'components/Filters/FavoriteFilters/FavoriteFilters'
import { NoDataInfo } from 'components/common/NoDataInfo/NoDataInfo'
import { useState } from 'react'

export function Favorites() {
  const [actualFilters, setActualFilters] = useState('all')
  const [filteredFavorites, setfilteredFavorites] = useState<FavItem[]>([])

  const handleActualFilters = (buttonValue: string) => {
    setActualFilters(buttonValue)
  }

  const handleSelectFilters = (filteredType: FavItem[]) => {
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
      {
        filteredFavorites.length ? (
          filteredFavorites.map((fav: FavItem) => {
            const { name, type } = fav;
            switch (type) {
              case 'pokemon':
                return <PokemonCard key={name} name={name} />;
              case 'berry':
                return <BerryCard key={name} url={name} />;
              default:
                return null;
            }
          })
        ) : (
          <NoDataInfo />
        )
      }
      </GridContainer>
    </>
  )
}
