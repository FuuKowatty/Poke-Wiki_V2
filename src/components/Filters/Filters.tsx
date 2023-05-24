import { FiltersContainer } from './Filters.styled';
import { SelectInput } from './SelectInput/SelectInput';
import { Searchbar } from './Searchbar/Searchbar';
import { useEffect, useState } from 'react';

interface FiltersProps {
  isBerryPage: boolean;
}

interface PokemonType {
  name: string;
  url: string;
}

interface TypesResponse {
  results: PokemonType[];
}

export function Filters({ isBerryPage }: FiltersProps) {

  const [types, setTypes] = useState<PokemonType[]>([]);

  const queryRoute = isBerryPage ? '/berries/search?query=' : '/pokemons/search?query=';
  const typeRoute = isBerryPage ? '/berries' : '/pokemons';
  const apiEndpoint = isBerryPage ? 'https://pokeapi.co/api/v2/berry-firmness/' : 'https://pokeapi.co/api/v2/type/';

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const typesResponse = await fetch(apiEndpoint);
        const typesJson: TypesResponse = await typesResponse.json();
        setTypes(typesJson.results);
      } catch {
        console.log('Error fetching types');
      }
    };

    fetchTypes();
  }, [apiEndpoint]);

  return (
    <FiltersContainer>
      <Searchbar queryRoute={queryRoute}/>
      {types.length > 0 && (
        <SelectInput
          options={[{ name: 'all', url: '' }, ...types]}
          typeRoute={typeRoute}
        />
      )}
    </FiltersContainer>
  );
}
