import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (<View style={styles.containerStyle}>
  {props.children }
    </View>);
};

const styles = {
  containerStyle: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    shadowRadius: 2
  }

};

export default Card;
