import { View, Text } from 'react-native';
import React from 'react';
import Main from './src/screens/Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};

export default App;
