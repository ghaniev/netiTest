import {StyleSheet} from 'react-native';

export const MainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  divider: {
    height: '100%',
    width: 5,
  },
  textContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 530,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    fontSize: 20,
    color: 'black',
  },
  textPrice: {
    fontSize: 15,
    color: 'grey',
  },
  randomContainer: {
    position: 'absolute',
    right: 20,
    bottom: 60,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  randomIcon: {
    height: 40,
    width: 40,
  },
  textTotalContainer: {
    height: 20,
    marginBottom: 20,
  },
  textTotal: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
  },
});
