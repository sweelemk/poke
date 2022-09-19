import React from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import Case from 'case';
import type {PokemonSpeciesType} from './types';
import {getBiographyText} from '../../../../../helpers';

type BiographyProps = {
  spices: PokemonSpeciesType;
  pokeTypes: string[];
};

const Biography: React.FC<BiographyProps> = ({spices, pokeTypes}) => {
  const biography = getBiographyText(spices, pokeTypes);
  return (
    <View>
      <Text>{Case.sentence(biography)}</Text>
    </View>
  );
};

export default Biography;
