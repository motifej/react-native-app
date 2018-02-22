import React from 'react';
import { connect } from 'react-redux';
import {
  Picker,
  StyleSheet,
  TextInput,
  Text,
  View,
  StatusBar,
} from 'react-native';
import formatTextbyMask from '../utils/formatTextbyMask';
import FormatedInput from '../components/FormatedInput';
import Header from '../components/Header';
import { CONFIRM_CODE_MASK } from '../constants';
import { confirmLogin } from '../actions/user';

class LoginScreen extends React.Component {

  state = {
    code: '',
  };

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
        />
        <Header
          title="Sign in"
          goBack={() => this.props.navigation.navigate('Login')}
          goNext={this._submit}
          back="arrow-back"
          next="Next"
        />
        <FormatedInput
          value={this.state.code}
          placeholder="Enter code"
          inputPrefix=" C-"
          onChangeText={this._onChangeText}
        />
      </View>
    );
  }

  _onChangeText = val => this.setState({
    code: formatTextbyMask(val, CONFIRM_CODE_MASK)
  });

  _submit = () => {
    this.props.confirmLogin(this.state.code);
  };
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
});

export default connect(null, {
  confirmLogin: confirmLogin.post.request,
})(LoginScreen);
