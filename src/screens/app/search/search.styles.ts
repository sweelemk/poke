import {styleConfig} from './../../../utils/style-config';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginBottom: styleConfig.spacing.m,
    paddingHorizontal: styleConfig.spacing.l,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
  },
  resultList: {
    paddingHorizontal: styleConfig.spacing.l,
  },
  emptyResults: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
