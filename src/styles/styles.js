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
  loginText: {
    color: '#2569fa',
    fontSize: 20,
  },
  containerSwiper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    display: 'flex',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  buttonContainer: {
    display: 'flex',
    height: 300,
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
  inputHeading: {
    fontSize: 25,
    fontFamily: 'Montserrat-Regular',
    color: white,

    marginBottom: 15,
    textAlign: 'center',
  },
  inputParagraph: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: white,

    marginRight: 25,
    marginLeft: 25,
    marginBottom: 10,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color: white,
  },
});
