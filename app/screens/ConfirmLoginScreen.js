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
import Header from '../components/Header';
import { confirmLogin } from '../actions/user';

class LoginScreen extends React.Component {

  state = {
    code: 'C-',
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
        <TextInput
          style={styles.input}
          value={this.state.code}
          onChangeText={this._onChangeText}
          placeholder="Enter code"
          autoCorrect={true}
          keyboardType="numeric"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>
    );
  }

  _onChangeText = code => this.setState({ code });

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
