import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import App from './app/index.js';

const store = configureStore();

console.disableYellowBox = true;

const Cryptoticketswallet = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent('cryptoticketswallet', () => Cryptoticketswallet);
