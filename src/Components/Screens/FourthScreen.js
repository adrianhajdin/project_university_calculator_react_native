import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../../styles/styles';

import { Header } from '..';

const fourthScreen = props => (
  <KeyboardAwareScrollView
    enableOnAndroid
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={false}
    style={{ display: 'flex' }}
    contentContainerStyle={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}
  >
    <View>
      <Header />
      <View style={styles.inputContainer}>
        <Text>Rezultati:</Text>
        <Text>Ukupan broj bodova:</Text>
      </View>
    </View>
    <Button
      title="Na početak"
      onPress={() => props.navigation.popToTop()}
    />
  </KeyboardAwareScrollView>
);

export default fourthScreen;
