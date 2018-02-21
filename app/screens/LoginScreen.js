import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  ScrollView,
  Picker,
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import { login } from '../actions/user';

class LoginScreen extends React.Component {

  state = {
    phone: '+7',
  };

  componentDidMount() {
    this.props.login(100);
  }

  render() {
    return (
      <View>
        <Header
          title="Sign in"
          goBack={() => Alert('goBack')}
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

  _onChangeText = phone => this.setState({phone});

  _submit = () => {
    alert(`Phone ${this.state.phone}`);
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