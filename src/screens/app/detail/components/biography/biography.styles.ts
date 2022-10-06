import {StyleSheet} from 'react-native';
import {styleConfig} from './../../../../../utils/style-config';

export const styles = StyleSheet.create({
  description: {
    marginBottom: styleConfig.spacing.m,
  },
  general: {
    flexDirection: 'row',
    paddingVertical: styleConfig.spacing.m,
    alignItems: 'center',
    marginBottom: styleConfig.spacing.m,
  },
  generalItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  generalTitle: {
    height: 24,
    marginBottom: 4,
  },
  types: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  typeImage: {
    width: 24,
    height: 24,
    marginHorizontal: 2,
    marginVertical: 4,
  },
  divider: {
    width: 1,
    height: '100%',
    opacity: 0.5,
  },
  heading: {
    marginBottom: styleConfig.spacing.s,
  },
  section: {
    marginBottom: styleConfig.spacing.l,
  },
});
