import React from 'react';
import * as eva from '@eva-design/eva';
import {SafeAreaView, View} from 'react-native';
import {ApplicationProvider, Layout, Text, Button} from '@ui-kitten/components';
import {default as mapping} from './mapping.json';

const App: React.FC = () => {
  return (
    <ApplicationProvider
      {...eva}
      theme={eva.dark}
      customMapping={{...eva.mapping, ...mapping}}>
      <Layout>
        <SafeAreaView>
          <View>
            <Text category="h1">bulbasaur</Text>
            <Button size={'small'}>Click me</Button>
          </View>
        </SafeAreaView>
      </Layout>
    </ApplicationProvider>
  );
};

export default App;
