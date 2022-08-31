import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as mapping} from './mapping.json';
import {NavigationContainer} from '@react-navigation/native';
import AuthanticationNavigator from './src/screens/auth';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
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
          <AuthanticationNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
