import { FilterButton, FilterFavoriteContainer } from './Favorites.styled'
import { favItem } from 'components/CardInterface/CardInterface'
import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { GridContainer } from 'styles/globalComponents'
import { useFavorites } from 'hooks/useFavorites'

export function Favorites() {
  const { favorites } = useFavorites()

  const handleFilter = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement
    const value = target.getAttribute('data-value')
    console.log(value)
  }
  // const pokemonArr: string[] = favArr
  //   .filter((fav: favItem) => fav.type === 'pokemon')
  //   .map((fav: favItem) => fav.name)
  // const berryArr: string[] = favArr
  //   .filter((fav: favItem) => fav.type === 'berry')
  //   .map((fav: favItem) => fav.name)

  return (
    <>
      <FilterFavoriteContainer>
        <FilterButton data-value='all' onClick={(e) => handleFilter(e)}>
          All
        </FilterButton>
        <FilterButton data-value='pokemons' onClick={(e) => handleFilter(e)}>
          Pokemons
        </FilterButton>
        <FilterButton data-value='barries' onClick={(e) => handleFilter(e)}>
          Berries
        </FilterButton>
      </FilterFavoriteContainer>
      <GridContainer>
        {favorites.map((fav: favItem) => {
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
