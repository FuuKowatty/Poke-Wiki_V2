import { favItem } from 'components/CardInterface/CardInterface'
import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard'
import { BerryCard } from 'components/Card/BerryCard/BerryCard'
import { GridContainer } from 'styles/globalComponents'
import { useFavorites } from 'hooks/useFavorites'

export function Favorites() {
  const { favorites } = useFavorites()
  // const pokemonArr: string[] = favArr
  //   .filter((fav: favItem) => fav.type === 'pokemon')
  //   .map((fav: favItem) => fav.name)
  // const berryArr: string[] = favArr
  //   .filter((fav: favItem) => fav.type === 'berry')
  //   .map((fav: favItem) => fav.name)

  return (
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
  )
}
