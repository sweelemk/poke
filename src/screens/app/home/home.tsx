import React, {useEffect, useState} from 'react';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  Text,
} from '@ui-kitten/components';
import {Card, Layout} from '../../../components';
import {getPokemons} from '../../../modules/api/poke-service';
import type {PokemonListType} from '../../../interfaces';
import {FlatList, View} from 'react-native';
import {Spinner} from '../../../components';
import type {AppRoutes, TabRoutes} from '../types';
import {styles} from './home.styles';

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
    } catch (e) {
      console.warn(e);
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

  const emptyResult = () => {
    return (
      <View style={styles.empty}>
        <Text>There are no Pokémon on the list.</Text>
      </View>
    );
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
          ListEmptyComponent={emptyResult}
        />
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default HomeScreen;
