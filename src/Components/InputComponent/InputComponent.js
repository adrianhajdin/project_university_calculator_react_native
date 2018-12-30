import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text } from 'react-native-elements';

import styles from '../../styles/styles';

const InputComponent = ({ heading, paragraph }) => (
  <View>
    <Text style={styles.inputHeading}>{heading}</Text>
    <Text style={styles.inputParagraph}>{paragraph}</Text>
  </View>
);

InputComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default InputComponent;
