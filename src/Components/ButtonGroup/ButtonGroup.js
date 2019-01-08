import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  render() {
    const { onBack, onForward, onBeginning, activeStep } = this.props;

    let buttons = (
      <View>
        <Button
          title="Natrag"
          onPress={onBack}
        />
        <Button
          title="Dalje"
          onPress={onForward}
        />
      </View>
    );

    if (activeStep === 0) {
      buttons = (
        <Button
          title="Dalje"
          onPress={onForward}
        />
      );
    } else if (activeStep === 3) {
      buttons = (
        <Button
          title="Na početak"
          onPress={onBeginning}
        />
      );
    }

    return buttons;
  }
}

Buttons.propTypes = {
  activeStep: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
  onBeginning: PropTypes.func.isRequired,
};

export default Buttons;
