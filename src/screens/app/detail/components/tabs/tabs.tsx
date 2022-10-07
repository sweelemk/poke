import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import {styles} from './tabs.styles';
import type {
  ChainPair,
  PokemonDetail,
  PokemonSpeciesType,
} from '../../../../../interfaces';
import {Biography} from '../biography';
import {Stats} from '../stats';
import {getPokeColor} from '../../../../../helpers';
import {Evolutions} from '../evolutions';

type TabsProps = {
  spices: PokemonSpeciesType;
  pokemon: PokemonDetail;
  evolutionChain: ChainPair[];
};

const tabs = [
  {
    id: 0,
    value: 'About',
  },
  {
    id: 1,
    value: 'Base stats',
  },
  {
    id: 2,
    value: 'Evolutions',
  },
  {
    id: 3,
    value: 'Moves',
  },
];

type TabComponent = {
  [key: number]: React.ReactNode;
};

const Tabs: React.FC<TabsProps> = ({pokemon, spices, evolutionChain}) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const pokeColor = getPokeColor(pokemon.types[0] as string);

  const TabComponent: TabComponent = {
    0: <Biography spices={spices as PokemonSpeciesType} pokemon={pokemon} />,
    1: <Stats id={pokemon.id} stats={pokemon.stats} color={pokeColor} />,
    2: (
      <Evolutions
        id={pokemon.id}
        evolutionChain={evolutionChain}
        varieties={spices.varieties}
      />
    ),
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {tabs.map((tab, fIndex) => (
            <TouchableOpacity
              key={tab.id}
              onPress={() => {
                setIndex(fIndex);
              }}>
              <View style={styles.tabItem}>
                <Text
                  category="p1"
                  style={[
                    styles.tabItemText,
                    {
                      color:
                        index === fIndex
                          ? pokeColor
                          : theme['background-alternative-color-1'],
                    },
                  ]}>
                  {tab.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.tabs}>{TabComponent[index]}</View>
    </>
  );
};

export default Tabs;
