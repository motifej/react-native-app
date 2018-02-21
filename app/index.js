import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet,Text, View } from 'react-native';
import { NativeRouter, Redirect, Route } from 'react-router-native'
import { Provider } from 'react-redux';
import configureStore from './store';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export const { store } = configureStore();

export default () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={HomeScreen}/>
        <Redirect from="/" to="/login" />
        <Route exact path="/login" component={LoginScreen}/>
      </View>
    </NativeRouter>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
