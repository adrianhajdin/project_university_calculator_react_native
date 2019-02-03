import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text } from 'react-native-elements';

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
