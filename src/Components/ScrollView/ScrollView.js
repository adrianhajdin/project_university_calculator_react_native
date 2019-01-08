
import React from 'react';
import PropTypes from 'prop-types';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ScrollView = ({ children }) => (
  <KeyboardAwareScrollView
    enableOnAndroid
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={false}
    style={{ display: 'flex' }}
    contentContainerStyle={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}
  >
    {children}
  </KeyboardAwareScrollView>
);

ScrollView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollView;
