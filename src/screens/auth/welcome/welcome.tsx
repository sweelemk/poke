import React from 'react';
import {View, Image} from 'react-native';
import {Button} from '@ui-kitten/components';
import {Layout} from '../../../components';
import type {StackNavigationProps, AuthenticationRoutes} from '../types';
const posterPath = require('../../../../assets/images/poke.png');
import {styles} from './welcome.styles';

const WelcomeScreen: React.FC<
  StackNavigationProps<AuthenticationRoutes, 'Welcome'>
> = ({navigation}) => {
  return (
    <Layout>
      <Image style={styles.poster} source={posterPath} />
      <View style={styles.container}>
        <View style={styles.box}>
          <Button onPress={() => navigation.navigate('SignIn')}>Sign in</Button>
        </View>
        <View>
          <Button
            appearance="outline"
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Button>
        </View>
      </View>
    </Layout>
  );
};

export default WelcomeScreen;
