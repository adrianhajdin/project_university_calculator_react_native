import { StyleSheet } from 'react-native';

const white = '#fff';

export default StyleSheet.create({
  textItem: {
    color: white,
    fontWeight: '400',
    fontSize: 20,
  },
  textRight: {
    color: white,
    fontWeight: '500',
    fontSize: 18,
    paddingLeft: 30,
  },
  container: {
    display: 'flex',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: white,
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 1.5,
    marginBottom: 30,
  },
  image: {
    height: 126,
    width: 126,
  },

  inputHeading: {
    fontSize: 30,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  inputParagraph: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 10,
    textAlign: 'center',
  },

});
