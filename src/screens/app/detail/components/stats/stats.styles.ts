import {StyleSheet} from 'react-native';
import {styleConfig} from './../../../../../utils/style-config';

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: styleConfig.spacing.xl,
  },
  row: {
    paddingVertical: styleConfig.spacing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowTitle: {
    fontWeight: '400',
    width: '50%',
  },
  rowValue: {
    width: '50%',
  },
});
