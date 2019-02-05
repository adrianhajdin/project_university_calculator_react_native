import React from 'react';

import { Text } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// Komponenta koja prikazuje dodatne informacije o tome što upisati u input
const InputHeader = ({ heading, paragraph }) => (
  <View>
    <Text style={styles.inputHeading}>{heading}</Text>
    <Text style={styles.inputParagraph}>{paragraph}</Text>
  </View>
);

InputHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default InputHeader;
