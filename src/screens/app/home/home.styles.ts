import {styleConfig} from './../../../utils/style-config';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: styleConfig.spacing.l,
  },
  loader: {
    paddingTop: styleConfig.spacing.s,
    paddingBottom: styleConfig.spacing.m,
    alignItems: 'center',
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
