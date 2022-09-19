import React from 'react';
import {
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {Icon, Layout, Text, useTheme} from '@ui-kitten/components';
import {styles} from './header.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {usePokemons} from '../../../../../hooks';
import {useHeaderAnimation} from './hooks/useHeaderAnimation';

type HeaderProps = {
  title?: string;
  id: number;
  scrollOffset: Animated.SharedValue<number>;
};

const Header: React.FC<HeaderProps> = ({title, id, scrollOffset}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const IMAGE_HEIGHT = height / 1.7;
  const {isFavourite, removeFavouritePokemon, setFavouritePokemon} =
    usePokemons();
  const {animatedOpacity, animatedBGOpacity, animationTranslateY} =
    useHeaderAnimation(scrollOffset, IMAGE_HEIGHT);
  const favourite = isFavourite(id);

  const handleFavourite = () => {
    if (favourite) {
      removeFavouritePokemon(id);
    } else {
      setFavouritePokemon(id);
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Animated.View style={[styles.background, animatedBGOpacity]}>
        <Layout style={styles.layout} />
      </Animated.View>
      <View style={styles.navigator}>
        <View style={styles.accessorLeft}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View>
              <Icon
                name="arrow-back"
                style={styles.icon}
                fill={theme['background-alternative-color-1']}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View
          style={[styles.title, animatedOpacity, animationTranslateY]}>
          <Text style={styles.titleText}>{title}</Text>
        </Animated.View>
        <View style={styles.accessorRight}>
          <View style={styles.accessorRightIcon}>
            <TouchableWithoutFeedback onPress={handleFavourite}>
              <Icon
                fill={
                  favourite
                    ? '#FF9C32'
                    : theme['background-alternative-color-1']
                }
                name={favourite ? 'star' : 'star-outline'}
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.accessorRightIcon}>
            <Icon
              name="share"
              style={[
                styles.icon,
                styles.iconShare,
                {
                  color: theme['background-alternative-color-1'],
                },
              ]}
              pack="octicons"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
