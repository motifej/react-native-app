import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import {
  Picker,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import { login } from '../actions/user';

class LoginScreen extends React.Component {

  state = {
    phone: '+7',
    count: 0,
    colorTop: '#000000',
    colorBottom: '#cccccc',
  }

  componentDidMount() {
    this.props.login(100);
  }

  render() {
    return (
      <View>
      <LinearGradient
      colors={['#E70F62', '#FC5A14']}
      start={{x: 1, y: 0}} end={{x: 0, y: 0}}
      style={styles.gradient} >
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this._onChangeText}
          placeholder="Enter your phone"
          autoFocus={true}
          autoCorrect={true}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={this._submit}
          blurOnSubmit={false}
        />
        </LinearGradient>
      </View>
    );
  }

  _onChangeText = phone => this.setState({phone});

  _submit = () => {
    alert(`Phone ${this.state.phone}`);
  };
}

export default connect(null, {
  login: login.post.request,
})(LoginScreen);

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  gradient: {
    width: 200,
    height: 200,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#6b52ae',
    backgroundColor: 'transparent',
  },
});


