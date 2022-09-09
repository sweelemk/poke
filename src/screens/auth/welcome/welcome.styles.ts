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
    width: '100%',
    height: '85%',
    position: 'absolute',
  },
});
