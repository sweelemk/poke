import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {SafeAreaView, StyleSheet, View, Linking} from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  IconRegistry,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as mapping} from './mapping.json';

const App: React.FC = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={eva.light}
        customMapping={{...eva.mapping, ...mapping}}>
        <Layout style={styles.layout}>
          <SafeAreaView>
            <View>
              <Text category="h1">bulbasaur</Text>
              <Button size={'small'}>
                Click me
              </Button>
            </View>
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default App;
