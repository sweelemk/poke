import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';

import type {PokemonListType} from '../../interfaces';
import {styles} from './card.styles';
import {convertHexToRGBA, getPokeColor, getPokeType} from '../../helpers';
import CardSkeleton from './card-skeleton';

type CardProps = {
  pokemon: PokemonListType;
  handleFavourite: (id: number) => void;
  favourite?: boolean;
};

const Card: React.FC<CardProps> = ({pokemon, handleFavourite, favourite}) => {
  const hexColor = getPokeColor(pokemon.types[0] as string);
  const rgbaColor = convertHexToRGBA(hexColor, 0.4);

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
      <View style={styles.container}>
        <View style={styles.favourite}>
          <TouchableWithoutFeedback onPress={() => handleFavourite(pokemon.id)}>
            <Icon
              fill={favourite ? '#FF9C32' : '#1d2447'}
              name={favourite ? 'star' : 'star-outline'}
              style={styles.favouriteIcon}
            />
          </TouchableWithoutFeedback>
        </View>
        <LinearGradient
          style={styles.gradientBox}
          colors={[rgbaColor, hexColor]}>
          <Image
            style={styles.image}
            source={{uri: pokemon.sprite}}
            onLoadStart={() => onLoading(true)}
            onLoadEnd={() => onLoading(false)}
          />
        </LinearGradient>
        <View style={styles.types}>
          <View style={styles.typesContainer}>
            <View style={styles.type}>
              {pokemon.types.map((item: string) => {
                const img = getPokeType(item);
                return <Image source={img as any} style={styles.typeImage} />;
              })}
            </View>
          </View>
        </View>
        <View style={styles.name}>
          <Text category="h5">{pokemon.name}</Text>
        </View>
      </View>
      <View style={styles.shadow} />
    </View>
  );
};

export default Card;
