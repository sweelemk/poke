import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    paddingRight: 18,
  },
  progressContainer: {
    position: 'relative',
    flex: 1,
  },
  bar: {
    height: 8,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  progress: {
    height: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    borderRadius: 8,
    backgroundColor: '#091A7A',
  },
  max: {
    paddingLeft: 18,
  },
  bold: {
    fontWeight: '400',
  },
});
