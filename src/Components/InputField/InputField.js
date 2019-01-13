import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const error = false;

const InputField = ({ placeholder, value, onChangeText, percentage }) => (
  <Input
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
    rightIcon={percentage ? <Icon name="percent" /> : null}
    keyboardType="decimal-pad"
    errorStyle={{ color: 'red' }}
    errorMessage={error ? 'ENTER A VALID ERROR HERE' : null}
    shake
  />
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  percentage: PropTypes.bool.isRequired,
};

export default InputField;
