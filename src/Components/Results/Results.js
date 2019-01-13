
import React from 'react';

import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

const Results = ({ props: {
  evaluationMaturaElective1,
  evaluationMaturaElective2,
  evaluationMaturaElective3,
  percentagesTotal,
  totalGradePoints,
  pointsMaturaCroatian,
  pointsMaturaMathematics,
  pointsMaturaEnglish,
  pointsMaturaElective1,
  pointsMaturaElective2,
  pointsMaturaElective3,
  pointsExtraField1,
  pointsExtraField2,
  pointsExtraField3,
  evaluationExtraField1,
  evaluationExtraField2,
  evaluationExtraField3,
} }) => (
  <View>
    <Text>Ukupan prosjek:</Text>
    <Text>{(percentagesTotal / 4).toFixed(2)}</Text>

    <Text>Broj bodova od ocjena:</Text>
    <Text>{totalGradePoints}</Text>

    <Text>Broj bodova od mature iz Hrvatskog jezika:</Text>
    <Text>{pointsMaturaCroatian}</Text>

    <Text>Broj bodova od mature iz Matematike:</Text>
    <Text>{pointsMaturaMathematics}</Text>

    <Text>Broj bodova od mature iz Engleskog jezika:</Text>
    <Text>{pointsMaturaEnglish}</Text>
    {evaluationMaturaElective1
      ? (
        <View>
          <Text>Broj bodova od mature iz 1. Izbornog predmeta:</Text>
          <Text>{pointsMaturaElective1}</Text>
        </View>
      ) : null}
    {evaluationMaturaElective2
      ? (
        <View>
          <Text>Broj bodova od mature iz 2. Izbornog predmeta:</Text>
          <Text>{pointsMaturaElective2}</Text>
        </View>
      ) : null}
    {evaluationMaturaElective3
      ? (
        <View>
          <Text>Broj bodova od mature iz 3. Izbornog predmeta:</Text>
          <Text>{pointsMaturaElective3}</Text>
        </View>
      ) : null}
    {evaluationExtraField1
      ? (
        <View>
          <Text>Broj bodova od dodatnih provjera 1.</Text>
          <Text>{pointsExtraField1}</Text>
        </View>
      ) : null}
    {evaluationExtraField2
      ? (
        <View>
          <Text>Broj bodova od dodatnih provjera 2..</Text>
          <Text>{pointsExtraField2}</Text>
        </View>
      ) : null}
    {evaluationExtraField3
      ? (
        <View>
          <Text>Broj bodova od dodatnih provjera 3.</Text>
          <Text>{pointsExtraField3}</Text>
        </View>
      ) : null}
  </View>
);

Results.propTypes = {
  props: PropTypes.shape({}).isRequired,
};

export default Results;
