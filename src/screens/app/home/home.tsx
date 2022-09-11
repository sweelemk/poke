import React, {useEffect, useState} from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {Card, Layout} from '../../../components';
import {getPokemons} from '../../../modules/api/poke-service';
import type {PokemonListType} from '../../../interfaces';
import {FlatList, View} from 'react-native';
import {Spinner} from '../../../components';
import {styles} from './home.styles';

type PokemonsType = {
  isEndOfList: boolean;
  data: PokemonListType[];
};

const initialPokemonState = {
  isEndOfList: false,
  data: [],
};

const limitPerPage = 8;

const HomeScreen: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsType>(initialPokemonState);
  const [isLoading, setLoading] = useState<boolean>(false);
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
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

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
        title="Pokemons"
        alignment="center"
        accessoryRight={() => (
          <TopNavigationAction icon={<Icon name="search-outline" />} />
        )}
      />
      {pokemons ? (
        <FlatList
          data={pokemons?.data}
          renderItem={poke => {
            return <Card key={poke.item.name} pokemon={poke.item} />;
          }}
          keyExtractor={item => String(item.name)}
          contentContainerStyle={styles.container}
          onEndReachedThreshold={1}
          onEndReached={fetchMorePokemons}
        />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default HomeScreen;
