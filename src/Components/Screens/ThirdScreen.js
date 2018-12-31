import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from '../../styles/styles';

import { InputComponent, InputField, Header } from '..';

const thirdScreen = props => (
  <ScrollView>
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
    <Button
      title="Natrag"
      onPress={() => props.navigation.goBack()}
    />
    <Button
      title="Dalje"
      onPress={() => props.navigation.navigate('Fourth')}
    />
  </ScrollView>
);

export default thirdScreen;
