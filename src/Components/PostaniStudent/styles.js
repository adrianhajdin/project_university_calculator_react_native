import EStyleSheet from 'react-native-extended-stylesheet';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default EStyleSheet.create({
  postaniStudentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postaniStudentText: {
    marginRight: 15,
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: 26,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    height: hp('10%'),
    justifyContent: 'center',
    padding: 15,
  },
});
