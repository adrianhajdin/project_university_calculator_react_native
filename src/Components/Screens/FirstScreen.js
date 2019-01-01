import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-elements';

import styles from '../../styles/styles';

import { InputComponent, InputField, PostaniStudent, Header } from '..';

const firstScreen = props => (
  <KeyboardAwareScrollView
    enableOnAndroid
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={false}
    style={{ display: 'flex' }}
    contentContainerStyle={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}
  >
    <View>
      <Header />
      <PostaniStudent />
      <View style={styles.inputContainer}>
        <InputComponent
          heading="Ocjene iz srednje škole"
          paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za prosjek ocjena srednje škole"
        />
        <InputField placeholder="Prosjek svih ocjena*" />
      </View>
      <View style={styles.inputContainer}>
        <InputComponent
          heading="Obvezni dio državne mature"
          paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za obvezni dio državne mature"
        />
        <InputField placeholder="Hrvatski jezik*" />
        <InputField placeholder="Matematika*" />
        <InputField placeholder="Engleski jezik*" />
      </View>
    </View>
    <Button
      title="Dalje"
      onPress={() => props.navigation.navigate('Second')}
    />
  </KeyboardAwareScrollView>
);

export default firstScreen;
