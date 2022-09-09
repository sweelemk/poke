import {getPokemonImage} from '../../../helpers';
import type {NameURLInterface, PokemonTypes} from '../../../interfaces';
import {http} from '../http';

export const getPokemons = async (offset: number) => {
  const {data: pokemonlist} = await http.get(
    `pokemon/?limit=8&offset=${offset}`,
  );

  const pokeList = Promise.all(
    pokemonlist.results.map(async (pokemon: NameURLInterface) => {
      const {data} = await http.get(pokemon.url);

      return {
        id: data.id,
        name: data.species.name,
        types: data.types.map((type: PokemonTypes) => type.type.name),
        sprite: getPokemonImage(data.id),
      };
    }),
  );
  return {next: pokemonlist.next, pokePromise: pokeList};
};
