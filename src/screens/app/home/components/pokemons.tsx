import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {styles} from '../home.styles';
import {Card} from '../../../../components';
import type {PokemonListType} from '../../../../interfaces';
import usePokemons from '../../../../hooks/usePokemons';

type PokemonsType = {
  pokemons: PokemonListType[];
  fetchMorePokemons: () => void;
};

const Pokemons: React.FC<PokemonsType> = ({pokemons, fetchMorePokemons}) => {
  const {setFavouritePokemon, removeFavouritePokemon, isFavourite} =
    usePokemons();
  const emptyResult = () => {
    return (
      <View style={styles.empty}>
        <Text>There are no Pokémon on the list.</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={pokemons}
      renderItem={poke => {
        const favourite = isFavourite(poke.item.id);
        return (
          <Card
            key={poke.item.name}
            pokemon={poke.item}
            handleFavourite={
              favourite ? removeFavouritePokemon : setFavouritePokemon
            }
            favourite={favourite}
          />
        );
      }}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={styles.container}
      onEndReachedThreshold={1}
      onEndReached={fetchMorePokemons}
      ListEmptyComponent={emptyResult}
    />
  );
};

export default Pokemons;
