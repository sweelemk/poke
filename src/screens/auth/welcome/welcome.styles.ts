import {StyleSheet} from 'react-native';
import {styleConfig} from '../../../utils/style-config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: styleConfig.spacing.l,
    justifyContent: 'flex-end',
    paddingBottom: styleConfig.spacing.xxl,
    overflow: 'hidden',
  },
  box: {
    marginBottom: styleConfig.spacing.s,
  },
  poster: {
    width: '70%',
    height: '50%',
    // position: 'absolute',
  },
});
