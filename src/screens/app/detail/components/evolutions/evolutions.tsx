import React from 'react';
import {View, Image} from 'react-native';
import {Icon, Text, useTheme} from '@ui-kitten/components';
import type {
  ChainPair,
  MegaChainPair,
  Varieties,
} from '../../../../../interfaces';
import {styles} from './evolutions.styles';
import {
  getPokemonImage,
  getIdFromUrl,
  getPairs,
  getMegaEvolutionImage,
} from '../../../../../helpers';
import Case from 'case';

type EvolutionsProps = {
  id: number;
  evolutionChain: ChainPair[];
  varieties: Varieties[];
};

const Evolutions: React.FC<EvolutionsProps> = ({
  id,
  evolutionChain,
  varieties,
}) => {
  const theme = useTheme();
  const isMegaEvolution = varieties.find(item => !item.is_default);
  const mageEvolution: MegaChainPair[][] = isMegaEvolution
    ? getPairs(varieties)
    : null;
  console.log(mageEvolution);

  return (
    <View>
      <View style={styles.headerTitle}>
        <Text category="h6">Evolition Chain</Text>
      </View>
      {evolutionChain.map((evolutionRow, _idx) => (
        <View key={_idx} style={styles.row}>
          {evolutionRow.map((evolutionItem, _index: number) => {
            const urlId = +getIdFromUrl(evolutionItem.url);
            console.log(urlId);
            return (
              <React.Fragment key={evolutionItem.name}>
                <View style={styles.rowItem}>
                  <View
                    style={[
                      styles.imageContainer,
                      {
                        backgroundColor: theme['background-basic-color-2'],
                      },
                    ]}>
                    <Image
                      style={styles.image}
                      source={{
                        uri: getPokemonImage(urlId),
                      }}
                    />
                  </View>
                  <Text style={styles.name}>
                    {Case.sentence(evolutionItem.name)}
                  </Text>
                </View>
                {_index === 0 ? (
                  <View style={styles.level}>
                    <Icon
                      name="arrow-forward-outline"
                      style={styles.icon}
                      fill={theme['background-basic-color-4']}
                    />
                    {evolutionItem.min_level ? (
                      <Text category="c2">{`Lvl ${evolutionItem.min_level}`}</Text>
                    ) : null}
                  </View>
                ) : null}
              </React.Fragment>
            );
          })}
        </View>
      ))}
      {mageEvolution ? (
        <>
          <View style={styles.headerTitle}>
            <Text category="h6">Mega Evolution</Text>
          </View>
          {mageEvolution.map((evolutionRow, _idx) => (
            <View key={_idx} style={styles.row}>
              {evolutionRow.map((evolutionItem, _index: number) => (
                <React.Fragment key={evolutionItem.pokemon.name}>
                  <View style={styles.rowItem}>
                    <View
                      style={[
                        styles.imageContainer,
                        {
                          backgroundColor: theme['background-basic-color-2'],
                        },
                      ]}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: getMegaEvolutionImage(evolutionItem, id),
                        }}
                      />
                    </View>
                    <Text style={styles.name}>
                      {Case.capital(evolutionItem.pokemon.name)}
                    </Text>
                  </View>
                  {_index === 0 ? (
                    <View style={styles.level}>
                      <Icon
                        name="arrow-forward-outline"
                        style={styles.icon}
                        fill={theme['background-basic-color-4']}
                      />
                    </View>
                  ) : null}
                </React.Fragment>
              ))}
            </View>
          ))}
        </>
      ) : null}
    </View>
  );
};

export default Evolutions;
