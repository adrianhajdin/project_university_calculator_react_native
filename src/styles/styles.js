import { StyleSheet } from 'react-native';

const white = '#fff';

export default StyleSheet.create({
  loginScreenButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    height: 60,
    width: 180,
    borderRadius: 40,
  },
  buttonContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: white,
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 1.5,
  },
  image: {
    height: 126,
    width: 126,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    padding: 15,
  },
  textContainer: {
    display: 'flex',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },

});
