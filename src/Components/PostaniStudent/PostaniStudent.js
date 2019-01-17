import React from 'react';

import { View, Linking } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import styles from '../../styles/styles';

const PostaniStudent = () => (
  <View style={styles.inputContainer}>
    {/* <Text style={styles.inputParagraph}>Ukoliko niste sigurni koliko vaš fakultet pridaje bodova određenim predmetima, posjetite: &nbsp; */}
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ marginRight: 15, color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 26, textDecorationLine: 'underline' }}
        onPress={() => Linking.openURL('https://www.postani-student.hr/Ucilista/Nositelji.aspx')}
      >
      POSTANI STUDENT
      </Text>
      <Icon
        name="question-circle"
        type="font-awesome"
        color="white"
      />
    </View>

    {/* </Text> */}

  </View>
);

export default PostaniStudent;
