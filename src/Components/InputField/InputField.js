import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'react-native-elements';

const error = false;

class InputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myNumber: '',
    };
  }

  onChanged(text) {
    this.setState({
      myNumber: text.replace(/[^0-9]/g, ''),
    });
  }

  render() {
    const { placeholder } = this.props;
    const { myNumber } = this.state;

    return (
      <Input
        placeholder={placeholder}
        onChangeText={text => this.onChanged(text)}
        value={myNumber}
        rightIcon={{ type: 'font-awesome', name: 'percent' }}
        keyboardType="decimal-pad"
        errorStyle={{ color: 'red' }}
        errorMessage={error ? 'ENTER A VALID ERROR HERE' : null}
        shake
      />
    );
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
