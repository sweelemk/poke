import React, {useEffect, useState} from 'react';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {Layout} from '../../../components';
import {
  getFavouritePokemons,
  getPokemons,
} from '../../../modules/api/poke-service';
import type {PokemonListType} from '../../../interfaces';
import {Spinner} from '../../../components';
import type {AppRoutes, TabRoutes} from '../types';
import Pokemons from './components/pokemons';
import {useAppContext, useAuth} from '../../../context';

interface HomeProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabRoutes, 'Home'>,
    StackNavigationProp<AppRoutes, 'Search'>
  >;
}

type PokemonsType = {
  isEndOfList: boolean;
  data: PokemonListType[];
};

const initialPokemonState = {
  isEndOfList: false,
  data: [],
};

const limitPerPage = 8;

const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const {addAllPokemons} = useAppContext();
  const {user} = useAuth();
  const [pokemons, setPokemons] = useState<PokemonsType>(initialPokemonState);
  const [page, setPage] = useState<number>(0);

  const fetchPokemons = async () => {
    const offset = limitPerPage * page;

    try {
      const {pokePromise, next} = await getPokemons(offset, limitPerPage);
      const data = await pokePromise;

      const pokeData = {
        isEndOfList: !next,
        data: [...pokemons.data, ...data],
      } as PokemonsType;

      setPokemons(pokeData);
    } catch (error) {
      console.warn(error);
    }
  };
  const fetchFavourites = async () => {
    try {
      const {data} = await getFavouritePokemons(user?.id as string);
      addAllPokemons(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchFavourites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchMorePokemons = () => {
    if (pokemons.isEndOfList) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <Layout>
      <TopNavigation
        title="Pokémon"
        alignment="center"
        accessoryRight={() => (
          <TopNavigationAction
            icon={<Icon name="search-outline" />}
            onPress={() => navigation.navigate('Search')}
          />
        )}
      />
      {pokemons.data.length > 0 ? (
        <Pokemons
          pokemons={pokemons.data}
          fetchMorePokemons={fetchMorePokemons}
        />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default HomeScreen;
