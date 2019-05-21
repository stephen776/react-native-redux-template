/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import Navigator from './navigator';
import theme from './theme';

// create the react-navigation app container with our navigator
const AppContainer = createAppContainer(Navigator);
const App: React.FC = () => (
  <PaperProvider theme={theme}>
    <AppContainer />
  </PaperProvider>
);

export default App;
