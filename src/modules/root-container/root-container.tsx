import {mapping} from '@eva-design/eva';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {IconRegistry, ApplicationProvider} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from '../../screens/app';
import AuthanticationNavigator from '../../screens/auth';
import {useAuth} from '../../context';

const RootContainer: React.FC = () => {
  const {user} = useAuth();
  const [theme] = useState('light');
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <ApplicationProvider
        {...eva}
        theme={theme === 'light' ? eva.light : eva.dark}
        customMapping={{...eva.mapping, ...mapping}}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthanticationNavigator />}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default RootContainer;
