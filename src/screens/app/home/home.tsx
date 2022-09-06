import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {Layout} from '../../../components';
import { useAuth } from '../../../context';

const HomeScreen = () => {
  const {signout} = useAuth();
  return (
    <Layout>
      <View>
        <Text>Home Screen</Text>
        <Button onPress={() => signout()}>Logout</Button>
      </View>
    </Layout>
  );
};

export default HomeScreen;
