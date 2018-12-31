import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Button } from 'react-native-elements';

import styles from '../../styles/styles';

import { Header } from '..';

const fourthScreen = props => (
  <ScrollView>
    <Header />
    <View style={styles.inputContainer}>
      <Text>Rezultati:</Text>
      <Text>Ukupan broj bodova:</Text>
    </View>
    <Button
      title="Na početak"
      onPress={() => props.navigation.popToTop()}
    />
  </ScrollView>
);

export default fourthScreen;
