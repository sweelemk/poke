import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Input, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import type {AuthenticationRoutes, StackNavigationProps} from '../types';
import {Layout, TopNavigator} from '../../../components';
import {styleConfig} from '../../../utils';
import {signUp} from '../../../modules/api/auth-service';
import {useAuth} from '../../../context';

const SignUpSchema = Yup.object().shape({
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

type formState = {
  username: string;
  nickname?: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const formInitialValues: formState = {
  username: '',
  nickname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SignUnScreen: React.FC<
  StackNavigationProps<AuthenticationRoutes, 'SignUp'>
> = ({navigation}) => {
  const [isLoaing, setLoading] = useState(false);
  const {setUser} = useAuth();

  const onHandleSubmit = async (e: formState) => {
    const user = {
      username: e.username,
      nickname: e.nickname,
      password: e.password,
      email: e.email,
    };

    try {
      setLoading(true);
      const data = await signUp(user);
      setUser({id: data.user?.id, ...data.user?.user_metadata});
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <TopNavigator />
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.title}>
            <Text category="h4">Create an</Text>
            <Text category="h4">Account,</Text>
            <Text category="p1" style={{marginTop: styleConfig.spacing.s}}>
              Please, sign up to continue
            </Text>
          </View>
          <Formik
            initialValues={formInitialValues}
            validationSchema={SignUpSchema}
            onSubmit={onHandleSubmit}>
            {({handleSubmit, errors, handleChange}) => {
              return (
                <>
                  <View style={styles.box}>
                    <Input
                      placeholder="Username*"
                      autoCapitalize="none"
                      autoComplete="off"
                      onChangeText={handleChange('username')}
                      status={errors.username ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Nickname"
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoComplete="off"
                      onChangeText={handleChange('nickname')}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Email*"
                      returnKeyType="next"
                      autoComplete="email"
                      autoCapitalize="none"
                      onChangeText={handleChange('email')}
                      status={errors.email ? 'danger' : 'basic'}
                    />
                  </View>
                  <View style={styles.box}>
                    <Input
                      placeholder="Password*"
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
                    <Button disabled={isLoaing} onPress={() => handleSubmit()}>
                      Sign up
                    </Button>
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
    paddingHorizontal: styleConfig.spacing.l,
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

export default SignUnScreen;
