import React from 'react';
import {View, Image} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import Case from 'case';
import {
  calculateCatchRate,
  getBiographyText,
  getGender,
  getPokeType,
  uniq,
} from '../../../../../helpers';
import {styles} from './biography.styles';
import type {
  PokemonDetail,
  PokemonSpeciesType,
} from '../../../../../interfaces';
import {Row} from '../row';
import {Gender} from '../../../../../components';

type BiographyProps = {
  spices: PokemonSpeciesType;
  pokemon: PokemonDetail;
};

const Biography: React.FC<BiographyProps> = ({spices, pokemon}) => {
  const theme = useTheme();
  const biography = getBiographyText(spices, pokemon.types);
  const gender = getGender(spices.gender_rate);
  const getType = (types: string[]) =>
    types.map((item: string) => {
      const img = getPokeType(item);
      return <Image key={item} source={img as any} style={styles.typeImage} />;
    });
  const getAbibity = () =>
    pokemon.abilities
      .map(item =>
        item.ability.name
          .split('-')
          .map(txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
          .join(' '),
      )
      .join(', ');

  console.log('getAbibity', getAbibity());

  const getEggGroup = () =>
    Case.capital(spices.egg_groups.map(egg => egg.name).join(', '), ', ');
  const getEVYeld = () => {
    const yeldItems = pokemon.stats.filter(stat => stat.effort !== 0);
    return yeldItems.map(item => (
      <View key={item.stat.name}>
        <Text>{`${item.effort} ${Case.capital(item.stat.name)}`}</Text>
      </View>
    ));
  };

  const getCatchRate = () => {
    const capRate = spices.capture_rate;
    return <Text>{`${capRate} (${calculateCatchRate(capRate)})`}</Text>;
  };

  return (
    <View>
      <View style={styles.description}>
        <Text>{Case.sentence(biography)}</Text>
      </View>
      <View style={styles.general}>
        <View style={styles.generalItem}>
          <Text category="h6" style={styles.generalTitle}>{`${
            pokemon.weight / 10
          } kg`}</Text>
          <Text category="c1">Weight</Text>
        </View>
        <View
          style={[
            styles.divider,
            {backgroundColor: theme['background-alternative-color-1']},
          ]}
        />
        <View style={styles.generalItem}>
          <View style={styles.types}>{getType(pokemon.types)}</View>
          <Text category="c1">Type</Text>
        </View>
        <View
          style={[
            styles.divider,
            {backgroundColor: theme['background-alternative-color-1']},
          ]}
        />
        <View style={styles.generalItem}>
          <Text category="h6" style={styles.generalTitle}>{`${
            pokemon.height / 10
          } m`}</Text>
          <Text category="c1">Height</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Row
          label="Species:"
          value={
            <Text>
              {
                spices.genera.filter(entry => entry.language.name === 'en')[0]
                  ?.genus as string
              }
            </Text>
          }
        />
        <Row label="Abilities:" value={<Text>{getAbibity()}</Text>} />
        <Row
          label="Strengs:"
          value={
            <View style={styles.types}>
              {pokemon.damage_relations.strength.length ? (
                getType(uniq(pokemon.damage_relations.strength))
              ) : (
                <Text>-</Text>
              )}
            </View>
          }
        />
        <Row
          label="Weakness:"
          value={
            <View style={styles.types}>
              {pokemon.damage_relations.weakness.length ? (
                getType(uniq(pokemon.damage_relations.weakness))
              ) : (
                <Text>-</Text>
              )}
            </View>
          }
        />
      </View>
      <View style={styles.section}>
        <View style={styles.heading}>
          <Text category="h6">Breeding</Text>
        </View>
        <Row label="Gender:" value={gender ? <Gender gender={gender} /> : ''} />
        <Row label="Egg Group:" value={<Text>{getEggGroup()}</Text>} />
        <Row
          label="Egg Cycle:"
          value={
            <Text>{`${spices.hatch_counter} (${
              255 * (spices.hatch_counter + 1)
            } steps)`}</Text>
          }
        />
      </View>
      <View>
        <View style={styles.heading}>
          <Text category="h6">Training</Text>
        </View>
        <Row label="EV Yeld:" value={getEVYeld()} />
        <Row label="Catch Rate:" value={getCatchRate()} />
        <Row
          label="Base Friendship:"
          value={<Text>{spices.base_happiness}</Text>}
        />
        <Row label="Base Exp:" value={<Text>{pokemon.base_experience}</Text>} />
        <Row
          label="Growth Rate:"
          value={<Text>{Case.capital(spices.growth_rate.name)}</Text>}
        />
      </View>
    </View>
  );
};

export default Biography;
