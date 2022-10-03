import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {IconRegistry, ApplicationProvider} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppNavigator from '../../screens/app';
import AuthanticationNavigator from '../../screens/auth';
import {useAuth} from '../../context';
import mapping from '../../../mapping.json';
import {
  FontistoIconsPack,
  MaterialCommunityIconsPack,
  OcticonsIconIconsPack,
} from '../icons';
import {getToastConfig} from '../../components';

const RootContainer: React.FC = () => {
  const {user} = useAuth();
  const [theme] = useState('light');
  const toastCongig = getToastConfig();
  return (
    <>
      <IconRegistry
        icons={[
          EvaIconsPack,
          MaterialCommunityIconsPack,
          OcticonsIconIconsPack,
          FontistoIconsPack,
        ]}
      />
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
      <Toast config={toastCongig} />
    </>
  );
};

export default RootContainer;
