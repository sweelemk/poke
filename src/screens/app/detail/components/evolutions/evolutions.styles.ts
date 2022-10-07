import {StyleSheet} from 'react-native';

const IMAGE_CONTAINER_SIZE = 128;

export const styles = StyleSheet.create({
  headerTitle: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rowItem: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: IMAGE_CONTAINER_SIZE,
    height: IMAGE_CONTAINER_SIZE,
    borderRadius: IMAGE_CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#edf1f7',
    marginBottom: 4,
  },
  image: {
    width: IMAGE_CONTAINER_SIZE / 1.4,
    height: IMAGE_CONTAINER_SIZE / 1.4,
  },
  name: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 13,
  },
  level: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
