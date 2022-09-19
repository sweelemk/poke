import {StyleSheet} from 'react-native';
import {styleConfig} from './../../../utils/style-config';

export const styles = StyleSheet.create({
  imageContainer: {
    top: 100,
    right: 0,
    left: 0,
    position: 'absolute',
  },
  gradientBox: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  image: {
    width: 260,
    height: 260,
  },
  content: {
    paddingHorizontal: styleConfig.spacing.l,
    paddingTop: styleConfig.spacing.xl,
    zIndex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: styleConfig.spacing.l,
  },
  types: {
    flexDirection: 'row',
  },
  typeImage: {
    width: 32,
    height: 32,
    marginHorizontal: 3,
  },
  row: {
    marginBottom: styleConfig.spacing.m,
  },
});
