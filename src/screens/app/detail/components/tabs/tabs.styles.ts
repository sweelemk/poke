import {StyleSheet} from 'react-native';
import {styleConfig} from './../../../../../utils/style-config';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: styleConfig.spacing.l,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: styleConfig.spacing.l,
  },
  tabItem: {
    // paddingHorizontal: styleConfig.spacing.l,
  },
  tabItemText: {
    fontWeight: '400',
  },
  tabs: {
    paddingHorizontal: styleConfig.spacing.l,
  },
});
