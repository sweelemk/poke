import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import {styles} from './tabs.styles';
import {FlatList} from 'react-native-gesture-handler';
import type {
  PokemonDetail,
  PokemonSpeciesType,
} from '../../../../../interfaces';
import {Biography} from '../biography';
import {Characters} from '../characters';
import {Stats} from '../stats';
import {getPokeColor} from '../../../../../helpers';

type TabsProps = {
  spices: PokemonSpeciesType;
  pokemon: PokemonDetail;
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

const Tabs: React.FC<TabsProps> = ({pokemon, spices}) => {
  const ref = React.useRef<FlatList>(null);
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const TabComponent: TabComponent = {
    0: <Biography spices={spices as PokemonSpeciesType} pokemon={pokemon} />,
    1: <Stats stats={pokemon.stats} />,
  };

  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: true,
      viewOffset: 10,
      viewPosition: 0.2,
    });
  }, [index]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {tabs.map((tab, fIndex) => (
            <TouchableOpacity
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
                          ? getPokeColor(pokemon.types[0] as string)
                          : theme['background-alternative-color-1'],
                    },
                  ]}>
                  {tab.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* <FlatList
          ref={ref}
          initialScrollIndex={index}
          data={tabs}
          keyExtractor={item => String(item.id)}
          initialNumToRender={tabs.length}
          renderItem={({item, index: fIndex}) => {
            return (
              <TouchableOpacity
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
                            ? getPokeColor(pokemon.types[0] as string)
                            : theme['background-alternative-color-1'],
                      },
                    ]}>
                    {item.value}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
      <View style={styles.tabs}>{TabComponent[index]}</View>
    </>
  );
};

export default Tabs;
