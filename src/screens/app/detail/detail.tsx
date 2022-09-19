import React, {useEffect, useState} from 'react';
import {View, useWindowDimensions, Image, StyleSheet} from 'react-native';
import {Text, useTheme} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  Extrapolation,
  interpolate,
} from 'react-native-reanimated';
import type {AppRoutes, StackNavigationAppProps} from '../types';
import {Layout} from '../../../components';
import {styles} from './detail.styles';
import {usePokemonGradient} from '../../../hooks';
import {Biography, Characters, Header, Skeleton, Stats} from './components';
import {getPokeType} from '../../../helpers';
import {
  getPokemonById,
  getPokemonSpeciesData,
} from '../../../modules/api/poke-service';
import type {PokemonSpeciesType} from './components/biography/types';
import type {PokemonDetail} from '../../../interfaces';

const DetailScreen: React.FC<StackNavigationAppProps<AppRoutes, 'Detail'>> = ({
  route,
}) => {
  const {id} = route.params;
  const theme = useTheme();
  const {height} = useWindowDimensions();
  const IMAGE_HEIGHT = height / 1.7;
  const {getGradient} = usePokemonGradient();
  const [spices, setSpices] = useState<PokemonSpeciesType>();
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [loading, setLoading] = useState<boolean>(false);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [-100, 0], [1.35, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    return {
      transform: [{scale: scale}, {translateY: -scale * 100}],
    };
  });

  const getPokemonDetail = async () => {
    try {
      const pokeSpices = await getPokemonSpeciesData(id);
      const poke = await getPokemonById(id);

      setSpices(pokeSpices.data);
      setPokemon(poke);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout full>
      {!loading && pokemon && spices ? (
        <>
          <Header title={pokemon.name} id={pokemon.id} scrollOffset={scrollY} />
          <Animated.ScrollView
            scrollEventThrottle={1}
            onScroll={scrollHandler}
            style={StyleSheet.absoluteFill}
            showsVerticalScrollIndicator={false}>
            <View style={[{height: IMAGE_HEIGHT}, styles.imageContainer]}>
              <Animated.View style={animatedStyles}>
                <LinearGradient
                  style={styles.gradientBox}
                  colors={getGradient(pokemon.types[0] as string)}>
                  <Image style={styles.image} source={{uri: pokemon.sprite}} />
                </LinearGradient>
              </Animated.View>
            </View>
            <View
              style={[
                {
                  marginTop: IMAGE_HEIGHT,
                  backgroundColor: theme['background-basic-color-1'],
                },
                styles.content,
              ]}>
              <View style={styles.head}>
                <View>
                  <Text category="h3">{pokemon.name}</Text>
                </View>
                <View style={styles.types}>
                  {pokemon.types.map((item: string) => {
                    const img = getPokeType(item);
                    return (
                      <Image source={img as any} style={styles.typeImage} />
                    );
                  })}
                </View>
              </View>
              <View style={styles.row}>
                <Biography
                  spices={spices as PokemonSpeciesType}
                  pokeTypes={pokemon.types}
                />
              </View>
              <View>
                <Characters spices={spices} pokemon={pokemon} />
              </View>

              <View>
                <Stats stats={pokemon.stats} />
              </View>
            </View>
          </Animated.ScrollView>
        </>
      ) : (
        <View>
          <Skeleton height={IMAGE_HEIGHT} />
        </View>
      )}
    </Layout>
  );
};

export default DetailScreen;
