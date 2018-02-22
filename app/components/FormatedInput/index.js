import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { errorMessageColor, gradientStart } from '../../constants/Colors';

const FormatedInput = ({
  onChangeText,
  value = '',
  error,
  placeholder = 'Enter your phone',
  keyboardType = 'numeric',
  inputPrefix = '+7',
}) => (
  <View style={styles.form}>
    <View style={styles.inputHolder}>
      <Text style={styles.countryCode}>{inputPrefix}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCorrect={true}
        keyboardType={keyboardType}
        returnKeyType="next"
        blurOnSubmit={false}
      />
    </View>
    {
      error && <Text style={styles.errorMessage}>{error.text}</Text>
    }
  </View>
);

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
  linearGradient: {
    height: 215,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default FormatedInput;
