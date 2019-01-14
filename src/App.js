import React from 'react';
import { View, Text, Image } from 'react-native';

import Swiper from 'react-native-swiper';

import { Button } from 'react-native-elements';

import styles from './styles/styles';

import { initialState } from './util/constants';
import { calculateTotalGradePoints, calculateTotalMaturaPoints, calculateMaturaPoints, calculatePercentages, calculatePoints } from './util/functions';

import { Results, InputComponent, InputField, PostaniStudent, Header, ButtonGroup, ScrollView } from './Components';

class App extends React.Component {
  state = initialState;

  // handleSelectChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleStart = () => this.setState({ splash: false })

  handleBeginning = () => this.setState({ activeStep: 0 })

  handleBack = activeStep => this.setState({ activeStep: activeStep - 1 });

  handlePress = () => {
    const { activeStep, evaluationExtraField1, evaluationExtraField2, evaluationExtraField3, evaluationMaturaCroatian, evaluationMaturaCroatianLevel, evaluationMaturaElective1, evaluationMaturaElective2, evaluationMaturaElective3, evaluationMaturaEnglish, evaluationMaturaEnglishLevel, evaluationMaturaMathematics, evaluationMaturaMathematicsLevel, percentageExtraField1, percentageExtraField2, percentageExtraField3, percentageFirstGrade, percentageFourthGrade, percentageMaturaCroatian, percentageMaturaElective1, percentageMaturaElective2, percentageMaturaElective3, percentageMaturaEnglish, percentageMaturaMathematics, percentageSecondGrade, percentageThirdGrade } = this.state;

    if (activeStep === 0) {
      this.setState({ activeStep: activeStep + 1 });
    } else if (activeStep === 1) {
      this.setState({
        activeStep: activeStep + 1,
        percentagesTotal: calculatePercentages(percentageFirstGrade, percentageSecondGrade, percentageThirdGrade, percentageFourthGrade),
      });
    } else if (activeStep === 2) {
      this.setState({
        activeStep: activeStep + 1,
        pointsExtraField1: calculatePoints(percentageExtraField1, evaluationExtraField1),
        pointsExtraField2: calculatePoints(percentageExtraField2, evaluationExtraField2),
        pointsExtraField3: calculatePoints(percentageExtraField3, evaluationExtraField3),
        pointsMaturaElective1: calculatePoints(percentageMaturaElective1, evaluationMaturaElective1),
        pointsMaturaElective2: calculatePoints(percentageMaturaElective2, evaluationMaturaElective2),
        pointsMaturaElective3: calculatePoints(percentageMaturaElective3, evaluationMaturaElective3),
        pointsMaturaEnglish: calculateMaturaPoints(percentageMaturaEnglish, evaluationMaturaEnglish, evaluationMaturaEnglishLevel),
        pointsMaturaCroatian: calculateMaturaPoints(percentageMaturaCroatian, evaluationMaturaCroatian, evaluationMaturaCroatianLevel),
        pointsMaturaMathematics: calculateMaturaPoints(percentageMaturaMathematics, evaluationMaturaMathematics, evaluationMaturaMathematicsLevel),
      });
    }
  }

  render() {
    const {
      activeStep,
      evaluationSchoolGrades,
      evaluationMaturaCroatian,
      evaluationMaturaMathematics,
      evaluationMaturaEnglish,
      percentageFirstGrade,
      percentageSecondGrade,
      percentageThirdGrade,
      percentageFourthGrade,
      percentageMaturaCroatian,
      percentageMaturaMathematics,
      percentageMaturaEnglish,
      percentagesTotal,
      pointsMaturaEnglish,
      pointsMaturaCroatian,
      pointsMaturaElective1,
      pointsMaturaElective2,
      pointsMaturaElective3,
      pointsMaturaMathematics,
      pointsExtraField1,
      pointsExtraField2,
      pointsExtraField3,
      splash,
    } = this.state;

    const totalGradePoints = calculateTotalGradePoints(percentagesTotal, evaluationSchoolGrades);
    const totalMaturaPoints = calculateTotalMaturaPoints(pointsMaturaEnglish, pointsMaturaCroatian, pointsMaturaElective1, pointsMaturaElective2, pointsMaturaElective3, pointsMaturaMathematics, pointsExtraField1, pointsExtraField2, pointsExtraField3);

    return (
      splash ? (
        <View>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('./Images/download.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Najbolji način za izračunati ukupan broj bodova za upis na fakulet.</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                width: 300,
                height: 45,
                borderColor: 'transparent',
                borderWidth: 0,
              }}
              onPress={this.handleStart}
              containerStyle={{ display: 'flex', alignItems: 'center' }}
              title="Kreni"
            />
          </View>
        </View>
      )
        : (
          <Swiper onIndexChanged={this.handlePress}>
            <View style={styles.containerSwiper}>
              <PostaniStudent />
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Ocjene iz srednje škole"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za prosjek ocjena srednje škole"
                />
                <InputField
                  placeholder="Prosjek svih ocjena*"
                  onChangeText={value => this.setState({ evaluationSchoolGrades: value })}
                  value={evaluationSchoolGrades}
                  percentage
                />
              </View>
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Obvezni dio državne mature"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za obvezni dio državne mature"
                />
                <InputField
                  onChangeText={value => this.setState({ evaluationMaturaCroatian: value })}
                  value={evaluationMaturaCroatian}
                  percentage
                  placeholder="Hrvatski jezik*"
                />
                <InputField
                  onChangeText={value => this.setState({ evaluationMaturaMathematics: value })}
                  value={evaluationMaturaMathematics}
                  percentage
                  placeholder="Matematika*"
                />
                <InputField
                  onChangeText={value => this.setState({ evaluationMaturaEnglish: value })}
                  value={evaluationMaturaEnglish}
                  percentage
                  placeholder="Engleski jezik*"
                />
              </View>
            </View>
            <View>
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Prosjeci ocjena srednje škole"
                  paragraph="Ovdje upišite prosjeke ocjena koje ste postigli tijekom četiri razreda srednje škole"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageFirstGrade: value })}
                  value={percentageFirstGrade}
                  percentage
                  placeholder="1. razred*"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageSecondGrade: value })}
                  value={percentageSecondGrade}
                  percentage
                  placeholder="2. razred*"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageThirdGrade: value })}
                  value={percentageThirdGrade}
                  percentage
                  placeholder="3. razred*"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageFourthGrade: value })}
                  value={percentageFourthGrade}
                  percentage
                  placeholder="4. razred*"
                />
              </View>
            </View>
            <View>
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Rezultati mature"
                  paragraph="Ovdje upišite rezultate koje ste postigli na ispitima državne mature"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageMaturaCroatian: value })}
                  value={percentageMaturaCroatian}
                  percentage
                  placeholder="Hrvatski jezik*"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageMaturaMathematics: value })}
                  value={percentageMaturaMathematics}
                  percentage
                  placeholder="Matematika*"
                />
                <InputField
                  onChangeText={value => this.setState({ percentageMaturaEnglish: value })}
                  value={percentageMaturaEnglish}
                  percentage
                  placeholder="Engleski jezik*"
                />
              </View>
            </View>
            <View>
              <View style={styles.inputContainer}>
                <Results props={{ ...this.state, totalGradePoints }} />
              </View>
            </View>
          </Swiper>
        )
    );
  }
}

export default App;
