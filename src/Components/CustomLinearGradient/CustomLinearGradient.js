import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

// Linearni gradient za pozadinu aplikacije
const CustomLinearGradient = ({ children }) => (
  <View>
    <StatusBar backgroundColor="#b828fb" barStyle="light-content" />
    <LinearGradient style={styles.linearGradient} colors={['#b828fb', '#2569fa']}>
      {children}
    </LinearGradient>
  </View>
);

CustomLinearGradient.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomLinearGradient;
