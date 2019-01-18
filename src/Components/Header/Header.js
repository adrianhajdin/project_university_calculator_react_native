import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';

import styles from './styles';

const header = () => (
  <Header>
    <Icon name="menu" color="#fff" />
    <Text style={styles.heading}>AwesomeProject</Text>
    <Icon name="home" color="#fff" />
  </Header>
);

export default header;
