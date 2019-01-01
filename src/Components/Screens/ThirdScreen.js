import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../../styles/styles';

import { InputComponent, InputField, Header } from '..';

const thirdScreen = props => (
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
          heading="Rezultati mature"
          paragraph="Ovdje upišite rezultate koje ste postigli na
        ispitima državne mature"
        />
        <InputField placeholder="Hrvatski jezik*" />
        <InputField placeholder="Matematika*" />
        <InputField placeholder="Engleski jezik*" />
      </View>
    </View>
    <View>
      <Button
        title="Natrag"
        onPress={() => props.navigation.goBack()}
      />
      <Button
        title="Dalje"
        onPress={() => props.navigation.navigate('Fourth')}
      />
    </View>

  </KeyboardAwareScrollView>
);

export default thirdScreen;
