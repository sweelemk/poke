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
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  name: {
    // color: '#ffffff',
  },
  content: {
    zIndex: 1,
    // borderTopRightRadius: styleConfig.spacing.l,
    // borderTopLeftRadius: styleConfig.spacing.l,
    // top: -styleConfig.spacing.l,
    marginBottom: styleConfig.spacing.xl,
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
