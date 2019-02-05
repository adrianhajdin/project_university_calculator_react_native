import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: 'white',
  $buttonBackgroundColorModifier: 0.1,
  width: {
    width: 90,
    color: '#2569fa',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },

  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#2569fa',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 19,
    paddingLeft: 15,
    color: '#797979',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    color: 'blue',
  },
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
});
