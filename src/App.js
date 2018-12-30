import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header, Text, Icon } from 'react-native-elements';

import styles from './styles/styles';

import { InputComponent, InputField, PostaniStudent } from './Components';

const app = () => (
  <ScrollView>
    <Header>
      <Icon name="menu" color="#fff" />
      <Text style={styles.heading}>Kalkulator za maturu</Text>
      <Icon name="home" color="#fff" />
    </Header>
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
  </ScrollView>
);

export default app;
