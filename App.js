/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import theme from './src/Components/Theme/Index';
import {ThemeProvider} from '@shopify/restyle';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
