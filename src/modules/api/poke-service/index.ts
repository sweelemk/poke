import type {Favourite} from './../../../context/app-context';
import type {PostgrestResponse} from '@supabase/supabase-js';
import {getPokemonImage} from '../../../helpers';
import type {NameURLInterface, PokemonTypes} from '../../../interfaces';
import {http} from '../http';
import {supabase} from '../supabase';

export const getPokemons = async (offset: number, limit: number) => {
  const {data: pokemonlist} = await http.get(
    `pokemon/?limit=${limit}&offset=${offset}`,
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

export const getAllPokemons = async () => {
  const {data} = await http.get('/pokemon/?limit=807&offset=0');
  return data.results;
};

export const searchPokemons = async (pokemons: NameURLInterface[]) => {
  const pokeList = Promise.all(
    pokemons.map(async (pokemon: NameURLInterface) => {
      const {data} = await http.get(pokemon.url);

      return {
        id: data.id,
        name: data.species.name,
        types: data.types.map((type: PokemonTypes) => type.type.name),
        sprite: getPokemonImage(data.id),
      };
    }),
  );

  return pokeList;
};

export const favouritePokemon = async (
  userId: string,
  pokemonId: number,
): Promise<PostgrestResponse<Favourite>> => {
  return await supabase
    .from('favourite')
    .insert([{user_id: userId, favourite_id: pokemonId}]);
};

export const getFavouritePokemons = async (
  userId: string,
): Promise<PostgrestResponse<Favourite>> => {
  return await supabase
    .from('favourite')
    .select('favourite_id')
    .eq('user_id', userId);
};

export const removeFavouritePokemons = async (pokeId: number) => {
  console.log(pokeId);
  return await supabase.from('favourite').delete().eq('favourite_id', pokeId);
};
