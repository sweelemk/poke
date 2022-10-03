import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, Input, Text, useTheme} from '@ui-kitten/components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import {Layout, toastNotification, TopNavigator} from '../../../components';
import {styleConfig} from '../../../utils';
import type {AuthenticationRoutes, StackNavigationProps} from '../types';
import {useAuth} from '../../../context';
import {signIn} from '../../../modules/api/auth-service';

const SignIpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

type formState = {
  email: string;
  password: string;
};

const formInitialValues: formState = {
  email: '',
  password: '',
};

const SignInScreen: React.FC<
  StackNavigationProps<AuthenticationRoutes, 'SignIn'>
> = ({navigation}) => {
  const [isLoaing, setLoading] = useState(false);
  const {setUser} = useAuth();

  const onHandleSubmit = async (e: formState) => {
    const user = {
      password: e.password,
      email: e.email,
    };

    try {
      setLoading(true);
      const data = await signIn(user);
      if (data.user) {
        setUser({id: data.user?.id, ...data.user?.user_metadata});
      }
      if (data.error) {
        throw new Error(data.error.message);
      }
    } catch (error: any) {
      toastNotification({
        type: 'error',
        text1: error.name,
        text2: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <TopNavigator />
      <View style={styles.container}>
        <View style={styles.title}>
          <Text category="h4">Welcome</Text>
          <Text category="h4">back,</Text>
          <Text category="p1" style={{marginTop: styleConfig.spacing.s}}>
            Let's get started
          </Text>
        </View>
        <Formik
          initialValues={formInitialValues}
          validationSchema={SignIpSchema}
          onSubmit={onHandleSubmit}>
          {({handleSubmit, errors, handleChange}) => {
            return (
              <>
                <View style={styles.box}>
                  <Input
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    returnKeyType="next"
                    autoComplete="email"
                    autoCapitalize="none"
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
                  />
                </View>
                <View style={styles.box}>
                  <Button disabled={isLoaing} onPress={() => handleSubmit()}>
                    Sign in
                  </Button>
                </View>
              </>
            );
          }}
        </Formik>
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
    paddingHorizontal: styleConfig.spacing.l,
  },
  title: {
    marginBottom: styleConfig.spacing.xl,
  },
  box: {
    width: '100%',
    marginBottom: styleConfig.spacing.m,
  },
});

export default SignInScreen;
