import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({text, type = 'PRIMARY', fgColor}) => {
  return (
    <Text
      style={[
        styles.text,
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},
      ]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#082032',
    fontSize: 18,
  },
  text_TERTIARY: {
    color: 'white',
  },
});
export default CustomButton;
