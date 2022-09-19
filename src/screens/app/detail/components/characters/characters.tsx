import React from 'react';
import {View} from 'react-native';
import {Divider, Text} from '@ui-kitten/components';
import type {PokemonSpeciesType} from '../biography/types';
import type {PokemonDetail} from '../../../../../interfaces';
import {styles} from './characters.styles';

type CharactersProps = {
  spices: PokemonSpeciesType;
  pokemon: PokemonDetail;
};

const Characters: React.FC<CharactersProps> = ({spices, pokemon}) => {
  const characters = [
    {
      title: 'Genus',
      value: (
        <View>
          <Text>
            {
              spices.genera.filter(entry => entry.language.name === 'en')[0]
                ?.genus
            }
          </Text>
        </View>
      ),
    },
    {
      title: 'Height',
      value: (
        <View>
          <Text>
            {`${pokemon.height / 10}m (${Math.floor(
              ((pokemon.height / 10) * 39.37) / 12,
            )}'' ${(((pokemon.height / 10) * 39.37) % 12).toFixed(1)}')`}
          </Text>
        </View>
      ),
    },
    {
      title: 'Weight',
      value: (
        <View>
          <Text>{`${pokemon.weight / 10}kg (${(
            (pokemon.weight / 10) *
            2.2
          ).toFixed(1)} lbs)`}</Text>
        </View>
      ),
    },
    {
      title: 'Abilities',
      value: (
        <View>
          {pokemon.abilities.map(item => (
            <View>
              <Text key={item.ability.name}>
                {`${item.ability.name
                  .split('-')
                  .map(
                    txt =>
                      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
                  )
                  .join(' ')}`}{' '}
                {`${item.is_hidden ? '(Hidden ability)' : ''}`}
              </Text>
            </View>
          ))}
        </View>
      ),
    },
    {
      title: 'Base expirience',
      value: (
        <View>
          <Text>{pokemon.base_experience}</Text>
        </View>
      ),
    },
    {
      title: 'Base happiness',
      value: (
        <View>
          <Text>{spices.base_happiness}</Text>
        </View>
      ),
    },
    {
      title: 'Catch rate',
      value: (
        <View>
          <Text>{`${spices.capture_rate} (${(
            (spices.capture_rate / 255) *
            100
          ).toFixed(1)}%)`}</Text>
        </View>
      ),
    },
    {
      title: 'Growth rate',
      value: (
        <View>
          <Text>{spices.growth_rate.name}</Text>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.wrapper}>
      <Text category="h6">Characters</Text>
      {characters.map((ch, idx) => (
        <>
          <View style={styles.row}>
            <Text style={styles.rowTitle}>{ch.title}</Text>
            <View style={styles.rowValue}>{ch.value}</View>
          </View>
          {characters.length - 1 !== idx ? <Divider /> : null}
        </>
      ))}
    </View>
  );
};

export default Characters;
