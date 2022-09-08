import {StyleSheet} from 'react-native';
import {styleConfig} from './../../../utils/style-config';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: styleConfig.spacing.default,
    paddingTop: styleConfig.spacing.xl,
  },
  avatarContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: styleConfig.spacing.default,
  },
  name: {},
  logout: {
    alignItems: 'center',
    marginTop: styleConfig.spacing.xl,
  },
});
