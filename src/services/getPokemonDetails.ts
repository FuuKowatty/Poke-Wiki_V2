import { checkErrorType } from 'utils/checkData';
import {useEffect, useState} from 'react';
import axios from 'axios'

interface pokemonSpeciesProps {
    habitat: {
      name: string
    } | null
    flavor_text_entries: FlavorText[]
  }

export function getPokemonDetails(name: string) {
    const pokemonLink = `https://pokeapi.co/api/v2/pokemon/${name}`
    const pokemonSpeciesLink = `https://pokeapi.co/api/v2/pokemon-species/${name}`

    const [pokemonData, setPokemonData] = useState<PokemonSpecs | null>(null)
    const [pokemonSpecies, setPokemonSpecies] = useState<pokemonSpeciesProps | null>(null)
    
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
      const fetchData = async () => {
        try {
          const [response1, response2] = await Promise.all([
            axios.get(pokemonLink),
            axios.get(pokemonSpeciesLink),
          ]);
    
          const data1 = response1.data;
          const data2 = response2.data;
    
          setPokemonData(data1);
          setPokemonSpecies(data2);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setError(checkErrorType(error).message);
        }
      };
    
      fetchData();
    }, []);

      const data = pokemonData && pokemonSpecies ? {...pokemonData, ...pokemonSpecies} : null

      return { data, isLoading, error }
}
