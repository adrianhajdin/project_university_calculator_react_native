import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp('100%'),
  },
  container: {
    display: 'flex',
    height: hp('25%'),
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
    height: hp('85%'),
    justifyContent: 'center',
    padding: 15,
  },
  textContainer: {
    display: 'flex',
    height: hp('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
});
