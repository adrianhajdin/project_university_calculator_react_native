import React from 'react';

// Import vanjskih modula
import { View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Import pomoćnih funkcija i konstanti
import { calculateMaturaPoints, calculatePoints, calculatePercentagesAndTotalMaturaPoints } from './util/helperFunctions';
import { initialState } from './util/constants';

// Import komponenti, slika, stilova i validacije
import { Results, InputHeader, PostaniStudent, CustomTextInput, CustomButton, CustomLinearGradient } from './Components';
import logo from './Images/icon-white.png';
import styles from './styles/styles';
import validator from './validation';

// Postavljanje EStyleSheeta
EStyleSheet.build({});

class App extends React.Component {
  state = initialState;

  // Metoda koja vraća modal za jedan korak natrag
  handleBack = activeStep => this.setState({ activeStep: activeStep - 1 });

  // Metoda koja dodaje dodatna polja
  addInputs = (field) => {
    if (field === 'evaluationMaturaElective') {
      const { evaluationMaturaElectiveInputs, evaluationMaturaElectiveInputs2 } = this.state;

      this.setState({ evaluationMaturaElectiveInputs: true });

      if (evaluationMaturaElectiveInputs) {
        this.setState({ evaluationMaturaElectiveInputs2: true });
      } if (evaluationMaturaElectiveInputs2) {
        this.setState({ evaluationMaturaElectiveInputs3: true });
      }
    } else {
      const { evaluationExtraFields, evaluationExtraFields2 } = this.state;

      this.setState({ evaluationExtraFields: true });

      if (evaluationExtraFields) {
        this.setState({ evaluationExtraFields2: true });
      } if (evaluationExtraFields2) {
        this.setState({ evaluationExtraFields3: true });
      }
    }
  }

  // Metoda koja postavlja novo stanje na svakom idućem koraku
  handlePress = () => {
    const { activeStep, evaluationExtraField1, evaluationExtraField2, evaluationExtraField3, evaluationMaturaCroatian, evaluationMaturaCroatianLevel, evaluationMaturaElective1, evaluationMaturaElective2, evaluationMaturaElective3, evaluationMaturaEnglish, evaluationMaturaEnglishLevel, evaluationMaturaMathematics, evaluationMaturaMathematicsLevel, percentageExtraField1, percentageExtraField2, percentageExtraField3, percentageFirstGrade, percentageFourthGrade, percentageMaturaCroatian, percentageMaturaElective1, percentageMaturaElective2, percentageMaturaElective3, percentageMaturaEnglish, percentageMaturaMathematics, percentageSecondGrade, percentageThirdGrade, evaluationMaturaElectiveInputs, evaluationMaturaElectiveInputs2, evaluationMaturaElectiveInputs3, evaluationExtraFields, evaluationExtraFields2, evaluationExtraFields3 } = this.state;

    if (activeStep === 0) {
      this.setState({ activeStep: activeStep + 1 });
    } else if (activeStep === 1) {
      const { evaluationSchoolGrades } = this.state;

      // Postavljanje validacije za speficično polje
      const percentageError = validator('postotak', evaluationSchoolGrades);

      this.setState({ percentageError }, () => {
        if (!percentageError) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 2) {
      const evaluationErrorCroatian = validator('postotak', evaluationMaturaCroatian);
      const evaluationErrorEnglish = validator('postotak', evaluationMaturaEnglish);
      const evaluationErrorMathematics = validator('postotak', evaluationMaturaMathematics);

      this.setState({ evaluationErrorCroatian, evaluationErrorEnglish, evaluationErrorMathematics }, () => {
        if (!evaluationErrorCroatian && !evaluationErrorEnglish && !evaluationErrorMathematics) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 3) {
      let evaluationMaturaElective1Error;
      let evaluationMaturaElective2Error;
      let evaluationMaturaElective3Error;

      if (evaluationMaturaElectiveInputs) { evaluationMaturaElective1Error = validator('postotak', evaluationMaturaElective1); }
      if (evaluationMaturaElectiveInputs2) { evaluationMaturaElective2Error = validator('postotak', evaluationMaturaElective2); }
      if (evaluationMaturaElectiveInputs3) { evaluationMaturaElective3Error = validator('postotak', evaluationMaturaElective3); }

      this.setState({ evaluationMaturaElective1Error, evaluationMaturaElective2Error, evaluationMaturaElective3Error }, () => {
        if (!evaluationMaturaElective1Error && !evaluationMaturaElective2Error && !evaluationMaturaElective3Error) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 4) {
      let evaluationMaturaExtraField1Error;
      let evaluationMaturaExtraField2Error;
      let evaluationMaturaExtraField3Error;

      if (evaluationExtraFields) { evaluationMaturaExtraField1Error = validator('postotak', evaluationExtraField1); }
      if (evaluationExtraFields2) { evaluationMaturaExtraField2Error = validator('postotak', evaluationExtraField2); }
      if (evaluationExtraFields3) { evaluationMaturaExtraField3Error = validator('postotak', evaluationExtraField3); }

      this.setState({ evaluationMaturaExtraField1Error, evaluationMaturaExtraField2Error, evaluationMaturaExtraField3Error }, () => {
        if (!evaluationMaturaExtraField1Error && !evaluationMaturaExtraField2Error && !evaluationMaturaExtraField3Error) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 5) {
      const firstGradeError = validator('ocjena', percentageFirstGrade);
      const secondGradeError = validator('ocjena', percentageSecondGrade);
      const thirdGradeError = validator('ocjena', percentageThirdGrade);
      const fourthGradeError = validator('ocjena', percentageFourthGrade);

      this.setState({ firstGradeError, secondGradeError, thirdGradeError, fourthGradeError }, () => {
        if (!firstGradeError && !secondGradeError && !thirdGradeError && !fourthGradeError) {
          this.setState({ activeStep: activeStep + 1 });
        }
      });
    } else if (activeStep === 6) {
      const percentageMaturaCroatianError = validator('postotak', percentageMaturaCroatian);
      const percentageMaturaMathematicsError = validator('postotak', percentageMaturaMathematics);
      const percentageMaturaEnglishError = validator('postotak', percentageMaturaEnglish);

      let percentageMaturaElective1Error;
      let percentageMaturaExtraField1Error;
      let percentageMaturaElective2Error;
      let percentageMaturaExtraField2Error;
      let percentageMaturaElective3Error;
      let percentageMaturaExtraField3Error;

      if (evaluationMaturaElectiveInputs) { percentageMaturaElective1Error = validator('postotak', percentageMaturaElective1); }
      if (evaluationMaturaElectiveInputs2) { percentageMaturaElective2Error = validator('postotak', percentageMaturaElective2); }
      if (evaluationMaturaElectiveInputs3) { percentageMaturaElective3Error = validator('postotak', percentageMaturaElective3); }

      if (evaluationExtraFields) { percentageMaturaExtraField1Error = validator('postotak', percentageExtraField1); }
      if (evaluationExtraFields2) { percentageMaturaExtraField2Error = validator('postotak', percentageExtraField2); }
      if (evaluationExtraFields3) { percentageMaturaExtraField3Error = validator('postotak', percentageExtraField3); }

      this.setState({ percentageMaturaElective1Error,
        percentageMaturaElective2Error,
        percentageMaturaElective3Error,
        percentageMaturaExtraField1Error,
        percentageMaturaExtraField2Error,
        percentageMaturaExtraField3Error,
        percentageMaturaCroatianError,
        percentageMaturaMathematicsError,
        percentageMaturaEnglishError,
      }, () => {
        if (!percentageMaturaElective1Error && !percentageMaturaElective2Error && !percentageMaturaElective3Error && !percentageMaturaExtraField1Error && !percentageMaturaExtraField2Error && !percentageMaturaExtraField3Error && !percentageMaturaCroatianError && !percentageMaturaMathematicsError && !percentageMaturaEnglishError) {
          this.setState({
            activeStep: activeStep + 1,
            percentagesTotal: calculatePercentagesAndTotalMaturaPoints(percentageFirstGrade, percentageSecondGrade, percentageThirdGrade, percentageFourthGrade),
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
    }
  }

  render() {
    const { evaluationSchoolGrades, evaluationMaturaCroatian, evaluationMaturaMathematics, evaluationMaturaEnglish, percentageFirstGrade, percentageSecondGrade, percentageThirdGrade, percentageFourthGrade, percentageMaturaCroatian, percentageMaturaMathematics, percentageMaturaEnglish, activeStep, percentageError, evaluationErrorCroatian, evaluationErrorEnglish, evaluationErrorMathematics, firstGradeError, secondGradeError, thirdGradeError, fourthGradeError, percentageMaturaEnglishError, percentageMaturaCroatianError, percentageMaturaMathematicsError, evaluationMaturaCroatianLevel, evaluationMaturaEnglishLevel, evaluationMaturaMathematicsLevel, evaluationMaturaElectiveInputs, evaluationMaturaElectiveInputs2, evaluationMaturaElectiveInputs3, evaluationExtraFields, evaluationExtraFields2, evaluationExtraFields3, evaluationMaturaElective1, evaluationMaturaElective1Error, evaluationMaturaElective2, evaluationMaturaElective2Error, evaluationMaturaElective3, evaluationMaturaElective3Error, evaluationMaturaExtraField1Error, evaluationMaturaExtraField2Error, evaluationMaturaExtraField3Error, percentageMaturaElective1, percentageMaturaElective1Error, percentageMaturaElective2, percentageMaturaElective2Error, percentageMaturaElective3, percentageMaturaElective3Error, evaluationExtraField1, percentageExtraField1, evaluationExtraField2, percentageExtraField2, evaluationExtraField3, percentageExtraField3, percentageMaturaExtraField1Error, percentageMaturaExtraField2Error, percentageMaturaExtraField3Error } = this.state;

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

    // Postavljanje novog sadržaja na dialogContent i buttons nakon promjene koraka
    if (activeStep === 1) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <PostaniStudent />
              <View style={styles.inputContainer}>
                <InputHeader
                  heading="Ocjene iz srednje škole"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za prosjek ocjena srednje škole."
                />
                <CustomTextInput
                  placeholder="Prosjek svih ocjena"
                  onChangeText={value => this.setState({ evaluationSchoolGrades: value })}
                  value={evaluationSchoolGrades}
                  percentage
                  error={percentageError}
                />
              </View>
              <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="1/6" />
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
                <InputHeader
                  heading="Obvezni dio državne mature"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni fakultet pridaje za obvezni dio državne mature"
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ evaluationMaturaCroatian: value })}
                  value={evaluationMaturaCroatian}
                  percentage
                  placeholder="Hrvatski jezik"
                  error={evaluationErrorCroatian}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ evaluationMaturaMathematics: value })}
                  value={evaluationMaturaMathematics}
                  percentage
                  placeholder="Matematika"
                  error={evaluationErrorMathematics}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ evaluationMaturaEnglish: value })}
                  value={evaluationMaturaEnglish}
                  percentage
                  placeholder="Engleski jezik"
                  error={evaluationErrorEnglish}
                />
              </View>
              <KeyboardAvoidingView behavior="padding">
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => this.handleBack(activeStep)} buttonText="NATRAG" />
                  <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="2/6" />
                </View>
              </KeyboardAvoidingView>
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
                <InputHeader
                  heading="Izborni dio državne mature"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni
                  fakultet pridaje za izborni dio državne mature"
                />
                { evaluationMaturaElectiveInputs
                  ? (
                    <CustomTextInput
                      onChangeText={value => this.setState({ evaluationMaturaElective1: value })}
                      value={evaluationMaturaElective1}
                      placeholder="1. Izborni predmet"
                      error={evaluationMaturaElective1Error}
                      percentage
                    />
                  ) : null
                }
                { evaluationMaturaElectiveInputs2
                  ? (
                    <CustomTextInput
                      onChangeText={value => this.setState({ evaluationMaturaElective2: value })}
                      value={evaluationMaturaElective2}
                      placeholder="2. Izborni predmet"
                      error={evaluationMaturaElective2Error}
                      percentage
                    />
                  ) : null
                }
                { evaluationMaturaElectiveInputs3
                  ? (
                    <CustomTextInput
                      onChangeText={value => this.setState({ evaluationMaturaElective3: value })}
                      value={evaluationMaturaElective3}
                      placeholder="3. Izborni predmet"
                      error={evaluationMaturaElective3Error}
                      percentage
                    />
                  ) : null
                }
              </View>
              { !evaluationMaturaElectiveInputs3
                ? <CustomButton onPress={() => this.addInputs('evaluationMaturaElective')} buttonText="DODAJ  +" />
                : null
                }
              <KeyboardAvoidingView behavior="padding">
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => this.handleBack(activeStep)} buttonText="NATRAG" />
                  <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="3/6" />
                </View>
              </KeyboardAvoidingView>
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
                <InputHeader
                  heading="Dodatne provjere i posebna postignuća"
                  paragraph="Ovdje upišite postotak od ukupnog broja bodova koji vam određeni
                  fakultet pridaje za dodatne provjere i posebna postignuća"
                />
                { evaluationExtraFields
                  ? (
                    <CustomTextInput
                      onChangeText={value => this.setState({ evaluationExtraField1: value })}
                      value={evaluationExtraField1}
                      placeholder="1. Dodatno polje"
                      error={evaluationMaturaExtraField1Error}
                      percentage
                    />
                  ) : null
                }
                { evaluationExtraFields2
                  ? (
                    <CustomTextInput
                      onChangeText={value => this.setState({ evaluationExtraField2: value })}
                      value={evaluationExtraField2}
                      placeholder="2. Dodatno polje"
                      error={evaluationMaturaExtraField2Error}
                      percentage
                    />
                  ) : null
                }
                { evaluationExtraFields3
                  ? (
                    <CustomTextInput
                      onChangeText={value => this.setState({ evaluationExtraField3: value })}
                      value={evaluationExtraField3}
                      placeholder="3. Dodatno polje"
                      error={evaluationMaturaExtraField3Error}
                      percentage
                    />
                  ) : null
                }
              </View>
              { !evaluationExtraFields3
                ? <CustomButton onPress={() => this.addInputs()} buttonText="DODAJ +" />
                : null
              }
              <KeyboardAvoidingView behavior="padding">
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => this.handleBack(activeStep)} buttonText="NATRAG" />
                  <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="4/6" />
                </View>
              </KeyboardAvoidingView>
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
                <InputHeader
                  heading="Prosjeci ocjena srednje škole"
                  paragraph="Ovdje upišite prosjeke ocjena koje ste postigli tijekom četiri razreda srednje škole"
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageFirstGrade: value })}
                  value={percentageFirstGrade}
                  placeholder="1. razred"
                  error={firstGradeError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageSecondGrade: value })}
                  value={percentageSecondGrade}
                  placeholder="2. razred"
                  error={secondGradeError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageThirdGrade: value })}
                  value={percentageThirdGrade}
                  placeholder="3. razred"
                  error={thirdGradeError}
                />
                <CustomTextInput
                  onChangeText={value => this.setState({ percentageFourthGrade: value })}
                  value={percentageFourthGrade}
                  placeholder="4. razred"
                  error={fourthGradeError}
                />
              </View>
              <KeyboardAvoidingView behavior="padding">
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => this.handleBack(activeStep)} buttonText="NATRAG" />
                  <CustomButton onPress={this.handlePress} buttonText="DALJE" buttonProgress="5/6" />
                </View>
              </KeyboardAvoidingView>
            </View>
          )}
        />
      );
    } else if (activeStep === 6) {
      content = (
        <CustomLinearGradient
          children={(
            <View>
              <KeyboardAvoidingView behavior="padding">
                <ScrollView contentContainerStyle={styles.inputContainer}>
                  <InputHeader
                    heading="Rezultati mature"
                    paragraph="Ovdje upišite rezultate koje ste postigli na ispitima državne mature te razinu koju planirate položiti"
                  />
                  <CustomTextInput
                    onChangeText={value => this.setState({ percentageMaturaCroatian: value })}
                    value={percentageMaturaCroatian}
                    percentage
                    placeholder="Hrvatski jezik"
                    error={percentageMaturaCroatianError}
                    level
                    selectedValue={evaluationMaturaCroatianLevel}
                    onValueChange={value => this.setState({ evaluationMaturaCroatianLevel: value })}
                  />
                  <CustomTextInput
                    onChangeText={value => this.setState({ percentageMaturaMathematics: value })}
                    value={percentageMaturaMathematics}
                    percentage
                    placeholder="Matematika"
                    error={percentageMaturaMathematicsError}
                    level
                    selectedValue={evaluationMaturaMathematicsLevel}
                    onValueChange={value => this.setState({ evaluationMaturaMathematicsLevel: value })}
                  />
                  <CustomTextInput
                    onChangeText={value => this.setState({ percentageMaturaEnglish: value })}
                    value={percentageMaturaEnglish}
                    percentage
                    placeholder="Engleski jezik"
                    error={percentageMaturaEnglishError}
                    level
                    selectedValue={evaluationMaturaEnglishLevel}
                    onValueChange={value => this.setState({ evaluationMaturaEnglishLevel: value })}
                  />
                  { evaluationMaturaElective1 !== ''
                    ? (
                      <CustomTextInput
                        onChangeText={value => this.setState({ percentageMaturaElective1: value })}
                        value={percentageMaturaElective1}
                        percentage
                        placeholder="1. Izborni predmet"
                        error={percentageMaturaElective1Error}
                      />
                    ) : null
                }
                  { evaluationMaturaElective2 !== ''
                    ? (
                      <CustomTextInput
                        onChangeText={value => this.setState({ percentageMaturaElective2: value })}
                        value={percentageMaturaElective2}
                        percentage
                        placeholder="2. Izborni predmet"
                        error={percentageMaturaElective2Error}
                      />
                    ) : null
                }
                  { evaluationMaturaElective3 !== ''
                    ? (
                      <CustomTextInput
                        onChangeText={value => this.setState({ percentageMaturaElective3: value })}
                        value={percentageMaturaElective3}
                        percentage
                        placeholder="3. Izborni predmet"
                        error={percentageMaturaElective3Error}
                      />
                    ) : null
                }
                  { evaluationExtraField1 !== ''
                    ? (
                      <CustomTextInput
                        onChangeText={value => this.setState({ percentageExtraField1: value })}
                        value={percentageExtraField1}
                        percentage
                        placeholder="1. Dodatna provjera"
                        error={percentageMaturaExtraField1Error}
                      />
                    ) : null
                }
                  { evaluationExtraField2 !== ''
                    ? (
                      <CustomTextInput
                        onChangeText={value => this.setState({ percentageExtraField2: value })}
                        value={percentageExtraField2}
                        percentage
                        placeholder="2. Dodatna provjera"
                        error={percentageMaturaExtraField2Error}
                      />
                    ) : null
                }
                  { evaluationExtraField3 !== ''
                    ? (
                      <CustomTextInput
                        onChangeText={value => this.setState({ percentageExtraField3: value })}
                        value={percentageExtraField3}
                        percentage
                        placeholder="3. Dodatna provjera"
                        error={percentageMaturaExtraField3Error}
                      />
                    ) : null
                }
                </ScrollView>
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => this.handleBack(activeStep)} buttonText="NATRAG" />
                  <CustomButton onPress={this.handlePress} buttonText="ZAVRŠI" buttonProgress="6/6" />
                </View>
              </KeyboardAvoidingView>
            </View>
        )}
        />
      );
    } else if (activeStep === 7) {
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
