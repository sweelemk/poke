import {StyleSheet} from 'react-native';

const SIDE_WIDTH = 80;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    opacity: 0,
  },
  layout: {
    width: '100%',
    height: '100%',
  },
  navigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,

    height: 56,
  },
  title: {
    // opacity: 0,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '400',
  },
  accessorRight: {
    width: SIDE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  accessorRightIcon: {
    marginLeft: 16,
  },
  accessorLeft: {
    width: SIDE_WIDTH,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconShare: {
    width: 22,
    height: 22,
  },
  navigation: {
    // backgroundColor: 'transparent',
    // color: 'red',
  },
});
