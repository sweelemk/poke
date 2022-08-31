import React from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Input, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import type {AuthenticationRoutes, StackNavigationProps} from '../types';
import {Layout, TopNavigator} from '../../../components';
import {styleConfig} from '../../../utils';

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too Short!').required('Required'),
  username: Yup.string().min(2, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string().equals([
    Yup.ref('password'),
    "Password don't match",
  ]),
});

const formInitialValues = {
  fullName: '',
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SignIn: React.FC<
  StackNavigationProps<AuthenticationRoutes, 'SignUp'>
> = ({navigation}) => {
  return (
    <Layout>
      <TopNavigator navigation={navigation} />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.title}>
            <Text category="h4">Create an</Text>
            <Text category="h4">Account,</Text>
            <Text category="p1">Please, sign up to continue</Text>
          </View>
          <Formik
            initialValues={formInitialValues}
            validationSchema={SignUpSchema}
            onSubmit={e => console.log(e)}>
            {({handleSubmit, errors, handleChange}) => {
              console.log(errors);
              return (
                <>
                  <View style={styles.box}>
                    <Input
                      placeholder="Full name"
                      returnKeyType="next"
                      onChangeText={handleChange('fullName')}
                      status={errors.fullName ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Username"
                      autoCapitalize="none"
                      onChangeText={handleChange('username')}
                      status={errors.username ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Email"
                      returnKeyType="next"
                      autoComplete="email"
                      autoCapitalize="none"
                      onChangeText={handleChange('email')}
                      status={errors.email ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Password"
                      secureTextEntry
                      autoComplete="password"
                      autoCapitalize="none"
                      onChangeText={handleChange('password')}
                      status={errors.password ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Confirm Password"
                      secureTextEntry
                      autoCapitalize="none"
                      onChangeText={handleChange('passwordConfirmation')}
                      status={errors.passwordConfirmation ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Button onPress={() => handleSubmit()}>Sign up</Button>
                  </View>
                </>
              );
            }}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: styleConfig.spacing.s,
    paddingHorizontal: 16,
  },
  naviContainer: {
    // marginBottom: styleConfig.spacing.s,
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
