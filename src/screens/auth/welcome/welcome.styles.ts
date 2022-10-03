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
    width: 225,
    height: 426,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -115,
    marginTop: -260,
  },
});
