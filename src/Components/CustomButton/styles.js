import EStyleSheet from 'react-native-extended-stylesheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default EStyleSheet.create({
  flexDirectionRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  loginText: {
    color: '#2569fa',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  buttonProgress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('15%'),
    paddingHorizontal: 5,
  },
  buttonText: {
    color: '#2569fa',
    fontSize: 15,
    marginRight: 5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    width: wp('40%'),
    borderRadius: 40,
  },
});
