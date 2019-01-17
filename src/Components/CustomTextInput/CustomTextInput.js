import React from 'react';

import { View, TouchableHighlight, TextInput, Picker } from 'react-native';

import styles from './styles';

const CustomTextInput = (props) => {
  const { placeholder, onChangeText, value } = props;

  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input} {...props} />
      <View style={styles.border} />
      <TouchableHighlight style={styles.buttonCointainer}>
        <Picker
          selectedValue="A"
          style={{ width: 75 }}
        >
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="A" />
        </Picker>
      </TouchableHighlight>
    </View>
  );
};

export default CustomTextInput;
