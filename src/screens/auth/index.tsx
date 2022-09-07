import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {AuthenticationRoutes} from './types';
import {SignInScreen} from './signin';
import {SignUnScreen} from './signup';
import {WelcomeScreen} from './welcome';

const AuthanticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthanticationNavigator = () => {
  return (
    <AuthanticationStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <AuthanticationStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthanticationStack.Screen name="SignIn" component={SignInScreen} />
      <AuthanticationStack.Screen name="SignUp" component={SignUnScreen} />
    </AuthanticationStack.Navigator>
  );
};

export default AuthanticationNavigator;
