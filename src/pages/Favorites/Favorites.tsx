import { PokemonCard } from 'components/Card/PokemonCard/PokemonCard';
import { BerryCard } from 'components/Card/BerryCard/BerryCard';
import { GridContainer } from 'styles/globalComponents';
import { FavoriteFilters } from 'components/Filters/FavoriteFilters/FavoriteFilters';
import { NoDataInfo } from 'components/common/NoDataInfo/NoDataInfo';
import { useFavoriteContext } from 'context/FavoriteContext/FavoritesProvider';
import { useState, useEffect } from 'react';

export function Favorites() {
  const [actualFilters, setActualFilters] = useState('all');
  const favoritesContext = useFavoriteContext();
  const [filteredFavorites, setFilteredFavorites] = useState<FavItem[]>(favoritesContext.favorites);

  const handleActualFilters = (buttonValue: string) => {
    setActualFilters(buttonValue);
  };

  useEffect(() => {
    const filterFavorites = () => {
      let filtered: FavItem[] = [];

      if (actualFilters === 'all') {
        filtered = favoritesContext.favorites;
      } else {
        filtered = favoritesContext.favorites.filter((fav: FavItem) => {
          return actualFilters === 'berries' ? fav.type === 'berry' : fav.type === 'pokemon';
        });
      }

      setFilteredFavorites(filtered);
    };

    filterFavorites();
  }, [actualFilters, favoritesContext.favorites]);

  return (
    <>
      <FavoriteFilters
        {...favoritesContext}
        actualFilters={actualFilters}
        handleActualFilters={handleActualFilters}
      />
      <GridContainer>
        {filteredFavorites.length ? (
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
        )}
      </GridContainer>
    </>
  );
}
