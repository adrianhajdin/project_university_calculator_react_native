import React from 'react';
import { View, Text, Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles/styles';

import { initialState } from './util/constants';
import { calculateMaturaPoints, calculatePercentages, calculatePoints } from './util/functions';

import { Results, InputComponent, PostaniStudent, CustomTextInput, CustomButton, CustomLinearGradient } from './Components';

import validator from './validation';

const logo = require('./Images/icon-white.png');

EStyleSheet.build({
  $textColor: '#0275d8',
});

class App extends React.Component {
  state = initialState;

  // handleSelectChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleBack = activeStep => this.setState({ activeStep: activeStep - 1 });

  handlePress = () => {
    const {
      activeStep,
      evaluationExtraField1,
      evaluationExtraField2,
      evaluationExtraField3,
      evaluationMaturaCroatian,
      evaluationMaturaCroatianLevel,
      evaluationMaturaElective1,
      evaluationMaturaElective2,
      evaluationMaturaElective3,
      evaluationMaturaEnglish,
      evaluationMaturaEnglishLevel,
      evaluationMaturaMathematics,
      evaluationMaturaMathematicsLevel,
      percentageExtraField1,
      percentageExtraField2,
      percentageExtraField3,
      percentageFirstGrade,
      percentageFourthGrade,
      percentageMaturaCroatian,
      percentageMaturaElective1,
      percentageMaturaElective2,
      percentageMaturaElective3,
      percentageMaturaEnglish,
      percentageMaturaMathematics,
      percentageSecondGrade,
      percentageThirdGrade,
    } = this.state;

    if (activeStep === 0) {
      this.setState({ activeStep: activeStep + 1 });
    } else if (activeStep === 1) {
      const { evaluationSchoolGrades } = this.state;

      const percentageError = validator('postotak', evaluationSchoolGrades);

      this.setState({
        percentageError,
      }, () => {
        if (!percentageError) {
          this.setState({
            activeStep: activeStep + 1,
          });
        }
      });
    } else if (activeStep === 2) {
      const evaluationErrorCroatian = validator('postotak', evaluationMaturaCroatian);
      const evaluationErrorEnglish = validator('postotak', evaluationMaturaEnglish);
      const evaluationErrorMathematics = validator('postotak', evaluationMaturaMathematics);

      this.setState({
        evaluationErrorCroatian, evaluationErrorEnglish, evaluationErrorMathematics,
      }, () => {
        if (!evaluationErrorCroatian && !evaluationErrorEnglish && !evaluationErrorMathematics) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 3) {
      const firstGradeError = validator('ocjena', percentageFirstGrade);
      const secondGradeError = validator('ocjena', percentageSecondGrade);
      const thirdGradeError = validator('ocjena', percentageThirdGrade);
      const fourthGradeError = validator('ocjena', percentageFourthGrade);

      this.setState({
        firstGradeError, secondGradeError, thirdGradeError, fourthGradeError,
      }, () => {
        if (!firstGradeError && !secondGradeError && !thirdGradeError && !fourthGradeError) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 4) {
      const percentageMaturaCroatianError = validator('postotak', percentageMaturaCroatian);
      const percentageMaturaMathematicsError = validator('postotak', percentageMaturaMathematics);
      const percentageMaturaEnglishError = validator('postotak', percentageMaturaEnglish);

      this.setState({
        percentageMaturaCroatianError, percentageMaturaMathematicsError, percentageMaturaEnglishError,
      }, () => {
        if (!percentageMaturaCroatianError && !percentageMaturaMathematicsError && !percentageMaturaEnglishError) {
          this.setState({
            activeStep: activeStep + 1,
            percentagesTotal: calculatePercentages(percentageFirstGrade, percentageSecondGrade, percentageThirdGrade, percentageFourthGrade),
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
      });
    } else if (activeStep === 5) {
      this.setState({ activeStep: activeStep + 1 });
    }
  }

  render() {
    const {
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
      activeStep,
      percentageError,
      evaluationErrorCroatian,
      evaluationErrorEnglish,
      evaluationErrorMathematics,
      firstGradeError,
      secondGradeError,
      thirdGradeError,
      fourthGradeError,
      percentageMaturaEnglishError,
      percentageMaturaCroatianError,
      percentageMaturaMathematicsError,
      evaluationMaturaCroatianLevel,
      evaluationMaturaEnglishLevel,
      evaluationMaturaMathematicsLevel,
    } = this.state;

    let content = (
      <CustomLinearGradient
        children={(
          <View>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={logo}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Najbolji način za izračunati ukupan broj bodova za upis na fakulet.</Text>
            </View>
            <CustomButton onPress={this.handlePress} buttonText="KRENI" />
          </View>
      )}
      />
    );

    if (activeStep === 1) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <PostaniStudent />
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Ocjene iz srednje škole"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za prosjek ocjena srednje škole."
                />
                <CustomTextInput
                  placeholder="Prosjek svih ocjena*"
                  onChangeText={value => this.setState({ evaluationSchoolGrades: value })}
                  value={evaluationSchoolGrades}
                  percentage
                  error={percentageError}
                />
              </View>
              <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="1/5" />
            </View>
          )}
        />
      );
    } else if (activeStep === 2) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Obvezni dio državne mature"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za obvezni dio državne mature"
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ evaluationMaturaCroatian: value })}
                  value={evaluationMaturaCroatian}
                  percentage
                  placeholder="Hrvatski jezik*"
                  level
                  error={evaluationErrorCroatian}
                  selectedValue={evaluationMaturaCroatianLevel}
                  onValueChange={value => this.setState({ evaluationMaturaCroatianLevel: value })}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ evaluationMaturaMathematics: value })}
                  value={evaluationMaturaMathematics}
                  percentage
                  placeholder="Matematika*"
                  level
                  error={evaluationErrorMathematics}
                  selectedValue={evaluationMaturaMathematicsLevel}
                  onValueChange={value => this.setState({ evaluationMaturaMathematicsLevel: value })}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ evaluationMaturaEnglish: value })}
                  value={evaluationMaturaEnglish}
                  percentage
                  placeholder="Engleski jezik*"
                  level
                  error={evaluationErrorEnglish}
                  selectedValue={evaluationMaturaEnglishLevel}
                  onValueChange={value => this.setState({ evaluationMaturaEnglishLevel: value })}
                />
              </View>
              <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="2/5" />
            </View>
          )}
        />
      );
    } else if (activeStep === 3) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Prosjeci ocjena srednje škole"
                  paragraph="Ovdje upišite prosjeke ocjena koje ste postigli tijekom četiri razreda srednje škole"
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageFirstGrade: value })}
                  value={percentageFirstGrade}
                  placeholder="1. razred*"
                  error={firstGradeError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageSecondGrade: value })}
                  value={percentageSecondGrade}
                  placeholder="2. razred*"
                  error={secondGradeError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageThirdGrade: value })}
                  value={percentageThirdGrade}
                  placeholder="3. razred*"
                  error={thirdGradeError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageFourthGrade: value })}
                  value={percentageFourthGrade}
                  placeholder="4. razred*"
                  error={fourthGradeError}
                />
              </View>
              <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="3/5" />
            </View>
          )}
        />
      );
    } else if (activeStep === 4) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <View style={styles.inputContainer}>
                <InputComponent
                  heading="Rezultati mature"
                  paragraph="Ovdje upišite rezultate koje ste postigli na ispitima državne mature"
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageMaturaCroatian: value })}
                  value={percentageMaturaCroatian}
                  percentage
                  placeholder="Hrvatski jezik*"
                  error={percentageMaturaCroatianError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageMaturaMathematics: value })}
                  value={percentageMaturaMathematics}
                  percentage
                  placeholder="Matematika*"
                  error={percentageMaturaMathematicsError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageMaturaEnglish: value })}
                  value={percentageMaturaEnglish}
                  percentage
                  placeholder="Engleski jezik*"
                  error={percentageMaturaEnglishError}
                />
              </View>
              <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="4/5" />
            </View>
        )}
        />
      );
    } else if (activeStep === 5) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <View style={styles.inputContainer}>
                <Results props={{ ...this.state }} />
              </View>
            </View>
        )}
        />
      );
    }

    return content;
  }
}

export default App;
