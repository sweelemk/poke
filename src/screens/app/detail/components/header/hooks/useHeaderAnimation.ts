import Animated, {
  interpolate,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const useHeaderAnimation = (
  scrollOffset: Animated.SharedValue<number>,
  areaHeight: number,
) => {
  const animatedOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [areaHeight - 150, areaHeight - 120],
      [0, 1],
      {extrapolateRight: Extrapolation.CLAMP},
    );

    return {
      opacity,
    };
  });

  const animatedBGOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [areaHeight - 200, areaHeight - 120],
      [0, 1],
      {extrapolateRight: Extrapolation.CLAMP},
    );

    return {
      opacity,
    };
  });

  const animationTranslateY = useAnimatedStyle(() => {
    const translate = interpolate(
      scrollOffset.value,
      [areaHeight - 150, areaHeight - 120],
      [-10, 0],
      {extrapolateRight: Extrapolation.CLAMP},
    );

    return {
      transform: [{translateY: translate}],
    };
  });

  return {
    animatedOpacity,
    animatedBGOpacity,
    animationTranslateY,
  };
};
