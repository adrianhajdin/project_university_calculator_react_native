import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles/styles';

import { initialState } from './util/constants';

import { InputComponent, InputField, PostaniStudent, Header, ButtonGroup, ScrollView } from './Components';

class App extends React.Component {
  state = initialState;

  // handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  // handleSelectChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  handleBeginning = () => this.setState({ activeStep: 0 })

  handleBack = activeStep => this.setState({ activeStep: activeStep - 1 });

  handlePress = () => {
    const { activeStep } = this.state;

    if (activeStep === 0) {
      this.setState({ activeStep: activeStep + 1 });
    } else if (activeStep === 1) {
      this.setState({ activeStep: activeStep + 1 });
    } else if (activeStep === 2) {
      this.setState({ activeStep: activeStep + 1 });
    }
  }

  render() {
    const { activeStep } = this.state;

    let dialogContent;

    switch (activeStep) {
      case 0:
        dialogContent = (
          <View>
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
          </View>
        );
        break;
      case 1:
        dialogContent = (
          <View>
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
          </View>
        );
        break;
      case 2:
        dialogContent = (
          <View>
            <View style={styles.inputContainer}>
              <InputComponent
                heading="Rezultati mature"
                paragraph="Ovdje upišite rezultate koje ste postigli na
        ispitima državne mature"
              />
              <InputField placeholder="Hrvatski jezik*" />
              <InputField placeholder="Matematika*" />
              <InputField placeholder="Engleski jezik*" />
            </View>
          </View>
        );
        break;
      case 3:
        dialogContent = (
          <View>
            <View style={styles.inputContainer}>
              <Text>Rezultati:</Text>
              <Text>Ukupan broj bodova:</Text>
            </View>
          </View>
        );
        break;
      default:
        break;
    }

    return (
      <ScrollView
        children={(
          <React.Fragment>
            <View>
              <Header />
              {dialogContent}
            </View>
            <ButtonGroup
              activeStep={activeStep}
              onForward={this.handlePress}
              onBack={() => this.handleBack(activeStep)}
              onBeginning={this.handleBeginning}
            />
          </React.Fragment>
        )}
      />
    );
  }
}

export default App;
