import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';

import type {PokemonListType} from '../../interfaces';
import {styles} from './card.styles';
import {getPokeType, getStringIDfromID} from '../../helpers';
import CardSkeleton from './card-skeleton';
import {useNavigation} from '@react-navigation/native';
import type {AppRoutes} from '../../screens/app/types';
import type {StackNavigationProp} from '@react-navigation/stack';
import {usePokemonGradient} from '../../hooks';

type CardProps = {
  pokemon: PokemonListType;
  handleFavourite: (id: number) => void;
  favourite?: boolean;
};

const Card: React.FC<CardProps> = ({pokemon, handleFavourite, favourite}) => {
  const navigation = useNavigation<StackNavigationProp<AppRoutes>>();
  const {getGradient} = usePokemonGradient();

  const [isLoading, setLoading] = useState<boolean>(false);

  const onLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <View style={styles.cardWrapper}>
      {isLoading ? (
        <View style={styles.skeleton}>
          <CardSkeleton />
        </View>
      ) : null}
      <View style={styles.favourite}>
        <TouchableWithoutFeedback onPress={() => handleFavourite(pokemon.id)}>
          <Icon
            fill={favourite ? '#FF9C32' : '#1d2447'}
            name={favourite ? 'star' : 'star-outline'}
            style={styles.favouriteIcon}
          />
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Detail', {id: pokemon.id})}>
        <View>
          <View style={styles.container}>
            <LinearGradient
              style={styles.gradientBox}
              colors={getGradient(pokemon.types[0] as string)}>
              <Image
                style={styles.image}
                source={{uri: pokemon.sprite}}
                onLoadStart={() => onLoading(true)}
                onLoadEnd={() => onLoading(false)}
              />
            </LinearGradient>
            <View style={styles.nameWrapper}>
              <View>
                <Text category="p2" style={styles.name}>
                  #{getStringIDfromID(pokemon.id)}
                </Text>
              </View>
              <View>
                <Text category="h5" style={styles.name}>
                  {pokemon.name}
                </Text>
              </View>
            </View>
            <View style={styles.types}>
              {pokemon.types.map((item: string) => {
                const img = getPokeType(item);
                return (
                  <Image
                    key={item}
                    source={img as any}
                    style={styles.typeImage}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;
