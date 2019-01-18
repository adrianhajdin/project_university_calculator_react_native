import React from 'react';

import { View, Linking } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import styles from './styles';

const PostaniStudent = () => (
  <View style={styles.inputContainer}>
    {/* <Text style={styles.inputParagraph}>Ukoliko niste sigurni koliko vaš fakultet pridaje bodova određenim predmetima, posjetite: &nbsp; */}
    <View style={styles.postaniStudentContainer}>
      <Text
        style={styles.postaniStudentText}
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
