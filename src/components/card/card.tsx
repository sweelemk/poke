import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Icon, Layout, Text} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';

import type {PokemonListType} from '../../interfaces';
import {styles} from './card.styles';
import {getPokeType} from '../../helpers';
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
          <Layout level="2" style={styles.container}>
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
            <View style={styles.types}>
              <View style={styles.typesContainer}>
                <Layout level="2" style={styles.type}>
                  {pokemon.types.map((item: string) => {
                    const img = getPokeType(item);
                    return (
                      <Image source={img as any} style={styles.typeImage} />
                    );
                  })}
                </Layout>
              </View>
            </View>
            <View style={styles.name}>
              <Text category="h5">{pokemon.name}</Text>
            </View>
          </Layout>
          <View style={styles.shadow} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Card;
