import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {Avatar, Layout} from '../../../components';
import {styles} from './profile.styles';
import {useAuth} from '../../../context';

const ProfileScreen = () => {
  const {user, signout} = useAuth();
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            {user ? <Avatar user={user} size={100} /> : null}
          </View>
          <View style={styles.name}>
            <Text category="p1">{user?.username}</Text>
          </View>
        </View>
        <View style={styles.logout}>
          <Button size="small" onPress={() => signout()}>
            Logout
          </Button>
        </View>
      </View>
    </Layout>
  );
};

export default ProfileScreen;
