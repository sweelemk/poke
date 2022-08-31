import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';
import {Layout, TopNavigator} from '../../../components';
import {styleConfig} from '../../../utils';
import type {AuthenticationRoutes, StackNavigationProps} from '../types';

const SignIn: React.FC<
  StackNavigationProps<AuthenticationRoutes, 'SignIn'>
> = ({navigation}) => {
  return (
    <Layout>
      <TopNavigator navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text category="h4">Welcome</Text>
          <Text category="h4">back,</Text>
          <Text category="p1">Let's get started</Text>
        </View>
        <View style={styles.box}>
          <Input placeholder="Email" returnKeyType="next" />
        </View>
        <View style={styles.box}>
          <Input placeholder="Password" />
        </View>
        <View style={styles.box}>
          <Button>Sign in</Button>
        </View>
        <View
          style={{
            ...styles.box,
            ...{justifyContent: 'space-between', flexDirection: 'row'},
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text category="c1">Register as a new user</Text>
          </TouchableOpacity>
          <Text category="c1">Forgot your password?</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: styleConfig.spacing.s,
    paddingHorizontal: 16,
  },
  title: {
    marginBottom: styleConfig.spacing.xl,
  },
  box: {
    width: '100%',
    marginBottom: styleConfig.spacing.m,
  },
});

export default SignIn;
