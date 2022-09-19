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
  const {data} = await http.get('/pokemon/?limit=905&offset=0');
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
): Promise<PostgrestResponse<any>> => {
  return await supabase
    .from('favourite')
    .insert([{user_id: userId, favourite_id: pokemonId}]);
};

export const getFavouritePokemons = async (
  userId: string,
): Promise<PostgrestResponse<any>> => {
  return await supabase
    .from('favourite')
    .select('favourite_id')
    .eq('user_id', userId);
};

export const removeFavouritePokemons = async (pokeId: number) => {
  return await supabase.from('favourite').delete().eq('favourite_id', pokeId);
};

export const getPokemonSpeciesData = async (pokeId: number) => {
  return await http.get(`pokemon-species/${pokeId}`);
};

export const getPokemonById = async (pokeId: number) => {
  const pokemon = await http.get(`pokemon/${pokeId}`);

  return {
    id: pokemon.data.id,
    name: pokemon.data.species.name,
    types: pokemon.data.types.map((type: PokemonTypes) => type.type.name),
    sprite: getPokemonImage(pokemon.data.id),
    abilities: pokemon.data.abilities,
    base_experience: pokemon.data.base_experience,
    height: pokemon.data.height,
    weight: pokemon.data.weight,
    stats: pokemon.data.stats,
  };
};
