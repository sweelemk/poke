import {useAuth, useAppContext} from '../context';
import type {FavouriteType} from '../context/reducers';
import {
  favouritePokemon,
  removeFavouritePokemons,
} from '../modules/api/poke-service';

export const usePokemons = () => {
  const {user} = useAuth();
  const {addFavourite, favourites, removePokemon} = useAppContext();

  const isFavourite = (id: number) => {
    const pokemon = favourites.filter(f => f.favourite_id === id);
    return pokemon.length > 0;
  };

  const setFavouritePokemon = async (pokemonId: number) => {
    const userId = user?.id as string;
    try {
      const {data} = await favouritePokemon(userId, pokemonId);
      const state = data as FavouriteType[];

      addFavourite(state[0]?.favourite_id as number);
    } catch (error) {
      console.warn(error);
    }
  };

  const removeFavouritePokemon = async (pokemonId: number) => {
    try {
      await removeFavouritePokemons(pokemonId);
      removePokemon(pokemonId);
    } catch (error) {
      console.warn(error);
    }
  };

  return {
    favourites,
    setFavouritePokemon,
    removeFavouritePokemon,
    isFavourite,
  };
};
