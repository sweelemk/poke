import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {AuthenticationRoutes} from './types';
import {SignIn} from './signin';
import {SignUp} from './signup';
import {Welcome} from './welcome';

const AuthanticationStack = createStackNavigator<AuthenticationRoutes>();

const AuthanticationNavigator = () => {
  return (
    <AuthanticationStack.Navigator initialRouteName="Welcome">
      <AuthanticationStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthanticationStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <AuthanticationStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </AuthanticationStack.Navigator>
  );
};

export default AuthanticationNavigator;
