import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.buttonStyle}
    >
    <Text style={styles.textStyle}> {children} </Text>
    </ TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#007aff',
    borderWidth: 1,
    borderRadius: 5
  },
  textStyle: {
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16
  }
};
export default Button;
