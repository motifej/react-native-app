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
import { errorMessageColor, gradientStart } from '../constants/Colors';
import formatTextbyMask from '../utils/formatTextbyMask';
import Header from '../components/Header';
import FormatedInput from '../components/FormatedInput';
import { login } from '../actions/user';
import { PHONE_NUMBER_MASK } from '../constants';

class LoginScreen extends React.Component {

  state = {
    phone: null,
  };

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
        />
        <Header
          title="Sign in"
          goBack={() => this.props.navigation.navigate('Home')}
          goNext={this._submit}
          back="arrow-back"
          next="Enter"
        />
        <FormatedInput
          value={this.state.phone}
          onChangeText={this._onChangeText}
        />
      </View>
      
    );
  }

  _onChangeText = val => this.setState({
    phone: formatTextbyMask(val, PHONE_NUMBER_MASK)
  });

  _submit = () => {
    this.props.login(this.state.phone);
  };
}

const styles = StyleSheet.create({
  inputHolder: {
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 4,
    borderColor: gradientStart,
    borderWidth: 1,
    height: 54,
  },
  form: {
    margin: 20,
  },
  countryCode: {
    fontSize: 26,
    color: '#242424',
    marginLeft: 10,
    flex: 0,
  },
  errorMessage: {
    color: errorMessageColor,
    fontSize: 16,
  },
  input: {
    height: 54,
    color: '#242424',
    flex: 2,
    fontSize: 26,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default connect(null, {
  login: login.post.request,
})(LoginScreen);
