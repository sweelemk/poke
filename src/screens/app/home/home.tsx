import React, {useEffect, useState} from 'react';
import {Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {Card, Layout} from '../../../components';
import {getPokemons} from '../../../modules/api/poke-service';
import type {PokemonListType} from '../../../interfaces';
import {FlatList, View} from 'react-native';
import {Spinner} from '../../../components';
import {styles} from './home.styles';
import {getPageOffset} from '../../../helpers';

type PokemonsType = {
  next: string;
  data: PokemonListType[];
};

const initialPokemonState = {
  next: '',
  data: [],
};

const HomeScreen: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonsType>(initialPokemonState);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchPokemons = async (offset = 0) => {
    setLoading(true);
    try {
      const {pokePromise, next} = await getPokemons(offset);
      const data = await pokePromise;

      const pokeData = {
        next: next,
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
  }, []);

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <Spinner />
      </View>
    ) : null;
  };

  const fetchMorePokemons = () => {
    if (!pokemons?.next) {
      return;
    }

    const offset = getPageOffset(pokemons.next);
    fetchPokemons(offset);
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
            return <Card key={poke.item.id} pokemon={poke.item} />;
          }}
          keyExtractor={item => item.name}
          contentContainerStyle={styles.container}
          ListFooterComponent={renderLoader}
          onEndReachedThreshold={0}
          onEndReached={fetchMorePokemons}
        />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default HomeScreen;
