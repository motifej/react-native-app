import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';
import AppNavigator from './navigator';
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

class App extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('backPress', () => {
      this.props.dispatch(NavigationActions.back());
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  componentWillMount() {
    this.addListener = createReduxBoundAddListener("root");
  }

  render() {
    const { dispatch, nav } = this.props;
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener: this.addListener })} />;
  }
}

App.propTypes = {
  dispatch: func.isRequired,
  nav: object.isRequired,
};

export default connect(
  ({ nav }) => ({ nav }),
  dispatch => ({ dispatch }),
)(App);
