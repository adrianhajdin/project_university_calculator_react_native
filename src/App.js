import { createStackNavigator, createAppContainer } from 'react-navigation';

import { FirstScreen, SecondScreen, FourthScreen, ThirdScreen } from './Components';

const RootStack = createStackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  Third: { screen: ThirdScreen },
  Fourth: { screen: FourthScreen },
}, {
  headerMode: 'none',
});

const App = createAppContainer(RootStack);

export default App;
