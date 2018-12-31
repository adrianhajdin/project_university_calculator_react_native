import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';

import styles from '../../styles/styles';

const header = () => (
  <Header>
    <Icon name="menu" color="#fff" />
    <Text style={styles.heading}>Kalkulator za maturu</Text>
    <Icon name="home" color="#fff" />
  </Header>
);

export default header;
