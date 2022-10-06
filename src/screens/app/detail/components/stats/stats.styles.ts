import {StyleSheet} from 'react-native';
import {styleConfig} from '../../../../../utils';

export const styles = StyleSheet.create({
  wrapper: {
    // marginBottom: styleConfig.spacing.xl,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 18,
    alignItems: 'center',
  },
  rowTitle: {
    fontWeight: '400',
    width: '40%',
    paddingRight: 24,
  },
  title: {},
  rowValue: {
    flex: 1,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: '400',
  },
  section: {
    marginBottom: styleConfig.spacing.l,
  },
});
