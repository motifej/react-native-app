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
import { login } from '../actions/user';

class LoginScreen extends React.Component {

  state = {
    phone: '+7',
  };

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
        />
        <Header
          title="Sign in"
          goBack={() => console.log('back')}
          goNext={() => console.log('next')}
          back="arrow-back"
          next="Enter"
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this._onChangeText}
          placeholder="Enter your phone"
          autoCorrect={true}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={this._submit}
          blurOnSubmit={false}
        />
      </View>
    );
  }

  _onChangeText = phone => console.log(phone) || this.setState({ phone });

  _submit = () => {
    this.props.login(this.state.phone);
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
  login: login.post.request,
})(LoginScreen);
