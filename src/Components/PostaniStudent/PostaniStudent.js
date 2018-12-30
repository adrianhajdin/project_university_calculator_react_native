import React from 'react';

import { View, Linking } from 'react-native';
import { Text } from 'react-native-elements';

import styles from '../../styles/styles';

const PostaniStudent = () => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputParagraph}>Ukoliko niste sigurni koliko vaš fakultet pridaje bodova određenim predmetima, posjetite:
      <Text
        style={{ color: 'blue', fontSize: 20 }}
        onPress={() => Linking.openURL('https://www.postani-student.hr/Ucilista/Nositelji.aspx')}
      >
        POSTANI STUDENT
      </Text>
    </Text>
  </View>
);

export default PostaniStudent;
