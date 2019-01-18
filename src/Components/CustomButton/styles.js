import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexDirectionRow: {
    display: 'flex', flexDirection: 'row',
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
    marginTop: 100,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginTextProgress: {
    color: '#2569fa',
    fontSize: 15,
    marginRight: 5,
  },
  loginScreenButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    width: 180,
    borderRadius: 40,
  },
  textContainer: {
    display: 'flex',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
});
