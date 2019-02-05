
import React from 'react';

import { View, Text, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { calculateTotalGradePoints, calculatePercentagesAndTotalMaturaPoints } from '../../util/helperFunctions';
import logo from '../../Images/icon-white.png';

// Komponenta zaslužna za prikaz rezultata
const Results = ({ props: {
  percentagesTotal,
  evaluationSchoolGrades,
  pointsMaturaCroatian,
  pointsMaturaMathematics,
  pointsMaturaEnglish,
  pointsMaturaElective1,
  pointsMaturaElective2,
  pointsMaturaElective3,
  pointsExtraField1,
  pointsExtraField2,
  pointsExtraField3,
} }) => {
  const totalGradePoints = calculateTotalGradePoints(percentagesTotal, evaluationSchoolGrades);
  const totalMaturaPoints = calculatePercentagesAndTotalMaturaPoints(pointsMaturaEnglish, pointsMaturaCroatian, pointsMaturaElective1, pointsMaturaElective2, pointsMaturaElective3, pointsMaturaMathematics, pointsExtraField1, pointsExtraField2, pointsExtraField3);

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={logo}
        />
      </View>
      <Text style={styles.text}>Rezultati: </Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={[
          { text: 'Ukupan prosjek:', result: (percentagesTotal / 4).toFixed(2) },
          { text: 'Ocjene:', result: totalGradePoints },
          { text: 'Matura iz Hrvatskog jezika:', result: pointsMaturaCroatian },
          { text: 'Matura iz Matematike:', result: pointsMaturaMathematics },
          { text: 'Matura iz Engleskog jezika:', result: pointsMaturaEnglish },
          { text: '1. Izbornog predmeta:', result: pointsMaturaElective1 },
          { text: '2. Izbornog predmeta:', result: pointsMaturaElective2 },
          { text: '3. Izbornog predmeta:', result: pointsMaturaElective3 },
          { text: '1. dodatna provjera:', result: pointsExtraField1 },
          { text: '2. dodatne provjere:', result: pointsExtraField2 },
          { text: '3. dodatna provjera:', result: pointsExtraField3 },
        ]}
        renderItem={({ item }) => (
          (item.result === '' || item.result === 0 || item.result === null || item.result === undefined)
            ? null
            : (
              <View style={{ padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.textItem}>{item.text}</Text>
                <Text style={styles.textRight}>{item.result}</Text>
              </View>
            )
        )}
      />
      <View style={{ marginTop: 30 }}>
        <Text style={styles.inputParagraph}>Ukupan broj bodova: </Text>
        <Text style={styles.inputHeading}>{totalGradePoints + totalMaturaPoints}</Text>
      </View>
    </View>);
};

Results.propTypes = {
  props: PropTypes.shape({}).isRequired,
};

export default Results;
