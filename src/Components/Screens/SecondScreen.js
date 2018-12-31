import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from '../../styles/styles';

import { InputComponent, InputField, Header } from '..';

const secondScreen = props => (
  <ScrollView>
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
    <Button
      title="Natrag"
      onPress={() => props.navigation.goBack()}
    />
    <Button
      title="Dalje"
      onPress={() => props.navigation.navigate('Third')}
    />
  </ScrollView>
);

export default secondScreen;
