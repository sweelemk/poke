import React from 'react';
import {AppContextProvider, AuthContextProvider} from './src/context';
import {RootContainer} from './src/modules/root-container';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <RootContainer />
      </AppContextProvider>
    </AuthContextProvider>
  );
};

export default App;
