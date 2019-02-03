import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

// Button komponenta
const CustomButton = ({ buttonText, buttonProgress, onPress }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.loginScreenButton}
    >
      <View style={styles.flexDirectionRow}>
        <Text style={styles.loginText}>{buttonText}</Text>
        {buttonProgress ? (
          <View style={styles.buttonProgress}>
            <Text style={styles.loginTextProgress}>{buttonProgress}</Text>
            <Icon name="chevron-right" type="material-icons" color="#2569fa" />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  </View>
);

CustomButton.defaultProps = {
  buttonProgress: null,
};

CustomButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonProgress: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default CustomButton;
