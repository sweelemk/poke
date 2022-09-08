import React from 'react';
import {Text, useTheme} from '@ui-kitten/components';
import {View} from 'react-native';
import type {User} from '../../modules/api/types';
import {getInitials} from '../../helpers';
import {styles} from './avatar.styles';

type AvatarProps = {
  user: User;
  size: number;
};

const Avatar: React.FC<AvatarProps> = ({user, size = 32}) => {
  const theme = useTheme();
  return (
    <View>
      {user.picture ? (
        <Text>Avatar Image</Text>
      ) : (
        <View
          style={[
            {
              ...styles.contaner,
              width: size,
              height: size,
              borderRadius: size,
              backgroundColor: theme['color-primary-500'],
            },
          ]}>
          <Text style={[{fontSize: size / 3}, styles.name]} category="h6">
            {getInitials(user.username)}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Avatar;
