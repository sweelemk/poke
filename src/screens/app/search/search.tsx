import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {
  getAllPokemons,
  searchPokemons,
} from '../../../modules/api/poke-service';
import type {NameURLInterface, PokemonListType} from '../../../interfaces';
import {Card, Layout, Spinner, TopNavigator} from '../../../components';
import {styles} from './search.styles';
import {Formik} from 'formik';
import {Input, Text} from '@ui-kitten/components';
import {FlatList} from 'react-native-gesture-handler';

type searchState = {
  search: string;
};

type searchResultState = {
  isEmpty: boolean;
  searchData: PokemonListType[];
};

const searchDefaultState: searchResultState = {
  isEmpty: false,
  searchData: [],
};

const searchInitialValues: searchState = {
  search: '',
};

const SearhScreen: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<NameURLInterface[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] =
    useState<searchResultState>(searchDefaultState);

  const getAll = async () => {
    try {
      const pokemons = await getAllPokemons();
      setAllPokemons(pokemons);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleSearch = async (e: searchState) => {
    console.log(e);
    if (!e.search) {
      setSearchResult(searchDefaultState);
      return;
    }

    const search = allPokemons.filter(pokemon =>
      pokemon.name.includes(e.search),
    );

    setLoading(true);

    try {
      const data = await searchPokemons(search);
      const state = {
        isEmpty: !data.length,
        searchData: data,
      };

      setSearchResult(state);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  const emptyComponent = () => {
    return searchResult.isEmpty ? (
      <View style={styles.emptyResults}>
        <Text>No pokemon found.</Text>
      </View>
    ) : null;
  };

  return (
    <Layout>
      <View style={styles.container}>
        <TopNavigator title="Search" alignment="center" />
        <View style={styles.searchContainer}>
          <Formik initialValues={searchInitialValues} onSubmit={handleSearch}>
            {({handleSubmit, handleChange}) => {
              return (
                <View>
                  <Input
                    placeholder="Type pokemon name"
                    onChangeText={handleChange('search')}
                    autoComplete="email"
                    autoCapitalize="none"
                    onSubmitEditing={e => handleSubmit(e as any)}
                  />
                </View>
              );
            }}
          </Formik>
        </View>
        <View style={styles.resultContainer}>
          {isLoading ? (
            <Spinner />
          ) : (
            <FlatList
              data={searchResult.searchData}
              renderItem={poke => {
                return <Card key={poke.item.name} pokemon={poke.item} />;
              }}
              keyExtractor={item => String(item.name)}
              contentContainerStyle={styles.resultList}
              ListEmptyComponent={emptyComponent}
            />
          )}
        </View>
      </View>
    </Layout>
  );
};

export default SearhScreen;
