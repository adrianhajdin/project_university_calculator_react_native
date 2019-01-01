import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from '../../styles/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { InputComponent, InputField, Header } from '..';

const secondScreen = props => (
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
        <InputComponent
          heading="Prosjeci ocjena srednje škole"
          paragraph="Ovdje upišite prosjeke ocjena koje ste postigli tijekom
        četiri razreda srednje škole"
        />
        <InputField placeholder="1. razred*" />
        <InputField placeholder="2. razred*" />
        <InputField placeholder="3. razred*" />
        <InputField placeholder="4. razred*" />
      </View>
    </View>
    <View>
      <Button
        title="Natrag"
        onPress={() => props.navigation.goBack()}
      />
      <Button
        title="Dalje"
        onPress={() => props.navigation.navigate('Third')}
      />
    </View>
  </KeyboardAwareScrollView>
);

export default secondScreen;
