import React from 'react';
import {AuthContextProvider} from './src/context';
import {RootContainer} from './src/modules/root-container';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <RootContainer />
    </AuthContextProvider>
  );
};

export default App;
